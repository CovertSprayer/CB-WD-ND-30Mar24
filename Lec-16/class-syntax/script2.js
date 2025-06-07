class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }

  area() {
    return this.length * this.breadth;
  }
}

const r1 = new Rectangle(10, 20);
console.log(r1);

class Cuboid extends Rectangle {
  constructor(length, breadth, height) {
    super(length, breadth);
    this.height = height;
  }

  volume() {
    return this.length * this.breadth * this.height;
  }
}

const c1 = new Cuboid(30, 30, 30);
console.log(c1);
