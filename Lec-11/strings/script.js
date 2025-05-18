var str = "This is some string"; // immutable
console.log(str);
console.log(str[2]);
console.log("length of str: ", str.length);


var naam = "     Rahul Sharma    Rahul";
console.log(naam.trim());
console.log(naam.trimStart());
console.log(naam.trimEnd());


var newName = naam.replace("Rahul", "Shubham");
console.log(newName);

var latestName = naam.replaceAll("Rahul", "Shubham")
console.log(latestName);

var firstName = "Varun";
var lastName = "Kohli";

// var fullName = firstName.concat(" ", lastName);
var fullName = firstName + " " + lastName;
console.log(fullName);

var color1 = "RED";
var color2 = "Orange";

console.log(color1.toLowerCase());
console.log(color2.toUpperCase());


