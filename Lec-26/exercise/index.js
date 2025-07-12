const fs = require("fs");
const path = require("path");

const filePath1 = path.join(__dirname, "data", "input1.txt");
const filePath2 = path.join(__dirname, "data", "input2.txt");
const outputFilePath = path.join(__dirname, "data", "output.txt");

fs.readFile(filePath1, "utf-8", (err, data1) => {
  const arr1 = data1.split('\r\n');

  fs.readFile(filePath2, "utf-8", (err, data2) => {
    const arr2 = data2.split('\r\n');

    arr = [...arr1, ...arr2];
    arr.sort((a, b) => a-b);

    const finalData = arr.join("\r\n");
    fs.writeFile(outputFilePath, finalData, (err) => {
      if(err){
        console.log(err);
        return;
      }

      console.log("THE END!!")
    })

  })
  
})








