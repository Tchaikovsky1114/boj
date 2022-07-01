let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');

let testingCount = parseInt(input[0],10);


for(let i = 1; i < testingCount + 1; i++){
  const number = input[i].split(' ').map(num => parseInt(num,10))
  console.log(`Case #${i}: ${number[0]} + ${number[1]} = ${number[0] + number[1]}`);
}