let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');

let count = Number(input[0]);

let arr = []

for(i = 1; i <= count; i ++) {
  arr.push(Number(input[i]));
}

let sortArr = arr.sort((a,b) => {
  return a - b
})

let result = -1;

for(let i = 0; i < count - 2; i++){
  let a = sortArr[i];
  let b = sortArr[i + 1]
  let c = sortArr[i + 2]
  if(a + b > c){
    result = a + b + c
  }
}

console.log(result)