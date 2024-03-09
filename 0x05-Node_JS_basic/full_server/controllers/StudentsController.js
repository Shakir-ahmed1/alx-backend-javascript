import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const database = await readDatabase('./database.csv');
      if (!database) {
        throw new Error('Database not available');
      }

      // Prepare the response
      let response = 'This is the list of our students\n';
      Object.keys(database).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })).forEach((field) => {
        const students = database[field];
        response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      });

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const major = req.params.major.toUpperCase();
      if (major !== 'CS' && major !== 'SWE') {
        throw new Error('Major parameter must be CS or SWE');
      }
      try {
        const database = await readDatabase('./database.csv');
      }
      catch (e) {
        throw new Error('Cannot load the database');
      }

      // Prepare the response
      const response = `List: ${database[major].join(', ')}`;
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
