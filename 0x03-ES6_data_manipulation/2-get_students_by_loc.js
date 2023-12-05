export default function (studentsList, city) {
  return studentsList.filter((value) => value.location === city);
}
