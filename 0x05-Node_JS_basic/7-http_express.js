const util = require('util');
const exec = util.promisify(require('child_process').exec);

function csvToList(csv) {
  const text = csv.trim();
  const list = text.split('\n');
  list.shift();
  const newls = [];
  for (const b of list) {
    newls.push(b.split(','));
  }
  return newls;
}

async function countStudents(path) {
  try {
    const { stdout, stderr } = await exec(`cat ${path}`);
    if (!stderr) {
      const data = stdout;
      const datals = csvToList(data.toString());
      const fields = [];
      for (const a of datals) {
        if (!fields.includes(a[3])) {
          fields.push(a[3]);
        }
      }
      let result = `Number of students: ${datals.length}\n`;
      for (const a of fields) {
        let counter = 0;
        const firstnames = [];
        for (const b of datals) {
          if (b[3] === a) {
            counter += 1;
            firstnames.push(b[0]);
          }
        }
        result += `Number of students in ${a}: ${counter}. List: ${firstnames.join(', ')}\n`;
      }
      return { stdout: result.trim(), stderr };
    }
  } catch (e) {
    return { stdout: 'Cannot load the database' };
  }
  return { stdout: 'success' };
}

const express = require('express');

const app = express();
const port = 1245;
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
  res.set('Content-Type', 'text/plain');
});
app.get('/students', async (req, res) => {
  try {
    const students = await countStudents(process.argv[2]);
    res.set('Content-Type', 'text/plain');
    res.send(`This is the list of our students\n${students.stdout}`);
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
module.exports = app;
