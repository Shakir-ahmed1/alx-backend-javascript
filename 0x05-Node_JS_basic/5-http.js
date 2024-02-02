const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;
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

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const students = await countStudents(process.argv[2]);
      res.write(`This is the list of our students\n${students.stdout}`);
    } catch (e) {
      console.log(e);
    }
  } else {
    res.write('url not found');
  }

  res.end();
});
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
module.exports = app;
