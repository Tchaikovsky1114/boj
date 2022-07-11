let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');


let arrayElementCount = Number(input[0])

let arr = []

for(let i = 1; i <= arrayElementCount; i++) {
  arr.push(Number(input[i]))
}

const sortArr = arr.sort((a,b) => a - b)

let result = 0

for(let i = 0; i < arrayElementCount; i++){
  let count = 0
  for(let j = 0; j < 5; j++){
    if(sortArr.slice(i,i+5).includes(sortArr[i]+j)){
      count++
    }
  }
  result = Math.max(result,count)
}

console.log(5 - result)
