export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const value of array) {
    newArray.append(appendString + value);
  }

  return newArray;
}
