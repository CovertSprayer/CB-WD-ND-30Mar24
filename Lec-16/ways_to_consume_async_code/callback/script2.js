
function getFood(cb) {
  setTimeout(() => {
    console.log("Food has arrived");
    cb();
  }, 3000);
}


function getDrinks(cb) {
  setTimeout(() => {
    console.log("Drinks have arrived");
    cb();
  }, 2000);
}


function getSweets(cb) {
  setTimeout(() => {
    console.log("Sweets have arrived");
    cb();
  }, 1000);
}

// getFood(function() {
//   getDrinks();
// })

// getFood(getDrinks)
// getFood(getDrinks(getSweets));

// function b() {
//   getSweets();
// }

// function a() {
//   getDrinks(b);
// }

// getFood(a)

getFood(function() {
  getSweets(function(){
    getDrinks(function() {
    });
  })
})
