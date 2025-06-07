
// function Person(name, age){
//   this.name = name;
//   this.age = age;
// }

// const p1 = new Person("Mohit Singh", 35);
// console.log(p1);

class Person{
  static x = 10;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static someFun() {
    console.log("hello from some fun");
  }

  sayHello() {
    console.log(`Hello from ${this.name}`)
  }

  get getAge(){
    return this.age;
  }

  set setAge(age) {
    this.age = age;
  }

}

const p1 = new Person("Mohit Singh", 35);
console.log(p1);
console.log(p1.getAge)

// p1.setAge(50)
p1.setAge = 50;
console.log(p1.getAge)

Person.someFun();
console.log(Person.x)
// p1.someFun();
