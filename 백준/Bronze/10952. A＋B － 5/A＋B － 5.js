let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');


solution()

function solution(){
  let refNum = 0;
  while(refNum <= input.length - 1){
  let firstNumber = parseInt(input[refNum].split(' ')[0],10);
  let secondNumber = parseInt(input[refNum].split(' ')[1],10);
    
    if(firstNumber !== 0 && secondNumber !== 0 ){
    console.log(firstNumber + secondNumber)
    refNum++;
    }else{
        return
    }
  }
}