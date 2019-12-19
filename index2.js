// Lecture Destructuring
// ES5

//   s

// ES6
const [name, age] = ["wafi", "29"];
console.log(age, name);

const obj = {
  firstname: "wafi",
  lastname: "Mohamed"
};
const { firstname, lastname } = obj;
console.log(firstname, lastname);
// or
const { firstname: a, lastname: b } = obj;

console.log(a, b);

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}
const [age2, retiremnet] = calcAgeRetirement(1990);
console.log(age2);
console.log(retiremnet);
