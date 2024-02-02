const util = require('util');
const exec = util.promisify(require('child_process').exec);

// const {spawn} = require('child_process');
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
  // const cat = await exec('cat', [`${path}`]);
  const { stdout, stderr } = await exec(`cat ${path}`);

  if (!stderr) {
    const data = stdout;
    const datals = csvToList(data.toString());
    console.log(`Number of students: ${datals.length}`);
    const fields = [];
    for (const a of datals) {
      if (!fields.includes(a[3])) {
        fields.push(a[3]);
      }
    }
    for (const a of fields) {
      let counter = 0;
      const firstnames = [];
      for (const b of datals) {
        if (b[3] === a) {
          counter += 1;
          firstnames.push(b[0]);
        }
      }
      console.log(`Number of students in ${a}: ${counter}. List: ${firstnames.join(', ')}`);
    }
  } else {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
