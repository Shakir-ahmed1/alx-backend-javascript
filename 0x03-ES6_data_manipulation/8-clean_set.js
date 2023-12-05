export default function cleanSet(set, startString) {
  const result = [];
  if (startString === '') {
    return '';
  }
  for (const element of set) {
    if (element.startsWith(startString)) {
      result.push(element.slice(startString.length));
    }
  }
  return result.join('-');
}
