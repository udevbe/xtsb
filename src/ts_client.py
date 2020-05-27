#!/usr/bin/env python
# from xml.etree.cElementTree import *
# from os.path import basename
import errno
import getopt
import os
import re

# Jump to the bottom of this file for the main routine

# Some hacks to make the API more readable, and to keep backwards compability
import sys

_tsname_re = re.compile('^\d')
_tsname_except_re = re.compile('^Bad')

_ts_reserved_words = ['undefined', 'interface', 'type', 'enum', 'class', 'string', 'number',
                      'delete', 'new']
_ts_types = {
  'CARD8': 'number', 'uint8_t': 'number',
  'CARD16': 'number', 'uint16_t': 'number',
  'CARD32': 'number', 'uint32_t': 'number',
  'INT8': 'number', 'int8_t': 'number',
  'INT16': 'number', 'int16_t': 'number',
  'INT32': 'number', 'int32_t': 'number',
  'BYTE': 'number',
  'BOOL': 'boolean',
  'char': 'number',
  'void': 'any',
  'float': 'number',
  'double': 'number'
}

_cardinal_types = {
  'CARD8': 'B', 'uint8_t': 'B',
  'CARD16': 'H', 'uint16_t': 'H',
  'CARD32': 'I', 'uint32_t': 'I',
  'INT8': 'b', 'int8_t': 'b',
  'INT16': 'h', 'int16_t': 'h',
  'INT32': 'i', 'int32_t': 'i',
  'BYTE': 'B',
  'BOOL': 'B',
  'char': 'b',
  'void': 'B',
  'float': 'f',
  'double': 'd'
}

_simple_list_types = {
  "'B'": 'Uint8Array',
  "'H'": 'Uint16Array',
  "'I'": 'Uint32Array',
  "'b'": 'Int8Array',
  "'h'": 'Int16Array',
  "'i'": 'Int32Array',
  "'void'": 'TypedArray',
  "'float'": 'Float32Array',
  "'double'": 'Float64Array'
}

_tslines = []
_tslevel = 0
_ns = None

_ts_fmt_fmt = ''
_ts_fmt_size = 0
_ts_fmt_list = []


def _camel(s):
  if "_" not in s:
    # not a snake case
    return s
  first, *others = s.split('_')
  return ''.join([first.lower(), *map(str.title, others)])


def _ts(fmt, *args):
  '''
  Writes the given line to the header file.
  '''
  _tslines[_tslevel].append(fmt % args)


def _ts_popline():
  _tslines[_tslevel][-1:] = ()


def _ts_setlevel(idx):
  '''
  Changes the array that source lines are written to.
  Supports writing different sections of the source file.
  '''
  global _tslevel
  while len(_tslines) <= idx:
    _tslines.append([])
  _tslevel = idx


def _t(str):
  '''
  Does Python-name conversion on a type tuple of strings.
  '''
  return str[-1]


def _n(str):
  '''
  Does Python-name conversion on a single string fragment.
  Handles some number-only names and reserved words.
  '''
  if _tsname_re.match(str) or str in _ts_reserved_words:
    return '_' + _camel(str)
  else:
    return _camel(str)


def _b(bool):
  '''
  Boolean to string
  '''

  return 'true' if bool else 'false'


def _ts_push_format(field):
  global _ts_fmt_fmt, _ts_fmt_size, _ts_fmt_list

  _ts_fmt_fmt += field.type.ts_format_str
  _ts_fmt_size += field.type.size
  _ts_fmt_list.append(_n(field.field_name))


def _ts_push_format_simple(field):
  global _ts_fmt_fmt, _ts_fmt_size, _ts_fmt_list

  _ts_fmt_fmt += field.type.ts_format_str
  _ts_fmt_size += field.type.size
  _ts_fmt_list.append(_n(field.field_name))


def _ts_push_pad(nmemb):
  global _ts_fmt_fmt, _ts_fmt_size, _ts_fmt_list

  num = '' if nmemb == 1 else str(nmemb)
  _ts_fmt_fmt += num + 'x'
  _ts_fmt_size += nmemb


def _ts_flush_format():
  global _ts_fmt_fmt, _ts_fmt_size, _ts_fmt_list

  joined = ', '.join(_ts_fmt_list)
  retval = [_ts_fmt_fmt, _ts_fmt_size, joined]
  _ts_fmt_fmt = ''
  _ts_fmt_size = 0
  _ts_fmt_list = []
  return retval


def _ts_type_setup(self, name, postfix=''):
  '''
  Sets up all the C-related state by adding additional data fields to
  all Field and Type objects.  Here is where we figure out most of our
  variable and function names.

  Recurses into child fields and list member types.
  '''
  # Do all the various names in advance
  self.ts_type = _t(name) + postfix

  self.ts_request_name = _t(name)
  self.ts_checked_name = _t(name) + 'Checked'
  self.ts_unchecked_name = _t(name) + 'Unchecked'
  self.ts_reply_name = _t(name) + 'Reply'
  self.ts_event_name = _t(name) + 'Event'
  self.ts_cookie_name = _t(name) + 'Cookie'

  if _tsname_except_re.match(_t(name)):
    self.ts_error_name = re.sub('Bad', '', _t(name), 1) + 'Error'
    self.ts_except_name = _t(name)
  else:
    self.ts_error_name = _t(name) + 'Error'
    self.ts_except_name = 'Bad' + _t(name)

  if self.is_pad:
    self.ts_format_str = ('' if self.nmemb == 1 else str(self.nmemb)) + 'x'
    self.ts_format_len = 0

  elif self.is_simple or self.is_expr:
    self.ts_format_str = _cardinal_types[_t(self.name)]
    self.ts_format_len = 1

  elif self.is_list:
    if self.fixed_size():
      self.ts_format_str = str(self.nmemb) + _cardinal_types[_t(self.member.name)]
      self.ts_format_len = self.nmemb
    else:
      self.ts_format_str = None
      self.ts_format_len = -1

  elif self.is_container:

    self.ts_format_str = ''
    self.ts_format_len = 0
    self.ts_fixed_size = 0

    for field in self.fields:
      _ts_type_setup(field.type, field.field_type)

      field.ts_type = _t(field.field_type)

      if field.type.ts_format_len < 0:
        self.ts_format_str = None
        self.ts_format_len = -1
      elif self.ts_format_len >= 0:
        self.ts_format_str += field.type.ts_format_str
        self.ts_format_len += field.type.ts_format_len

      if field.type.is_list:
        _ts_type_setup(field.type.member, field.field_type)

        field.ts_listtype = _t(field.type.member.name)
        if field.type.member.is_simple:
          field.ts_listtype = "'" + field.type.member.ts_format_str + "'"

        field.ts_listsize = -1
        if field.type.member.fixed_size():
          field.ts_listsize = field.type.member.size

      if field.type.fixed_size():
        self.ts_fixed_size += field.type.size


def _ts_get_length_field(expr):
  '''
  Figures out what C code is needed to get a length field.
  For fields that follow a variable-length field, use the accessor.
  Otherwise, just reference the structure field directly.
  '''
  if expr.lenfield_name is not None:
    for grandparent in expr.parent.parents:
      # This would be nicer if Request had an is_request attribute...
      if hasattr(grandparent, "opcode"):
        return expr.lenfield_name
    return '%s' % expr.lenfield_name
  else:
    return str(expr.nmemb)


def _ts_get_expr(expr):
  '''
  Figures out what C code is needed to get the length of a list field.
  Recurses for math operations.
  Returns bitcount for value-mask fields.
  Otherwise, uses the value of the length field.
  '''
  lenexp = _ts_get_length_field(expr)

  if expr.op != None:
    return '(' + _ts_get_expr(expr.lhs) + ' ' + expr.op + ' ' + _ts_get_expr(expr.rhs) + ')'
  else:
    return lenexp if (lenexp.isdigit()) else (_n(lenexp))


def _ts_type_alignsize(field):
  if field.type.is_list:
    return field.type.member.size if field.type.member.fixed_size() else 4
  if field.type.is_container:
    return field.type.size if field.type.fixed_size() else 4
  return field.type.size


def _ts_field_type(field):
  postfix = '[]' if field.type.is_list else ''

  element_type = None
  if field.enum:
    element_type = field.enum
  elif field.type.is_switch:
    ts_switch_type = ', '.join(
      [f'{_n(switch_field.field_name)}: {_ts_field_type(switch_field)}' for switch_field in
       field.type.fields])
    element_type = f'Partial<{{ {ts_switch_type} }}>'
  elif field.type.is_list and field.type.member.is_simple:
    postfix = ''
    element_type = _simple_list_types[field.ts_listtype]
  else:
    element_type = _ts_types.get(field.ts_type, field.ts_type)

  return f'{element_type}{postfix}'


def _ts_type_fields(self):
  for field in self.fields:
    if field.type.is_pad or field.auto:
      continue
    _ts(f'  {_n(field.field_name)}: {_ts_field_type(field)}')


def _ts_fields(self):
  for field in self.fields:
    if field.type.is_pad or field.auto:
      continue
    _ts(f'      {_n(field.field_name)},')


def _ts_unmarshall_complex(self):
  _ts(
    'const unmarshall%s: Unmarshaller<%s> = (buffer, offset=0) => {',
    self.ts_type,
    self.ts_type
  )

  need_alignment = False

  for field in self.fields:
    if field.auto:
      _ts_push_pad(field.type.size)
      continue
    if field.type.is_simple:
      _ts_push_format_simple(field)
      continue
    if field.type.is_pad:
      _ts_push_pad(field.type.nmemb)
      continue

    (format, size, list) = _ts_flush_format()
    if len(list) > 0:
      _ts('  const [ %s ] = unpackFrom(\'%s\', buffer, offset)', list, format)
    if size > 0:
      _ts('  offset += %d', size)

    if need_alignment:
      _ts('  offset += typePad(%d, offset)', _ts_type_alignsize(field))
    need_alignment = True

    if field.type.is_list:
      _ts(
        '  const %sWithOffset = xcb%sList(buffer, offset, %s, %s%s)',
        _n(field.field_name),
        'Simple' if field.type.member.is_simple else 'Complex',
        _ts_get_expr(field.type.expr),
        _simple_list_types[
          field.ts_listtype] if field.type.member.is_simple else f'unmarshall{field.ts_listtype}',
        f', {field.ts_listsize}' if field.type.member.is_simple else ''
      )
      _ts('  offset = %sWithOffset.offset', _n(field.field_name))
      _ts('  const %s = %sWithOffset.value', _n(field.field_name), _n(field.field_name))
    else:
      _ts('  const %sWithOffset = unmarshall%s(buffer, offset)', _n(field.field_name),
          field.ts_type)
      _ts('  const %s = %sWithOffset.value', _n(field.field_name), _n(field.field_name))
      _ts('  offset = %sWithOffset.offset', _n(field.field_name))

  (format, size, list) = _ts_flush_format()
  if len(list) > 0:
    if need_alignment:
      _ts('    offset += typePad(4, offset)')
    _ts('  const [ %s ] = unpackFrom(\'%s\', buffer, offset)', list, format)
    _ts('  offset += %d', size)

  # if self.fixed_size() or self.is_reply:
  #     if self.fields and not all(field.auto or field.type.is_pad for field in self.fields):
  #         _ts_popline()
  _ts('')
  _ts('  return {')
  _ts('    value: {')
  _ts_fields(self)
  _ts('    },')
  _ts('    offset')
  _ts('  }')
  _ts('}')


def _ts_marshall_complex(self):
  _ts(
    'const marshall%s: ArrayBuffer = (instance: %s) => {',
    self.ts_type,
    self.ts_type
  )

  _ts('}')


def _ts_complex(self, name):
  _ts_unmarshall_complex(self)
  # _ts('')
  # _ts_marshall_complex(self)


def _ts_reply(self, name):
  '''
  Handles reply declarations.
  '''
  _ts_type_setup(self, name, 'Reply')

  _ts_setlevel(0)
  _ts('')
  _ts('export type %s = {', self.ts_reply_name)
  _ts_type_fields(self)
  _ts('}')
  _ts('')
  _ts_unmarshall_complex(self)


def _ts_request_helper(self, name, void, regular):
  '''
  Declares a request function.
  '''

  # Four stunningly confusing possibilities here:
  #
  #   Void            Non-void
  # ------------------------------
  # "req"            "req"
  # 0 flag           CHECKED flag   Normal Mode
  # void_cookie      req_cookie
  # ------------------------------
  # "req_checked"    "req_unchecked"
  # CHECKED flag     0 flag         Abnormal Mode
  # void_cookie      req_cookie
  # ------------------------------

  # Whether we are _checked or _unchecked
  checked = void and not regular
  unchecked = not void and not regular

  # What kind of cookie we return
  func_cookie = 'xcbVoidCookie' if void else self.ts_cookie_name

  # What flag is passed to xcb_request
  func_flags = checked or (not void and regular)

  # What our function name is
  func_name = self.ts_request_name
  if checked:
    func_name = self.ts_checked_name
  if unchecked:
    func_name = self.ts_unchecked_name

  param_fields = []
  wire_fields = []

  # exclude mask fields from appearing in the method signature, the mask will be created based on the values passed in.
  mask_fields = [field.type.fieldref for field in self.fields if field.type.is_switch]
  length_fields = [field.type.expr.lenfield.field_name for field in self.fields if
                   field.type.is_list and field.type.expr.lenfield]

  for field in self.fields:
    if field.visible \
      and field.field_name not in mask_fields \
      and field.field_name not in length_fields:
      # The field should appear as a call parameter
      param_fields.append(field)
    if field.wire:
      # We need to set the field up in the structure
      wire_fields.append(field)

  _ts_setlevel(1)
  _ts('')
  _ts('declare module \'./connection\' {')
  _ts('  interface XConnection {')
  _ts(
    '    %s (%s): %s',
    func_name,
    ', '.join([f'{_n(x.field_name)}: {_ts_field_type(x)}' for x in param_fields]),
    func_cookie if not void else 'Promise<void>'
  )
  _ts('  }')
  _ts('}')
  _ts('')
  _ts(
    'XConnection.prototype.%s = function(%s): %s {',
    func_name,
    ', '.join([f'{_n(x.field_name)}: {_ts_field_type(x)}' for x in param_fields]),
    func_cookie if not void else 'Promise<void>'
  )
  for field in param_fields:
    if field.type.is_list and field.type.expr.lenfield:
      _ts('  const %s = %s.length', _n(field.type.expr.lenfield.field_name), _n(field.field_name))

  _ts('  const requestParts: ArrayBuffer[] = []')
  _ts('')

  def write_request_part(fields):
    for field in fields:
      if field.auto:
        _ts_push_pad(field.type.size)
        continue
      if field.type.is_simple:
        _ts_push_format(field)
        continue
      if field.type.is_pad:
        _ts_push_pad(field.type.nmemb)
        continue
      if field.type.is_switch:
        if field.type.fieldref:
          _ts('  const %sFormats: {[key: string]: string} = {', _n(field.field_name))
          _ts(
            '    %s', ',\n    '.join(
              [
                f'{_n(x.field_name)}: \'{x.type.ts_format_str}\''
                for
                x
                in field.type.fields
              ]
            ))
          _ts('  }')
          _ts('')
          _ts('  const %sBitmasks: {[key: string]: number} = {', _n(field.field_name))
          _ts(
            '    %s', ',\n    '.join(
              [
                f'{_n(x.field_name)}: {x.parent.expr[-1].lenfield_type.name[-1]}.{x.parent.expr[-1].lenfield_name}'
                for
                x
                in field.type.fields
              ]
            ))
          _ts('  }')
          _ts(
            '  const %sSortedList = Object.keys(%s).sort((a, b) => %sBitmasks[a] - %sBitmasks[b])',
            _n(field.type.fieldref),
            _n(field.field_name),
            _n(field.field_name),
            _n(field.field_name)
          )
          _ts(
            '  const %s = %sSortedList.map(value => %sBitmasks[value]).reduce((mask, bit)=> mask | bit)',
            _n(field.type.fieldref),
            _n(field.type.fieldref),
            _n(field.field_name)
          )
          _ts('')
          _ts('  const %sValues =', _n(field.field_name))
          _ts('    Object.entries(%s)', _n(field.field_name))
          _ts(
            '      .sort(([key], [otherKey]) => %sSortedList.indexOf(key) - %sSortedList.indexOf(otherKey))',
            _n(field.type.fieldref), _n(field.type.fieldref)
          )
          _ts('      .map(([_, value]) => value)')
          _ts('      .filter(notUndefined)')
        else:
          _ts('  const %sValues = Object.values(%s)', _n(field.field_name), _n(field.field_name))

      (format, size, list) = _ts_flush_format()
      if size > 0:
        _ts('  requestParts.push(pack(\'=%s\', %s))', format, list)

      if field.type.is_expr:
        _ts('  requestParts.push(pack(\'=%s\', %s))', field.type.ts_format_str,
            _ts_get_expr(field.type.expr))
      elif field.type.is_pad:
        _ts('  requestParts.push(pack(\'%sx\'))', field.type.nmemb)
      elif field.type.is_switch:
        _ts('  requestParts.push(pack(\'=\'+%sSortedList.map(key=>%sFormats[key]).join(\'\'), ...%sValues))',
            _n(field.type.fieldref),
            _n(field.field_name),
            _n(field.field_name))
      elif field.type.is_list and field.type.member.is_simple:
        _ts('  requestParts.push(%s.buffer)', _n(field.field_name))
      elif field.type.is_list:
        _ts('  %s.forEach(({%s}) => {', _n(field.field_name), ', '.join(
          [f'{_n(x.field_name)}' for x in field.type.member.fields if not x.type.is_pad]
        ))
        write_request_part(field.type.member.fields)
        _ts('  })')
      else:
        _ts('  new Error(\'FIXME support sending this type: \')', field.field_type[-1])

    (format, size, list) = _ts_flush_format()
    if size > 0:
      _ts('  requestParts.push(pack(\'=%s\', %s))', format, list)
    _ts('')

  write_request_part(wire_fields)

  _ts(
    '  return sendRequest<%s>(this.socket, requestParts, %s, %s, %s%s)',
    self.ts_reply_name if not void else 'void',
    self.opcode,
    _b(void),
    _b(func_flags),
    f', unmarshall{self.ts_reply_name}' if not void else ''
  )
  _ts('}')


def ts_open(self):
  '''
  Exported function that handles module open.
  Opens the files and writes out the auto-generated comment, header file includes, etc.
  '''
  global _ns
  _ns = self.namespace

  _ts_setlevel(0)
  _ts('//')
  _ts('// This file generated automatically from %s by ts_client.py.', _ns.file)
  _ts('// Edit at your peril.')
  _ts('//')
  _ts('')
  _ts('import { XConnection } from \'./connection\'')
  _ts(
    'import { xcbSimpleList, xcbComplexList, Unmarshaller, typePad, sendRequest, notUndefined } from \'./xjsbInternals\'')
  _ts('import { unpackFrom, pack } from \'./struct\'')
  _ts('')

  if _ns.is_ext:
    for (n, h) in self.imports:
      _ts('import * as %s from \'%s\'', h)

    _ts('')
    _ts('const MAJOR_VERSION = %s', _ns.major_version)
    _ts('const MINOR_VERSION = %s', _ns.minor_version)
    _ts('')
    # _ts('key = xcb.ExtensionKey(\'%s\')', _ns.ext_xname)

  _ts_setlevel(1)
  # _ts('import { XExtension } from \'./xtypes\'')
  _ts('')
  # _ts('export class %sExtension implements XExtension {', _ns.header.title())

  _ts_setlevel(2)
  _ts('export const events = {')

  _ts_setlevel(3)
  _ts('}')
  _ts('')
  _ts('export const errors = {')

  _ts_setlevel(4)
  _ts('}')
  # _ts('}')
  _ts('')
  # if _ns.is_ext:
  #     _ts('xcb._add_ext(key, %sExtension, _events, _errors)', _ns.header)
  # else:
  #     _ts('xcb._add_core(%sExtension, Setup, _events, _errors)', _ns.header)
  # pass


def ts_close(self):
  '''
  Exported function that handles module close.
  Writes out all the stored content lines, then closes the file.
  '''
  tsfile = open('%s.ts' % _ns.header, 'w')
  for list in _tslines:
    for line in list:
      tsfile.write(line)
      tsfile.write('\n')
  tsfile.close()


def ts_enum(self, name):
  _ts_setlevel(0)
  _ts('')
  _ts('export enum %s {', _t(name))

  count = 0

  for (enam, eval) in self.values:
    _ts('  %s= %s,', _n(enam), eval if eval != '' else count)
    if eval != '':
      count = int(eval) + 1
    else:
      count += 1
  _ts('}')


def ts_simple(self, name):
  '''
  Exported function that handles cardinal declarations.
  These are types which are typedef'd to one of the CARDx's char, float, etc.
  '''
  _ts_type_setup(self, name, '')
  _ts('')
  _ts(f'export type {name[-1]} = {_ts_types[self.name[-1]]}')
  _ts('')


def ts_struct(self, name):
  '''
  Exported function that handles structure declarations.
  '''
  _ts_type_setup(self, name)

  _ts_setlevel(0)

  _ts('')
  _ts('export type %s  = {', self.ts_type)
  _ts_type_fields(self)
  _ts('}')
  _ts('')
  _ts_complex(self, name)


def ts_union(self, name):
  '''
  Exported function that handles union declarations.
  '''
  _ts_type_setup(self, name)

  _ts_setlevel(0)

  _ts('')
  _ts('export type %s  = {', self.ts_type)
  _ts_type_fields(self)
  _ts('}')
  _ts('')
  _ts(
    'const unmarshall%s: Unmarshaller<%s> = (buffer, offset=0) => {',
    self.ts_type,
    self.ts_type
  )
  _ts('  let size = 0')
  _ts('')
  for field in self.fields:
    if field.type.is_simple:
      _ts('  const %s = unpackFromFrom(\'%s\', buffer, offset)', _n(field.field_name),
          field.type.ts_format_str)
      _ts('  size = Math.max(size, %s)', field.type.size)
    elif field.type.is_list:
      _ts(
        '  const %sWithOffset = xcb%sList(buffer, offset, %s, %s%s)',
        _n(field.field_name),
        'Simple' if field.type.member.is_simple else 'Complex',
        _ts_get_expr(field.type.expr),
        _simple_list_types[
          field.ts_listtype] if field.type.member.is_simple else f'unmarshall{field.ts_listtype}',
        f', {field.ts_listsize}' if field.type.member.is_simple else ''
      )
      _ts('  const %s = %sWithOffset.value', _n(field.field_name), _n(field.field_name))
      _ts('  size = Math.max(size, %sWithOffset.offset - offset)', _n(field.field_name))
    else:
      _ts(
        '  const %sWithOffset = unmarshall%s(buffer, offset, %s)',
        _n(field.field_name),
        _n(field.field_name),
        field.ts_type
      )
      _ts('  const %s = %sWithOffset.value', _n(field.field_name), _n(field.field_name))
      _ts('  size = Math.max(size, %sWithOffset.offset - offset)', _n(field.field_name))
  _ts('  offset += size')
  _ts('')
  _ts('  return {')
  _ts('    value: {')
  _ts_fields(self)
  _ts('    },')
  _ts('    offset')
  _ts('  }')
  _ts('}')


def ts_request(self, name):
  '''
  Exported function that handles request declarations.
  '''
  _ts_type_setup(self, name, 'Request')
  _ts_setlevel(0)

  if self.reply:
    # Cookie class declaration
    _ts('')
    _ts('export type %s = Promise<%s>', self.ts_cookie_name, self.ts_reply_name)
    # Reply class definition
    _ts_reply(self.reply, name)
    # Request prototypes
    _ts_request_helper(self, name, False, True)
    _ts_request_helper(self, name, False, False)
  else:
    # Request prototypes
    _ts_request_helper(self, name, True, False)
    _ts_request_helper(self, name, True, True)


def ts_event(self, name):
  '''
  Exported function that handles event declarations.
  '''
  _ts_type_setup(self, name, 'Event')

  # Structure definition
  _ts_setlevel(0)
  _ts('')
  _ts('export type %s = {', self.ts_event_name)
  _ts_type_fields(self)
  _ts('}')
  _ts('')
  _ts_complex(self, name)

  # Opcode define
  _ts_setlevel(2)
  _ts('    %s : unmarshall%s,', self.opcodes[name], self.ts_event_name)


def ts_eventstruct(self, name):
  '''
  Exported function that handles structure declarations.
  '''
  _ts_type_setup(self, name)

  _ts_setlevel(0)

  _ts('')
  _ts('export type %s  = {', self.ts_type)
  _ts_type_fields(self)
  _ts('}')
  _ts('')
  _ts_complex(self, name)


def ts_error(self, name):
  '''
  Exported function that handles error declarations.
  '''
  _ts_type_setup(self, name, 'Error')

  # Structure definition
  _ts_setlevel(0)
  _ts('')
  _ts('export type %s = {', self.ts_error_name)
  _ts_type_fields(self)
  _ts('}')
  _ts('')

  _ts_complex(self, name)

  # Exception definition
  _ts('')
  _ts('export class %s extends Error {', self.ts_except_name)
  _ts('  readonly error: %s', self.ts_error_name)
  _ts('  constructor (error: %s) {', self.ts_error_name)
  _ts('    super()')
  _ts('    this.error = error')
  _ts('  }')
  _ts('}')

  # Opcode define
  _ts_setlevel(3)
  _ts('    %s : [unmarshall%s, %s],', self.opcodes[name], self.ts_error_name, self.ts_except_name)


# Main routine starts here

# Must create an "output" dictionary before any xcbgen imports.
output = {'open': ts_open,
          'close': ts_close,
          'simple': ts_simple,
          'enum': ts_enum,
          'struct': ts_struct,
          'union': ts_union,
          'request': ts_request,
          'eventstruct': ts_eventstruct,
          'event': ts_event,
          'error': ts_error,
          }

# Boilerplate below this point

# Check for the argument that specifies path to the xcbgen python package.
try:
  opts, args = getopt.getopt(sys.argv[1:], 'p')
except getopt.GetoptError as err:
  print(err)
  print('Usage: ts_client.py [-p path] file.xml')
  sys.exit(1)

for (opt, arg) in opts:
  if opt == '-p':
    sys.path.insert(1, arg)

# Import the module class
try:
  from xcbgen.state import Module
  from xcbgen.xtypes import *
except ImportError:
  print('''
Failed to load the xcbgen Python package!
Make sure that xcb/proto installed it on your Python path.
If not, you will need to create a .pth file or define $PYTHONPATH
to extend the path.
Refer to the README file in xcb/proto for more info.
''')
  raise

# Ensure the man subdirectory exists
try:
  os.mkdir('man')
except OSError as e:
  if e.errno != errno.EEXIST:
    raise

# Parse the xml header
module = Module(args[0], output)

# Build type-registry and resolve type dependencies
module.register()
module.resolve()

# Output the code
module.generate()
