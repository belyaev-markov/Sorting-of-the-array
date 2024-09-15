var numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b;
});

function sanitise(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}
console.log(sanitise('1'));
// Expected output: "1"
console.log(sanitise('NotANumber'));
// Expected output: NaN
