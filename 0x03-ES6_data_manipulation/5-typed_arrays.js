const createInt8TypedArray = (length, position, value) => {
  if (position >= length) throw new Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  new Int8Array(buffer)[position] = value;
  return new DataView(buffer);
};
export default createInt8TypedArray;
