let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');

let quizCount = Number(input[0])

let quizArray = []

for(let i = 1; i<input.length; i++){
  quizArray.push(input[i].split(''))
}


let quizResults = []
let score = 0
let totalScore = 0

for(let i = 0; i < quizCount; i ++){
   totalScore = 0;
   score = 0;
quizArray[i].reduce((acc,cur,idx) => {
  if(cur === 'O'){
    score++
    totalScore += score
  }else{
    score = 0;
  }
},0)
  quizResults.push(totalScore);
 
}
console.log(quizResults.join('\n'));
