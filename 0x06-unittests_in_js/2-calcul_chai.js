function calculateNumber(type, a, b) {
  const ra = Math.round(a);
  const rb = Math.round(b);
  if (type === 'SUM') {
    return ra + rb;
  } else if (type === 'SUBTRACT') {
    return ra - rb;
  } else if (type === 'DIVIDE') {
    if (b === 0) {
      return 'Error';
    } else {
      return ra / rb;
    }
  }
}
console.log(calculateNumber('SUM', 3, 5));
module.exports = calculateNumber;