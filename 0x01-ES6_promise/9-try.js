export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const value = mathFunction();
    queue.push(value);
    queue.push('Guardrail was processed');
  } catch (e) {
    queue.push(e.message);
    queue.push('Guardrail was processed');
  }
  return queue;
}
