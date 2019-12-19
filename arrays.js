// Arrays

// ES5
var ages = [12, 15, 18, 19, 26, 20, 22];
var fullAge = ages.map(function(cur) {
  return cur >= 18;
});
console.log(fullAge);
console.log(fullAge.indexOf(true));
console.log(ages[fullAge.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 18));

// Spread Operator

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}
var sum1 = addFourAges(18, 20, 34, 10);
console.log(sum1);

// Es5
var ages2 = [18, 20, 34, 10];

var sum2 = addFourAges.apply(null, ages2);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages2);
console.log(sum3);
