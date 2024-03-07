import fs from 'fs';

export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.trim().split('\n');
        const database = {};
        lines.forEach((line) => {
          const [firstName, field] = line.split(',');
          if (!database[field]) {
            database[field] = [];
          }
          database[field].push(firstName);
        });
        resolve(database);
      }
    });
  });
}
