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


async function main() {
  const downloadedFile = await download(url);
  console.log("File downloaded successfully", downloadedFile);

  const compressedFile = await compress(downloadedFile);
  console.log("File compressed successfully", compressedFile);

  const finalUrl = await upload(compressedFile);
  console.log("File uploaded successfully to", finalUrl);
}

main();