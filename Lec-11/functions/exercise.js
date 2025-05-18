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

var areas = [];
var perimeters = [];

//logic
for(var rectangle of data){
  var area = getArea(rectangle.length, rectangle.breadth);
  var perimeter = getPerimeter(rectangle.length, rectangle.breadth);
  areas.push(area);
  perimeters.push(perimeter);
}

console.log("areas", areas);
console.log("perimeters", perimeters);
