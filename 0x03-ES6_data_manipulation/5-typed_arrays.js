export default function createInt8TypedArray (length, position, value) {
  const buff = new ArrayBuffer(length);
  const buffview = new DataView(buff);
  if (position >= length) {
     throw new Error('Position outside range');
  }
  buffview.setInt8(position,value);

  return buffview;
}
