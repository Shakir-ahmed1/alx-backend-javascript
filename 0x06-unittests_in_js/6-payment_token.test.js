const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('testing the token', () => new Promise((done) => {
    const value = { data: 'Successful response from the API' };
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data.data).to.equal(value.data);
      done();
    });
  }));
});
