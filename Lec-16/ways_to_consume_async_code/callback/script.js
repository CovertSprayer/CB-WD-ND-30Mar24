
function getFood() {
  setTimeout(() => {
    console.log("Food has arrived");
  }, 3000);
}


function getDrinks() {
  setTimeout(() => {
    console.log("Drinks have arrived");
  }, 2000);
}


function getSweets() {
  setTimeout(() => {
    console.log("Sweets have arrived");
  }, 1000);
}


getFood()
getDrinks()
getSweets()