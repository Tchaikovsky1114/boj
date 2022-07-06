
let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');

let testCase = Number(input[0]);


let charCount = []
let charArray = []
let result = []
let lastResult = []
for(let i = 1; i < testCase + 1; i++ ){
  charCount.push(input[i][0])
  charArray.push(input[i].slice(1).trim())
  for(let j = 0; j < charArray[i - 1].length; j++){
    
   result.push(charArray[i - 1][j].repeat(charCount[i - 1]))
  }
  lastResult.push(result.join(''))
  result = []
}
  console.log(lastResult.join('\n'))