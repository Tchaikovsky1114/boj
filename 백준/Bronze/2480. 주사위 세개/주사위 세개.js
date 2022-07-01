let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = parseInt(input[0].split(' ')[0],10);
let b = parseInt(input[0].split(' ')[1],10);
let c = parseInt(input[0].split(' ')[2],10);

solution(a,b,c)

function solution(a,b,c){
  if(a === b && b === c){
    console.log(10000 + (a * 1000))
  } else if(
       (a === b && b !== c)
    || (b === c && c !== a)
    || (c === a && a !== b)
  ){
    const key = a === b ? a : c
    console.log(1000 + (key * 100))
  }else{
    console.log(Math.max(a,b,c) * 100)
  }
}