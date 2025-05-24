
// var num1 = 20;
// var num2 = num1;

// num2 = 30;

// console.log(num1);
// console.log(num2);

var obj1 = { num: 20 };

var obj2 = obj1; // stores reference
var obj3 = { ...obj1 }; // creates copy

obj2.num = 30;

console.log(obj1)
console.log(obj2)
console.log(obj3)
