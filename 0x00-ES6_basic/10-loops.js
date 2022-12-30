export default function appendToEachArrayValue(array, appendString) {
  for (let [idx, obj] of array.entries()) {
    array[idx] = appendString + obj;
  }

  return array;
}
