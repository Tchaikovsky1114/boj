let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');

let target = Number(input[0]);

let arr = [];

for(let i = 0; i< target; i++){
  arr.push(Number(input[i + 1]))
}
arr.sort((a,b) => a- b)


let firstResult = 0;
for(let i = 0; i<arr.length;i++){
  firstResult += arr[i]
}
firstResult = Math.round(firstResult / arr.length)


let secondResult = arr[Math.round(arr.length/2) - 1]

let newObj = arr.reduce((acc,cur) => {
  acc[cur] = (acc[cur] || 0) + 1
  return acc
},{})


let maxValue = Math.max(...Object.values(newObj))


let test = []
for(let key in newObj){
  if(newObj[key] === maxValue){
    test.push(key)
  }
}
let thirdResult = 0

if(test.length > 1){
  test = test.sort((a,b) => a - b);
  thirdResult = test[1]
}else{
  thirdResult = test[0]
}


let fourthResult = arr[arr.length - 1] - arr[0];



let answer = [firstResult,secondResult,thirdResult,fourthResult]

  console.log(answer.join('\n'))
