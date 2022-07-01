let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let limit = parseInt(input[0],10);



solution(limit)

function solution(limit){
  let sumOfAll = 0;
  for(let i = 1 ; i<= limit; i++){
    sumOfAll += i;
    
    
  }
  console.log(sumOfAll)
}