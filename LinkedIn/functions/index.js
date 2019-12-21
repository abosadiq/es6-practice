// Function constructor

// let john = {
//   name: "john",
//   yearOfBrith: 1992,
//   job: "software"
// };

let Person = function(name, yearOfBrith, job) {
  this.name = name;
  this.yearOfBrith = yearOfBrith;
  this.job = job;
};

Person.prototype.calculateAge = function() {
  console.log(2019 - this.yearOfBrith);
};

// instance of the person Object.
//when we use the 'new' operator, it create a brand new empty object

let wafi = new Person("wafi", 1990, "frontend developer");
console.log(wafi.calculateAge());

let john = new Person("john", 1985, "teacher");
let mark = new Person("mark", 1989, "designer");
