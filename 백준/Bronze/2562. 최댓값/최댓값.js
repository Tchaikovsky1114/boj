let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');

let numArray = input.map(num => Number(num));
let maxValue = numArray[0];
let maxIndex = 0

for(let i = 0; i < numArray.length; i++){
  if(maxValue < numArray[i]){
    maxValue = numArray[i]
    maxIndex = i
  }
  
}
console.log(maxValue,maxIndex + 1)

  