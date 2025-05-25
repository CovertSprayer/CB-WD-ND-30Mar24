// array methods (HOF)

// forEach, map, filter, reduce, find, findIndex

const nums = [10, 20, 30, 40, 50];

// for(let i=0; i<nums.length; i++){
//   console.log(nums[i])
// }

// for(let val of nums){
//   console.log(val);
// }

nums.forEach((num, ind) => {
  if (ind % 2 == 0) {
    console.log(num);
  }
  // console.log(ind);
});

// -------------- map

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 99.99,
  },
  {
    id: 2,
    name: "Organic Green Tea",
    category: "Food & Beverage",
    price: 12.49,
  },
  {
    id: 3,
    name: "Stainless Steel Water Bottle",
    category: "Home & Kitchen",
    price: 24.99,
  },
  { id: 4, name: "Leather Wallet", category: "Accessories", price: 39.99 },
  {
    id: 5,
    name: "Fitness Tracker Watch",
    category: "Wearables",
    price: 129.99,
  },
  {
    id: 6,
    name: "Electric Toothbrush",
    category: "Personal Care",
    price: 45.5,
  },
  { id: 7, name: "Yoga Mat", category: "Sports & Outdoors", price: 22.99 },
  { id: 8, name: "Smartphone Stand", category: "Electronics", price: 15.99 },
  { id: 9, name: "Novel: The Silent Patient", category: "Books", price: 14.99 },
  {
    id: 10,
    name: "Ceramic Coffee Mug",
    category: "Home & Kitchen",
    price: 9.99,
  },
];

// const filteredArr = [];

// console.log("products len", products.length)

// for(let product of products){
//   if(product.price < 30){
//     filteredArr.push(product);
//   }
// }

// console.log(filteredArr)

const filteredProducts = products.filter((product) => {
  if(product.price < 30) return true;
  else false;
})

console.log(filteredProducts)
