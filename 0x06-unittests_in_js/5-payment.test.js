const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');

describe('payments', function () {
  beforeEach(() => {
    sinon.spy(console, 'log');
  });
  afterEach(() => {
    sinon.restore();
  });
  it('tests for summation of 100 and 20', () => {
    const pay = sendPaymentRequestToApi(100, 20);
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.firstCall.args[0]).to.equal('The total is: 120');
  });
  it('tests for summation of 10 and 10', () => {
    const pay = sendPaymentRequestToApi(10, 10);
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.firstCall.args[0]).to.equal('The total is: 20');

  });
});