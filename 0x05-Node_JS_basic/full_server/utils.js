import fs from 'fs';

export default function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err); // Reject with error if file is not accessible
            } else {
                // Parse the data and extract first names per fields
                const lines = data.trim().split('\n');
                const database = {};
                lines.forEach((line, index) => {
                    if (index !== 0) { // Skip header line
                        const [firstName, lastName, age, field] = line.split(',');
                        if (!database[field]) {
                            database[field] = [];
                        }
                        database[field].push(firstName);
                    }
                });
                resolve(database); // Resolve with the object of arrays of first names per fields
            }
        });
    });
}
