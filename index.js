// ES5
function Person(name) {
  this.name = name;
}
Person.prototype.myFriends5 = function(fr) {
  var arr = fr.map(
    function(el) {
      return this.name + "is friend with " + el;
    }.bind(this)
  );
  console.log(arr);
};
var fr = ["wafi", "aisha", "sadiq"];
new Person("john").myFriends5(fr);

// ES65
Person.prototype.myFriends6 = function(frs) {
  let arr = frs.map(el => `${this.name} is frind with ${el}`);

  console.log(arr);
};
let frs = ["mohamed", "mokhatr", "amran"];
new Person("wafi").myFriends6(frs);
