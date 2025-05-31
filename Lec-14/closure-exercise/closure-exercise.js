function outerFun() {
  var a = 10;

  function innerFun() {
    a++;
    var b = 20;

    function innerMostFun() {
      a++;
      b++;
      console.log("a =>", a, "b =>", b);
    }
    
    return innerMostFun;
  }

  return innerFun;
}

var temp = outerFun();
var temp1 = temp();
var temp2 = temp();

temp1();
temp1();
temp1();

console.log("==================")
temp2();
temp2();
temp2();

