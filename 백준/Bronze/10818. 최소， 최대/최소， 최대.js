let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');

let num = input[0]
let array = input[1].split(' ').map(num => Number(num))

solution()

function solution(){
  let maxValue = array[0];
  let minValue = array[0];
  for(let i = 0; i < num; i++){
    if(maxValue < array[i]){
      maxValue = array[i];
    }
    if(minValue > array[i]){
      minValue = array[i]
    }
  }
  console.log(minValue, maxValue)
  }