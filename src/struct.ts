"use strict"
const rechk = /^([<>])?(([1-9]\d*)?([xcbB?hHiIfdsp]))*$/
const refmt = /([1-9]\d*)?([xcbB?hHiIfdsp])/g
const str = (v: DataView, o: number, c: number): String => String.fromCharCode(
    ...new Uint8Array(v.buffer, v.byteOffset + o, c))
const rts = (v: DataView, o: number, c: number, s: string) => new Uint8Array(v.buffer, v.byteOffset + o, c)
    .set(s.split('').map(str => str.charCodeAt(0)))
const pst = (v: DataView, o: number, c: number) => str(v, o + 1, Math.min(v.getUint8(o), c - 1))
const tsp = (v: DataView, o: number, c: number, s: string) => {
    v.setUint8(o, s.length);
    rts(v, o + 1, c - 1, s)
}
const lut = (le: boolean) => ({
    x: (c: number) => [1, c, 0],
    c: (c: number) => [c, 1, (o: number) => ({u: (v: DataView) => str(v, o, 1), p: (v, c) => rts(v, o, 1, c)})],
    '?': (c: number) => [c, 1, (o: number) => ({u: (v: DataView) => Boolean(v.getUint8(o)), p: (v, B) => v.setUint8(o, B)})],
    b: (c: number) => [c, 1, (o: number) => ({u: (v: DataView) => v.getInt8(o), p: (v, b) => v.setInt8(o, b)})],
    B: (c: number) => [c, 1, (o: number) => ({u: (v: DataView) => v.getUint8(o), p: (v, B) => v.setUint8(o, B)})],
    h: (c: number) => [c, 2, (o: number) => ({u: (v: DataView) => v.getInt16(o, le), p: (v, h) => v.setInt16(o, h, le)})],
    H: (c: number) => [c, 2, (o: number) => ({u: (v: DataView) => v.getUint16(o, le), p: (v, H) => v.setUint16(o, H, le)})],
    i: (c: number) => [c, 4, (o: number) => ({u: (v: DataView) => v.getInt32(o, le), p: (v, i) => v.setInt32(o, i, le)})],
    I: (c: number) => [c, 4, (o: number) => ({u: (v: DataView) => v.getUint32(o, le), p: (v, I) => v.setUint32(o, I, le)})],
    f: (c: number) => [c, 4, (o: number) => ({u: (v: DataView) => v.getFloat32(o, le), p: (v, f) => v.setFloat32(o, f, le)})],
    d: (c: number) => [c, 8, (o: number) => ({u: (v: DataView) => v.getFloat64(o, le), p: (v, d) => v.setFloat64(o, d, le)})],
    s: (c: number) => [1, c, (o: number) => ({u: (v: DataView) => str(v, o, c), p: (v, s: string) => rts(v, o, c, s.slice(0, c))})],
    p: (c: number) => [1, c, (o: number) => ({u: (v: DataView) => pst(v, o, c), p: (v, s: string) => tsp(v, o, c, s.slice(0, c - 1))})]
})
const errbuf = new RangeError("Structure larger than remaining buffer")
const errval = new RangeError("Not enough values for structure")
const struct = (format: string) => {
    let fns = [];
    let size = 0;
    let m = rechk.exec(format);
    if (!m) {
        throw new RangeError("Invalid format string")
    }
    const t = lut('<' === m[1]);
    const lu = (n: string, c: string) => t[c](n ? parseInt(n, 10) : 1);
    while ((m = refmt.exec(format))) {
        ((r: number, s: number, f) => {
            for (let i = 0; i < r; ++i, size += s) {
                if (f) {
                    fns.push(f(size))
                }
            }
        })(...lu(...m.slice(1)))
    }
    const unpack_from = (arrb, offs) => {
        if (arrb.byteLength < (offs | 0) + size) {
            throw errbuf
        }
        let v = new DataView(arrb, offs | 0)
        return fns.map(f => f.u(v))
    }
    const pack_into = (arrb: ArrayBuffer, offs: number, ...values: (number|string)[]) => {
        if (values.length < fns.length) {
            throw errval
        }
        if (arrb.byteLength < offs + size) {
            throw errbuf
        }
        const v = new DataView(arrb, offs)
        new Uint8Array(arrb, offs, size).fill(0)
        fns.forEach((f, i) => f.p(v, values[i]))
    }
    const pack = (...values: (number|string)[]) => {
        let b = new ArrayBuffer(size)
        pack_into(b, 0, ...values)
        return b
    }
    const unpack = (arrb: ArrayBuffer) => unpack_from(arrb, 0)

    function* iter_unpack(arrb: ArrayBuffer) {
        for (let offs = 0; offs + size <= arrb.byteLength; offs += size) {
            yield unpack_from(arrb, offs);
        }
    }

    return Object.freeze({
        unpack, pack, unpack_from, pack_into, iter_unpack, format, size
    })
}
// module.exports = struct
export const pack = (format: string, ...values: (number|string)[]) => struct(format).pack(...values)
export const unpack = (format: string, buffer: ArrayBuffer) => struct(format).unpack(buffer)
export const packInto = (format: string, arrb: ArrayBuffer, offs: number, ...values: (number|string)[]) => struct(format).pack_into(arrb, offs, ...values)
export const unpackFrom = (format: string, arrb: ArrayBuffer, offset: number) => struct(format).unpack_from(arrb, offset)
export const iterUnpack = (format: string, arrb: ArrayBuffer) => struct(format).iter_unpack(arrb)
export const calcsize = (format: string) => struct(format).size
