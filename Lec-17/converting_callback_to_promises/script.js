function download(url) {
  return new Promise((resolve, reject)=>{
    console.log(`File started to download from ${url}`);
    const file = url.split("/").pop();
    setTimeout(() => {
      resolve(file);
    }, 3000);
  })
}

function compress(file) {
  return new Promise((resolve, reject) => {
    console.log(`${file} started to compress`);
    const compressedFile = file.split(".")[0] + ".zip";
    setTimeout(() => {
      resolve(compressedFile);
    }, 2000);
  })
}

function upload(file) {
  return new Promise((resolve, reject) => {
      console.log(`${file} started to upload`);
      const finalLink = `https://www.facebook.cloud.com/uploads/${file}`;
      setTimeout(() => {
        resolve(finalLink);
      }, 5000);
  })
}

const url = "https://www.facebook.com/photo/user.jpg";


// download(url, function (downloadedFile) {
//   console.log("File downloaded successfully!", downloadedFile);

//   compress(downloadedFile, function (compressedFile) {
//     console.log("File compressed successfully", compressedFile);

//     upload(compressedFile, function(finalUrl) {
//       console.log("File uploaded successfully to ", finalUrl);
//     })
//   })
// });

// download(url)
//   .then((downloadedFile)=>{
//     console.log("File downloaded successfully", downloadedFile);
//     compress(downloadedFile)
//       .then((compressedFile) => {
//         console.log("File compressed successfully", compressedFile);
//         upload(compressedFile)
//           .then((finalUrl) => {
//             console.log("File uploaded successfully to ", finalUrl)
//           })
//       })
//   })


download(url)
  .then((downloadedFile) => {
    console.log("File downloaded successfully", downloadedFile);
    return compress(downloadedFile);
  })
  .then((compressedFile) => {
    console.log("File compressed successfully", compressedFile);
    return upload(compressedFile);
  })
  .then((finalUrl) => {
     console.log("File uploaded successfully to", finalUrl)
  })
  .catch(err => {
    console.log(err);
  })

  


  // p.then();



