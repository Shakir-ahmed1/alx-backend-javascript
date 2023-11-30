export default function createIteratorObject(report) {
  let result = [];
  for (const x in report.allEmployees) {
    if (x) {
      result = result.concat(report.allEmployees[x]);
    }
  }
  return result;
}
