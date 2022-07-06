let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');


let addCount = input[0]
let numberArray = input[1].split('')


let result = 0;
for(let i = 0; i < addCount; i ++){
  
    result += Number(numberArray[i])
}


console.log(result);
