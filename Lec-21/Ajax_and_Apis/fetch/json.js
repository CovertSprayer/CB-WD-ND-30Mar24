// JSON => javascript object notation

const obj = {
  a: 10,
  b: 20,
  c: "Hi there!",
  d: () => {
    console.log("hello from d")
  }
}

const json = JSON.stringify(obj);
console.log(obj)
console.log(json)

const finalObj = JSON.parse(json);
console.log(finalObj)