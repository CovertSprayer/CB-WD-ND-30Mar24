// class oops

function Box(height, width) {
  this.height = height;
  this.width = width;
  this.getWidth = function() {
    return this.width;
  }
  this.getHeight = function() {
    return this.height;
  }
}

// const box1 = new Box(50, 50);
const box1 = new Box(50, 50);
const box2 = new Box(100, 100);
console.log(box1);
console.log(box2);

console.log(box1.getHeight())