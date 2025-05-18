var nums = [1, 2, 3, 4, 5];
console.log(nums);
console.log(typeof nums);

var person = {
  "firstName": "Rahul",
  lastName: "Sharma",
  age: 34,
  marks: [80, 90, 92]
}
console.log(person);

// -------------- conventional for loop
for(var i=0; i<nums.length; i++){
  console.log(nums[i]);
}

// -------------- for of (array)

for(var num of nums){
  console.log(num * 10);
}

// -------------- for in (object, array)
for(var key in person){
  console.log(key, person[key]);
}

for(var key in nums){
  console.log(nums[key]);
}

// -------------- for each (will see later)