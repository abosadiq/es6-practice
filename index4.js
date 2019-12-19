// Default parameters
function Person(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? (lastName = "Smith") : lastName;
  nationality === undefined ? (nationality = "Mexican") : nationality;
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName = lastName;
  this.nationality = nationality;
}
var jonh = new Person("john", 1990);
console.log(jonh);
