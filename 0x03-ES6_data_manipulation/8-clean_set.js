export default function cleanSet(set, startString) {
  const result = [];
  for (const element of set) {
    if (element.startsWith(startString) && startString) {
      result.push(element.slice(startString.length));
    }
  }
  return result.join('-');
}