console.log("Objects");

var person = {
  "firstName": "Rahul",
  lastName: "Sharma",
  age: 34,
  marks: [80, 90, 92]
}

// objectName = {
//   string: any data type
// }

console.log(person);

// get a value
console.log(person.firstName);
console.log(person.marks);
console.log(person["age"]);

// update a value
person.age = 50;

// create a key:value
// person.isMarried = false;
person["isMarried"] = false;

// delete a key:value
delete person.age;
delete person.marks;


console.log(person)

