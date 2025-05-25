
function createCounter(){
  let count = 0;

  // function increament () {
  //   count++;
  // }

  // function decrement () {
  //   count--;
  // }

  // function getCount() {
  //   return count;
  // }

  return {
    increament: () => count++,
    decrement: () => count--,
    getCount: () => count
  }

}

const counter = createCounter();

counter.increament();
counter.increament();
counter.increament();
counter.increament();

console.log(counter.getCount());

counter.decrement();
counter.decrement();

console.log(counter.getCount());
