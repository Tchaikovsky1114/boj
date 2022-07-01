let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');

let arrayElementsCount = parseInt(input[0].split(' ')[0],10);
let referenceNumber = parseInt(input[0].split(' ')[1],10);
let array = input[1].split(' ');

solution(referenceNumber,array)

function solution(referenceNumber,array){
  console.log(array.filter(item => referenceNumber > parseInt(item)).join(' '))
}