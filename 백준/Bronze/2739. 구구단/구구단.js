let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = parseInt(input[0].split(' ')[0],10);


solution(a)

function solution(a){
  for(i = 1; i < 10; i++){
    console.log(`${a} * ${i} = ${a * i}`)
  }
}

