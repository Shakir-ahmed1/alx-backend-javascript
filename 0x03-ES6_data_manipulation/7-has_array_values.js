export default function hasValuesFromArray(set, array) {
  const seta = new Set(array);
  for (const st of seta) {
    if (!set.has(st)) {
      return false;
    }
  }
  return true;
}
