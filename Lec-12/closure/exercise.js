
function outerFun() {
  var a = 10;

  function innerFun() {
    a++;
    var b = 20;

    function innerMostFun() {
      a++;
      b++;
      console.log(a);
      console.log(b);
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
temp2();
temp2();
temp2();

