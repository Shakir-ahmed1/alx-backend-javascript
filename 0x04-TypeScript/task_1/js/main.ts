// task 1
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}
/*
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);
  */


// task 2
interface Directors extends Teacher {
    numberOfReports: number;
}
/*
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);
*/

//task 3
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
}
/*
console.log(printTeacher("Jhon", "Doe"));
*/

// task 4
interface StudentClassInterface {
    firstName: string;
    lastName: string;
}
class StudentClass implements StudentClassInterface {
    constructor(public firstName: string, public lastName: string) { }

    workOnHomework(): string {
        return "Currently working"
    }

    displayName(): string {
        return this.firstName;
    }
}