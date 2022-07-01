let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let limitcount = parseInt(input[0],10);

solution(limitcount);

function solution(limitcount) {
    const numberArr = []
for(let i = 1; i <= limitcount; i ++) {
  numberArr.push(i + "\n")
}
  console.log(numberArr.reverse().join(''))
}