const {spawnSync} = require('child_process');
function csv_to_list(csv) {
        const text = csv.trim();
        let list = text.split('\n');
        const shifted = list.shift();
        let newls = [];
        for (let b of list) {
                newls.push(b.split(','));
        }
		return newls;
}

function countStudents(path) {
        const cat = spawnSync('cat', [`${path}`]);
        if (cat.status === 0) {
        const data = cat.stdout
		const datals = csv_to_list(data.toString());
        console.log(`Number of students: ${datals.length}`);
		const fields = [];
		for (let a of datals) {
			if (fields.includes(a[3])) {
				continue;
			} else {
				fields.push(a[3]);
			}
		}
		for (let a of fields) {
			let counter = 0;
			let firstnames = []
			for (let b of datals) {
				if (b[3] == a) {
					counter++;
					firstnames.push(b[0]);
				}
			}
			console.log(`Number of students in ${a}: ${counter}. List: ${firstnames.join(', ')}`)

		}
	} else {
        throw new Error('Cannot load the database');
        }
}
module.exports = countStudents;
