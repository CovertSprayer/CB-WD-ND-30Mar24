
function outerFun() {
  var a = 10;

  function innerFun() {
    a++;
    console.log(a);
  }

  return innerFun;
}

var temp1 = outerFun();
var temp2 = outerFun();

temp1();
temp1();
temp1();
temp2();
temp2();
temp2();

// var temp = outerFun();

// temp();
// temp();
// temp();
// temp();