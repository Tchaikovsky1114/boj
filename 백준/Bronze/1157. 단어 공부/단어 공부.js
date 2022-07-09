let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');


let target = input[0].trim().toUpperCase().split('')

const test = target.reduce((acc,cur) => {
  if(cur in acc){
  acc[cur]++  
  }else{
    acc[cur] = 1
  }
  return acc 
},{})

let result = []

let maxValue = Math.max(...Object.values(test))

for(item in test){
  if(test[item] === maxValue){
    result.push(item) 
  }
  if(test[item] === maxValue && result.length > 1){
    result = '?'
    break;
  }
}

if(typeof result === 'object'){
  console.log(result.join(''))
}else{
  console.log(result)
}