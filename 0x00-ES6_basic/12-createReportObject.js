export default function createReportObject(employeesList) {
  const report = {
  allEmployees : employeesList,
  getNumberOfDepartments(allemp) {
	  return Object.keys(allemp).length;
  }};
  return report;
}
