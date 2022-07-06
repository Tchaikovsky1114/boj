let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');

let target = input[0].split('')

let alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

let result = []
for(let i = 0; i < alphabetArray.length; i++){
  result.push(target.findIndex(item => item === alphabetArray[i]))
}

console.log(result.join(' '))
