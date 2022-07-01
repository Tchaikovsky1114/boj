let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = input[0]

solution(num)

function solution(num){
  let cycleCount = 0;
  let refNum = Number(num) < 10 ? Number(num + '0') : Number(num);
  let firstNumber = Number(num[0]);
  let secondNumber = Number(num) < 10 ? Number((num + '0')[1]) : Number(num);
  let newFirstNumber = 0;
  
  do {
    newFirstNumber = firstNumber  
    firstNumber = secondNumber

    secondNumber = newFirstNumber + secondNumber >= 10
    ? (newFirstNumber + secondNumber) % 10
    : newFirstNumber + secondNumber
    
    cycleCount ++
    
  }
  while(Number(firstNumber.toString()+secondNumber.toString()) !== refNum)
  console.log(cycleCount)
  }
