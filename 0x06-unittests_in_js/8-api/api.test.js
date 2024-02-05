const {expect} = require('chai');
const request = require('request');

describe('app', () => {
    it('test for content, status code', (done) => {
        const res = request('http://localhost:7865', (error, response, body) => {
            console.log("body--",body);
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
})

