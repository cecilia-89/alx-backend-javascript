export default function appendToEachArrayValue(array, appendString) {
  const new_array = array;
  for (const idx of array) {
    new_array[array.indexOf(idx)] = appendString + idx;
  }

  return new_array;
}
