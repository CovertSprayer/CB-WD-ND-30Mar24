

// console.log(1);

// setTimeout(()=>{
//   console.log(2);
// }, 5000)


// setTimeout(() => {
//   console.log(3);
//   console.log(4);
// }, 2000)

// console.log(5);

// =================== 

// setTimeout(() => {
//   console.log(0)
// }, 0)

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 2000);

// console.log(3);

// setTimeout(() => {
//   console.log(4);
// }, 5000);

// console.log(5);

// setTimeout(() => {
//   console.log(6)
// }, 3000);

const intervalId = setInterval(() => {
  console.log("hi there!")
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);






