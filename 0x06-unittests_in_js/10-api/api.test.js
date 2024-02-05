const {expect} = require('chai');
const request = require('request');

describe('app', () => {
    it('test for content, status code for route /', (done) => {
        const res = request('http://localhost:7865', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
    it('test for content, passing status code for rout /cart/:id', (done) => {
        const res = request('http://localhost:7865/cart/3', (error, response, body) => {
             
            // const regex = new RegExp("^http://localhost:7865/cart/[0-9]+$");
            // regex.test(request.url)   
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 3');
            done();
        });
    });
    it('test for content, passing status code for rout /cart/:id', (done) => {
        const res = request('http://localhost:7865/cart/abc', (error, response, body) => {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
    it('test for content, passing status code for route /available_payments', (done) => {
        const res = request('http://localhost:7865/available_payments', (error, response, body) => {
            const value = {
                payment_methods: {
                  credit_cards: true,
                  paypal: false
                }
              };
            expect(response.statusCode).to.equal(200);
            expect(JSON.parse(body)).to.deep.equal(value);
            done();
        });
    });

    it('test for content, passing status code for route post /login', (done) => {
        const options = {
            url: 'http://localhost:7865/login',
            json: true,
            body: { "userName": "Betty" }
        };
        request.post(options, (error, response, body) => {
            const value = { "userName": "Betty" };
            expect(response.body).to.deep.equal('Welcome Betty');
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});


