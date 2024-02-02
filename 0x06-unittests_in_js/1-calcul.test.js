const assert = require('assert');
const calculateNumber = require('./1-calcul');

function sub(a, b) {
  return Math.round(a) - Math.round(b);
}
function div(a, b) {
  return Math.round(a) / Math.round(b);
}
describe('should return the sum of two rounded numbers', () => {
  it('both integers', () => {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
  });
  it('int and float', () => {
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
  });
  it('float and int', () => {
    assert.equal(calculateNumber('SUM', 1.2, 3), 4);
  });
  it('float that increases with int', () => {
    assert.equal(calculateNumber('SUM', 1.8, 3), 5);
  });
  it('both float with .5', () => {
    assert.equal(calculateNumber('SUM', 1.5, 3.5), 6);
  });
  it('testing for large numbers', () => {
    assert.equal(calculateNumber('SUM', 10000.2, 129203.8), 139204);
  });
  it('testing for negative numbers', () => {
    assert.equal(calculateNumber('SUM', -4.2, -5.8), -10);
  });
  it('testing for 0', () => {
    assert.equal(calculateNumber('SUM', 0, 0), 0);
  });
});

describe('should return the sum of two rounded numbers', () => {
  it('both integers', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, 3), sub(1,3));
  });
  it('int and float', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, 3.7), sub(1,3.7));
  });
  it('float and int', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.2, 3), sub(1.2,3));
  });
  it('float that increases with int', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.8, 3), sub(1.8, 3));
  });
  it('both float with .5', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.5, 3.5), sub(1.5, 3.5));
  });
  it('testing for large numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 10000.2, 129203.8), sub(10000.2, 129203.8));
  });
  it('testing for negative numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', -4.2, -5.8), sub(-4.2, -5.8));
  });
  it('testing for 0', () => {
    assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
  });
});

describe('should return the sum of two rounded numbers', () => {
  it('both integers', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 3), div(1,3));
  });
  it('int and float', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 3.7), div(1,3.7));
  });
  it('float and int', () => {
    assert.equal(calculateNumber('DIVIDE', 1.2, 3), div(1.2,3));
  });
  it('float that increases with int', () => {
    assert.equal(calculateNumber('DIVIDE', 1.8, 3), div(1.8, 3));
  });
  it('both float with .5', () => {
    assert.equal(calculateNumber('DIVIDE', 1.5, 3.5), div(1.5, 3.5));
  });
  it('testing for large numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 10000.2, 129203.8), div(10000.2, 129203.8));
  });
  it('testing for negative numbers', () => {
    assert.equal(calculateNumber('DIVIDE', -4.2, -5.8), div(-4.2, -5.8));
  });
  it('testing for both 0', () => {
    assert.equal(calculateNumber('DIVIDE', 0, 0), 'Error');
  });
  it('testing for denominator 0', () => {
    assert.equal(calculateNumber('DIVIDE', 5, 0), 'Error');
  });
  it('testing for nominator 0', () => {
    assert.equal(calculateNumber('DIVIDE', 0, 5), 0);
  });
});