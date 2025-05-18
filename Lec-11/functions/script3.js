
function getMethod(type) {
  function add(a, b) {
    return a + b;
  }

  function multiply(a,b){
    return a * b;
  }

  if(type == "add") {
    return add;
  } 
  else if(type == "multiply"){
    return multiply;
  } 
  else{
    return function temp() {};
  }
}

var add = getMethod("add");
console.log(add(2,6));

var multiply = getMethod("multiply");
console.log(multiply(2,5));