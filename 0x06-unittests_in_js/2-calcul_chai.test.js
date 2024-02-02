const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

function sub(a, b) {
  return Math.round(a) - Math.round(b);
}
function div(a, b) {
  return Math.round(a) / Math.round(b);
}
describe('should return the sum of two rounded numbers', () => {
  it('both integers', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal( 4);
  });
  it('int and float', () => {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal( 5);
  });
  it('float and int', () => {
    expect(calculateNumber('SUM', 1.2, 3)).to.equal( 4);
  });
  it('float that increases with int', () => {
    expect(calculateNumber('SUM', 1.8, 3)).to.equal( 5);
  });
  it('both float with .5', () => {
    expect(calculateNumber('SUM', 1.5, 3.5)).to.equal( 6);
  });
  it('testing for large numbers', () => {
    expect(calculateNumber('SUM', 10000.2, 129203.8)).to.equal( 139204);
  });
  it('testing for negative numbers', () => {
    expect(calculateNumber('SUM', -4.2, -5.8)).to.equal( -10);
  });
  it('testing for 0', () => {
    expect(calculateNumber('SUM', 0, 0)).to.equal( 0);
  });
});

describe('should return the sum of two rounded numbers', () => {
  it('both integers', () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal( sub(1,3));
  });
  it('int and float', () => {
    expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal( sub(1,3.7));
  });
  it('float and int', () => {
    expect(calculateNumber('SUBTRACT', 1.2, 3)).to.equal( sub(1.2,3));
  });
  it('float that increases with int', () => {
    expect(calculateNumber('SUBTRACT', 1.8, 3)).to.equal( sub(1.8, 3));
  });
  it('both float with .5', () => {
    expect(calculateNumber('SUBTRACT', 1.5, 3.5)).to.equal( sub(1.5, 3.5));
  });
  it('testing for large numbers', () => {
    expect(calculateNumber('SUBTRACT', 10000.2, 129203.8)).to.equal( sub(10000.2, 129203.8));
  });
  it('testing for negative numbers', () => {
    expect(calculateNumber('SUBTRACT', -4.2, -5.8)).to.equal( sub(-4.2, -5.8));
  });
  it('testing for 0', () => {
    expect(calculateNumber('SUBTRACT', 0, 0)).to.equal( 0);
  });
});

describe('should return the sum of two rounded numbers', () => {
  it('both integers', () => {
    expect(calculateNumber('DIVIDE', 1, 3)).to.equal( div(1,3));
  });
  it('int and float', () => {
    expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal( div(1,3.7));
  });
  it('float and int', () => {
    expect(calculateNumber('DIVIDE', 1.2, 3)).to.equal( div(1.2,3));
  });
  it('float that increases with int', () => {
    expect(calculateNumber('DIVIDE', 1.8, 3)).to.equal( div(1.8, 3));
  });
  it('both float with .5', () => {
    expect(calculateNumber('DIVIDE', 1.5, 3.5)).to.equal( div(1.5, 3.5));
  });
  it('testing for large numbers', () => {
    expect(calculateNumber('DIVIDE', 10000.2, 129203.8)).to.equal( div(10000.2, 129203.8));
  });
  it('testing for negative numbers', () => {
    expect(calculateNumber('DIVIDE', -4.2, -5.8)).to.equal( div(-4.2, -5.8));
  });
  it('testing for both 0', () => {
    expect(calculateNumber('DIVIDE', 0, 0)).to.equal( 'Error');
  });
  it('testing for denominator 0', () => {
    expect(calculateNumber('DIVIDE', 5, 0)).to.equal( 'Error');
  });
  it('testing for nominator 0', () => {
    expect(calculateNumber('DIVIDE', 0, 5)).to.equal( 0);
  });
});
