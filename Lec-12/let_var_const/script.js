
// declaration
var a; 

// initialization
a = 10;

// declaration and initialization both
var b = 20;

//  re-declaration
var a;

// re-initialization
a = 30;

console.log(a)

// ------------- let

let c = 20;

// let c = 40;
console.log(c)

// ------------ const

const d = 40;

// const d = 50;
// console.log(d);

//  ------------ scope

function temp(){

  
  {
    var a1 = 20;
    // let b1 = 40;
    // const c1 = 40;

  }

  console.log("a1: ", a1);
  // console.log("b1: ", b1);
  // console.log("c1: ", c1);


}

temp();


console.log(z);
let z = 10;



