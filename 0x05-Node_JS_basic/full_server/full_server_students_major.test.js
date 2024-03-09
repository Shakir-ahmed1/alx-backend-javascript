const chai = require('chai');
const chaiHttp = require('chai-http');

process.argv[2] = './database.csv';

import app from './server';

chai.use(chaiHttp);
chai.should();

describe('Full HTTP server using Express', () => {

  describe('/students/:major endpoint', () => {
    describe('When the database is available', () => {
      before(() => {
        process.argv[2] = './database.csv';
      });

      it('Returns the right content', (done) => {
        chai.request(app)
          .get('/students/SWE')
          .end((error, response) => {
            chai.expect(response.statusCode).to.equal(200);
            chai.expect(response.text).to.equal(`List: Guillaume, Joseph, Paul, Tommy`);
            done();

          });
      });
    });
  });
});
