let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');

let totalCount = Number(input[0])

const resultArr = [];
for(let i = 0; i < totalCount; i++){
  resultArr.push(Number(input[i+ 1]));
}

const answer = resultArr.sort((a,b) => a - b)

console.log(answer.join('\n'))