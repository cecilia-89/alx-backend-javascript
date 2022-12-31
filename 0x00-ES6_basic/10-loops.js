export default function appendToEachArrayValue(array, appendString) {
  const list = array;
  for (const idx of array) {
    list[array.indexOf(idx)] = appendString + idx;
  }

  return list;
}
