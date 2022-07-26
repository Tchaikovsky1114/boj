let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');

let target = input[0].split('')
let answer = target.sort((a,b) => b - a) 
console.log(answer.join(''))