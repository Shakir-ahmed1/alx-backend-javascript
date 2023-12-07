// task 5
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }
  getCoffeeBreak() {
    return 'Getting a coffee break';
  }
  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }
  getCoffeeBreak() {
    return 'Cannot have a break';
  }
  workTeacherTasks() {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}


// task 6
function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Teacher | Director) {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}
/*
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
*/

// task 7
type Subject = 'Math' | 'History';
function teachClass(sub: Subject): string {
  if (sub === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}
/*
console.log(teachClass('Math'));
console.log(teachClass('History'));
*/

