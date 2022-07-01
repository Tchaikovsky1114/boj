let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');

// let numberArray = input.map(num => Number(num))

// const multiplyResult = numberArray.reduce((acc,cur)=> 
//   acc * cur
// ,1)

const multiplyResult = input[0] * input[1] * input[2]

const convertArray = multiplyResult.toString().split('')

const initialObject = {0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0}

const findSameNumber = convertArray.reduce((acc,cur) =>{
  acc[cur] = (acc[cur] || 0) + 1;
  return acc
},initialObject)
console.log(Object.values(findSameNumber).join('\n'))
