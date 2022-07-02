let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');

let subjectCount = Number(input[0])
let subjectArray = input[1].split(' ').map(subject => Number(subject))


const ascendingArray = subjectArray.sort((a,b) => a - b)
const copyArray = [...ascendingArray];
const biggestNum = ascendingArray.pop()
const modifiedArray = copyArray.map(num => ((num/biggestNum) * 100))

const result = modifiedArray.reduce((acc,cur) => {
  acc += cur
  return acc
})

console.log(result/subjectCount)
