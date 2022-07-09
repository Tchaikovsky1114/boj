let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');

let totalCount = input[0]

let result = []
for(let i = 0; i < totalCount; i++) {
  result.push(Number(input[i+1]))
  
}

for (let i = 0; i < result.length; i ++) {
  let minIndex = i
  for(let j = i + 1; j < result.length; j++){
    if(result[minIndex] > result[j]){
      minIndex = j;
    }
  }
  let temp = result[i];
  result[i] = result[minIndex];
  result[minIndex] = temp;
}


console.log(result.join('\n'))
