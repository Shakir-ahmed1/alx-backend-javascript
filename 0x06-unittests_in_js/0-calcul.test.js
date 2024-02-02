const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('should return the sum of two rounded numbers', () => {
  it('both integers', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('int and float', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('float and int', () => {
    assert.equal(calculateNumber(1.2, 3), 4);
  });
  it('float that increases with int', () => {
    assert.equal(calculateNumber(1.8, 3), 5);
  });
  it('both float with .5', () => {
    assert.equal(calculateNumber(1.5, 3.5), 6);
  });
  it('testing for large numbers', () => {
    assert.equal(calculateNumber(10000.2, 129203.8), 139204);
  });
});
