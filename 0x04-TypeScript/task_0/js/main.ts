interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const st1: Student = {firstName: 'Bob', lastName: 'Marley', age: 30, location 'USA'};
const st2: Student = {firstName: 'John', lastName: 'Smith', age: 22, location:'Canada'};
const studentsList = [st1, st2];
let table = document.createElement('table');
let thead = document.createElement('thead');
table.appendChild(thead);
for (let key in studentsList) {
  let th = document.createElement('th');
  th.textContent = key;
  thead.appendChild(th);
  }

let tbody = document.createElement('tbody');
table.appendChild(tbody);
for (let i = 0; i < studentsList.length; i++) {
    let tr = document.createElement('tr');
    for (let key in studentsList[i]) {
        if (key === 'firstName' || 'location') {
          let td = document.createElement('td');
          td.textContent = studentsList[i][key];
	  tr.appendChild(td);
	}
    }
    tbody.appendChild(tr);
}

document.body.appendChild(table);
