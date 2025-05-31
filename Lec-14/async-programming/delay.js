

console.log(1);

delay(5);

console.log(2);
console.log(3);
console.log(4);
console.log(5);

function delay(time){
  // const time1 = new Date().getTime();
  // const time2 = time1 + time*1000;

  const endTime = new Date().getTime() + time*1000;

  while( new Date().getTime() < endTime){}
  
}


