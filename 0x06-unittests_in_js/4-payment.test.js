const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
  it('spies on calculateNumber', () => {
    const stubCalculateNumber = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.firstCall.args[0]).to.equal('The total is: 10');
    expect(stubCalculateNumber.calledOnce).be.true;
    expect(stubCalculateNumber.firstCall.args[0]).to.equal('SUM');
    expect(stubCalculateNumber.firstCall.args[1]).to.equal(100);
    expect(stubCalculateNumber.firstCall.args[2]).to.equal(20);
    sinon.restore();
  });
});
sendPaymentRequestToApi(7, 5);
