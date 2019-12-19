// function isFullAge() {
//   //   console.log(arguments);
//   var argas = Array.prototype.slice.call(arguments);
//   argas.forEach(function(element) {
//     console.log(2019 - element >= 18);
//   });
// }
// isFullAge(1990, 1995, 1998, 2006);

// // ES6
// function isFullAge6(...years) {
//   years.forEach(cur => console.log(2019 - cur >= 18));
// }
// isFullAge6(1990, 1995, 1998, 2009, 2012);

function isFullAge(limit) {
  //   console.log(arguments);
  var argas = Array.prototype.slice.call(arguments, 1);
  argas.forEach(function(element) {
    console.log(2019 - element >= 18);
  });
}
isFullAge(15, 1990, 1995, 1998, 2006);

// ES6
function isFullAge6(limit, ...years) {
  years.forEach(cur => console.log(2019 - cur >= limit));
}
isFullAge6(16, 1990, 1995, 1998, 2009, 2012);
