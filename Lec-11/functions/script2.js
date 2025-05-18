// functions are treated as datatypes here like string, number, boolean etc

// high order function (HOF)
function temp(x, y) {
  console.log("hello from temp fun");
  console.log(x, y);
  x();
  y();
}

// a, b => callback function
function a() {
  console.log("hello from a")
}

function b() {
  console.log("hello from b")
}

temp(a, b)

