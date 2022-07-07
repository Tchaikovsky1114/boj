let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');


const arr = [];
const answer = [];

for(let i = 1; i <=10000; i++){
  let N = 0; 
  let stringNumber = String(i) 
  for(let j = 0; j < stringNumber.length; j++) {
    N = N + Number(stringNumber[j]); 
  }
  let nNum = i + N; 
  arr.push(nNum); 
}

const result = []
for(let i = 1; i < 10001; i++) {
  if(arr.indexOf(i) === -1){
    result.push(i)
  }
}

console.log(result.join('\n'))