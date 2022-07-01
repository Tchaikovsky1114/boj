let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testingCount = parseInt(input[0],10);

solution(testingCount);

function solution(testingCount) {
    const submitSumOfAll = []
for(let i = 1; i < testingCount + 1; i ++) {
  const firstNumber = parseInt(input[i].split(' ')[0])
  const secondNumber = parseInt(input[i].split(' ')[1]);
  submitSumOfAll.push(firstNumber+secondNumber + '\n');
    }
    console.log(submitSumOfAll.join(''))
}