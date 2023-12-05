export default function updateUniqueItems(elements) {
  const gr = elements;
  if (!(elements instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const element of gr.keys()) {
    if (gr.get(element) === 1) {
      gr.set(element, 100);
    }
  }
  return gr;
}
