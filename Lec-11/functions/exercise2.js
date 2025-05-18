var data = [
  { length: 4, breadth: 6 },
  { length: 4, breadth: 4 },
  { length: 2, breadth: 5 },
  { length: 6, breadth: 3 },
  { length: 6, breadth: 6 },
];

function getArea(l, b) {
  return l * b;
}

function getPerimeter(l, b) {
  return 2 * (l + b);
}



function getOutput(data, logic){
  var output = [];
  for(var rectangle of data){
    output.push(logic(rectangle.length, rectangle.breadth));
  }
  return output;
}

var areas = getOutput(data, getArea);
var perimeters = getOutput(data, getPerimeter);


console.log("areas:", areas);
// console.log("perimeters: ", perimeters);