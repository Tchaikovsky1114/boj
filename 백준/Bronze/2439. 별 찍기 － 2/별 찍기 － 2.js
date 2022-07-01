let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testingCount = parseInt(input[0],10);

solution(testingCount)

function solution(testingCount){
for(let i = 0; i < testingCount; i++){
  console.log(' '.repeat(testingCount - 1 - i) + '*'.repeat(i+1))  
  }
}