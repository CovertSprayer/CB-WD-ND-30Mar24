
function Student(name, age, marks) {
  this.name = name;
  this.age = age;
  this.marks = marks;
}

Student.prototype.getPercentage = function() {
  return (this.marks.chemisty + this.marks.physics + this.marks.maths)/3;
}

const s1 = new Student("Shubham", 20, {chemisty: 90, physics: 80, maths: 49});
console.log(s1)
// console.log(shubham.getPercentage());

const s2 = new Student("Rahul", 30, {chemisty: 90, physics: 100, maths: 55});
console.log(s2)
// console.log(rahul.getPercentage())


let arr = [1,2,3,4,5];
arr.push(500);

// overriding pop method
// Array.prototype.pop = function() {
//   console.log("Not allowed to pop!")
// }

// Array.prototype.pop = function(val) {
//   arr = [...arr, val];
// }

// Array.prototype.push = function() {
//   arr.splice(arr.length-1, 1);
// }

// arr.pop(40);
// arr.push()
// arr.push()
console.log(arr);


const obj1 = {
  a: 1,
  b: 2
}

const obj2 = Object.create(obj1);


// Object.prototype.__proto__  // NULL
// Array.prototype.__proto__ === Object.prototype // true
// Function.prototype.__proto__ === Object.prototype // true
// String.prototype.__proto__ === Object.prototype // true
// etc
