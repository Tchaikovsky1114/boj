let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');


let convertTarget = input[0]

console.log(convertTarget.charCodeAt(0))
