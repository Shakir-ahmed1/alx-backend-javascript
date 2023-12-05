export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  return studentsList
    .filter((value) => value.location === city)
    .map((value) => {
	    for (const val of newGrades) {
	      if (value.id === val.studentId) {
	        value.grade = val.grade;
	      }
	    }
	    if (typeof value.grade === 'undefined') {
	      value.grade = 'N/A';
	    }
	    return value;
    });
}
