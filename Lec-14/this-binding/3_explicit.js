// call, apply, bind

const box1 = {
  width: 20,
  height: 40
}

const box2 = {
  width: 50,
  height: 50
}

// function updateHeight(box, _height) {
//   box.height = _height
// }

// updateHeight(box1, 250);
// updateHeight(box2, 0);

// console.log(box1)
// console.log(box2)

function updateHeight_new(height, width){
  // console.log(this);
  this.height = height;
  this.width = width;
} 

// updateHeight_new.apply(box1, [50]);
updateHeight_new.call(box1, 5000, 1000);
updateHeight_new.call(box2, 3, 1);
updateHeight_new.apply(box1, [0,0]);

const fn = updateHeight_new.bind(box2);

console.log(box1)
console.log(box2)