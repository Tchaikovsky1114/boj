let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');

let target = Number(input[0]);
let result = []

for(let i = 1; i < target + 1; i++){
  let stringI = i.toString()
  if(i < 100){
    result.push(i)
  }
  for(let j = 0; j <stringI.length;j++){
    if(i >= 100 && i < 1000 && Number(stringI[j]) - Number(stringI[j + 1]) === Number(stringI[j + 1]) - Number(stringI[j + 2])){
      result.push(i)
    }
  }
}

console.log(result.length)