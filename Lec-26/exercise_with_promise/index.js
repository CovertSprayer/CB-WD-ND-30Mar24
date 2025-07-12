const fs = require("fs/promises");
const path = require("path");


function readFile(fileName) {
  const filePath = path.join(__dirname, "data", fileName);

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if(err) reject(err);
      resolve(data);
    })
  })
}

function writeFile(fileName, data) {
  const filePath = path.join(__dirname, "data", fileName);

  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (err) => {
      if(err) reject(err);
      resolve();
    })
  })
}

async function main() {
  try {
    const data1 = await readFile("input1.txt");
    const data2 = await readFile("input2.txt");

    const arr1 = data1.split("\r\n");
    const arr2 = data2.split("\r\n");

    const arr = [...arr1, ...arr2];
    arr.sort((a,b) => a-b);

    const finalData = arr.join("\r\n");
    await writeFile("output.txt", finalData)
    console.log("success");
    
  } catch (err) {
    console.log(err)
  }
}

main();
