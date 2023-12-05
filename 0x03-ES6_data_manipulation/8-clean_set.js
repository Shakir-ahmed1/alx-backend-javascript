export default function cleanSet(set, startString) {
  const result = [];
  if (startString === '' || startString.length === 0) {
    return '';
  }
  for (const element of set) {
    if (element.startsWith(startString)) {
      // result.push(element.slice(startString.length));
      result.push(element.substring(startString.length));
    }
  }
  return result.join('-');
}
