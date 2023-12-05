export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((accumulator, value) => accumulator + value.id, 0);
}
