let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testingCount = parseInt(input[0],10);


for(let i = 1; i <= testingCount; i++){
  console.log('*'.repeat(i))  
  
}