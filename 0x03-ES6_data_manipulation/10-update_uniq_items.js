export default function updateUniqueItems(elements) {
  const gr = elements;
  for (const element of gr.keys()) {
    if (gr.get(element) === 1) {
      console.log('hey');
      gr.set(element, 100);
    }
  }
  return gr;
}
