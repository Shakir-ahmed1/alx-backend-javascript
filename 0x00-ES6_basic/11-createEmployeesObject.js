export default function createEmployeesObject(departmentName, employees) {
  const dep = {
	  [departmentName] : [...employees]
  }
  return dep;
}
