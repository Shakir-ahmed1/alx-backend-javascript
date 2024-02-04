const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
  it('spies on calculateNumber', () => {
    sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledOnce).be.true;
    expect(Utils.calculateNumber.firstCall.args[0]).to.equal('SUM');
    expect(Utils.calculateNumber.firstCall.args[1]).to.equal(100);
    expect(Utils.calculateNumber.firstCall.args[2]).to.equal(20);
    sinon.restore();
  });
});
sendPaymentRequestToApi(7, 5);
