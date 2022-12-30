export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array.entries()) {
    array[array.indexOf(idx)] = appendString + obj;
  }

  return array;
}
