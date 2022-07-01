let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = parseInt(input[0].split(' ')[0],10);
let b = parseInt(input[0].split(' ')[1],10);
let c = parseInt(input[1].split(' ')[0],10);

solution(a,b,c)

function solution(a,b,c){
  let convertHour = a + Math.floor((b + c)/60) 
  let convertMinute = (b + c) % 60
  
  if(convertHour >= 24){
    convertHour -= 24;
    console.log(convertHour, convertMinute)    
  }else{
    console.log(convertHour, convertMinute)
  }
}
