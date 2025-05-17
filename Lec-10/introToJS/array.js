var nums = [1,2,3,4,5];
console.log(nums);
console.log(nums.length);

// console.log(nums[0]);
console.log(nums.at(0));


// nums[0] = 10;
// nums[8] = 20;

// nums.push(20)
// nums.pop();

// nums.shift();
// nums.unshift(200);

// nums.splice(2, 1);
// nums.splice(2, 2);
// nums.splice(2, 1, 30);
// nums.splice(2, 0, 30, 30); // add 30, 30

// console.log(nums.join('_'))


var nums1 = [1,2,3];
var nums2 = [4,5,6];

// var finalNums = nums2.concat(nums1);
// var finalNums = [...nums2, ...nums1]; //spread operator

// var nums3 = ["hello",true, [1,[2,2,2,2],3],4]
// flatten an array
// recursion / dp

console.log(nums);
// var newArr = nums.slice(1,4)
var newArr = nums.slice(1,nums.length)

console.log(newArr);



