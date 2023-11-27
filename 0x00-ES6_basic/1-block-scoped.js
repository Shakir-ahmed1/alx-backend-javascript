export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task2 = true;
    task = false;
  }

  return [task, task2];
}
