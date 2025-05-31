
const person = {
  fullName: "Abhinav Sharma",
  age: 30,
  sayHello: function() {
    // console.log(`Hello from ${person.fullName}`)
    console.log(`Hello from ${this.fullName}`)
  }
}

console.log(person);
person.sayHello();