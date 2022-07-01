let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testingCount = parseInt(input[0],10);



for(i = 1; i <= testingCount; i++){
 const number = input[i].split(' ').map(num => parseInt(num,10))
 console.log(number[0] + number[1])
}
