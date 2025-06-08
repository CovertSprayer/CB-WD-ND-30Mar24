const p = new Promise((resolve, reject) => {
  const randomNum = Math.floor(Math.random() * 10);

  setTimeout(() => {
    if(randomNum > 5){
      resolve(randomNum);
    } else {
      reject(randomNum);
    }
  }, 3000)
});

p
  .then(num => console.log("Hello from then", num))
  .catch(num => console.log("Hello from catch", num))

// p.then((num) => {
//   console.log("Hello from then", num);
// }).catch((num) => {
//   console.log("Hello from catch", num);
// })

