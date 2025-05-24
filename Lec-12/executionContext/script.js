// var a = 10;

// function temp() {
//   var b = 20;
//   console.log(b);
// }

// console.log(a)

// temp();


// -----------------------------

// temp();
// console.log(a);

// var a = 20;

// function temp(){
//   console.log("Hello from temp func")
// }

//  ----------------------------

var a = 10;
console.log(a);
console.log(b);

function outerTemp() {
  innerTemp();

  var c = 30;
  function innerTemp(){
    console.log(c);
  }
}

var b = 20;
outerTemp();





