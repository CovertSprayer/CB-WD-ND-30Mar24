

function a(cb) {
  console.log("hello from a fun");

  cb();
}


function b(cb) {
  console.log("hello from b fun");

  cb();
}

function c() {
  console.log("hello from c fun");
}


b(function() {
  a(c);
});