export default function createInt8TypedArray (length, position, value) {
  const buff = new ArrayBuffer(length);
  const buffview = new DataView(buff)
  buffview.setInt8(position,value);

  return buffview;
}
