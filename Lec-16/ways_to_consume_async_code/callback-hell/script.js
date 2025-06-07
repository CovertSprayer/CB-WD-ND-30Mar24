function download(url, cb) {
  console.log(`File started to download from ${url}`);
  const file = url.split("/").pop();
  setTimeout(() => {
    // return file;
    cb(file);
  }, 3000);
}

function compress(file, cb) {
  console.log(`${file} started to compress`);
  const compressedFile = file.split(".")[0] + ".zip";
  setTimeout(() => {
    cb(compressedFile);
  }, 2000);
}

function upload(file, cb) {
  console.log(`${file} started to upload`);
  const finalLink = `https://www.facebook.cloud.com/uploads/${file}`;
  setTimeout(() => {
    cb(finalLink);
  }, 5000);
}

const url = "https://www.facebook.com/photo/user.jpg";

// const downloadedFile = download(url);
// const compressesFile = compress(downloadedFile);
// const finalUrl = upload(compressesFile);

download(url, function (downloadedFile) {
  console.log("File downloaded successfully!", downloadedFile);

  compress(downloadedFile, function (compressedFile) {
    console.log("File compressed successfully", compressedFile);

    upload(compressedFile, function(finalUrl) {
      console.log("File uploaded successfully to ", finalUrl);
    })
  })

});


// const arr = [1,2,3,4];

// arr.map(function(num, ind, arr){
//   console.log(num)
// })

// Array.prototype.mymap = function(cb){
//   for(let i=0; i<arr.length; i++){
//     cb(i, arr[i], arr, "my_message");
//   }
// }

// arr.mymap((ind, val, arr, msg) => {
//   console.log(ind, val, arr)
// })
