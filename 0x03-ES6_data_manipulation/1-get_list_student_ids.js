export default function getListStudnetIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map((value) => value.id);
}
