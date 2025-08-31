const students = [
  { name: "Rahul", age: 30, marks: [40, 80, 90] },
  { name: "Mohit", age: 34, marks: [90, 70, 98] },
];


const newStudents = [...students];

newStudents[0].age = 20;

// console.log("old", students);
// console.log("new", newStudents);



const arr1 = [1,2,3,true, {a:1}];
const arr2 = [...arr1];

arr1[0] = 10;
arr1[4].a = 20;

console.log("arr1>>", arr1)
console.log("arr2>>", arr2)
