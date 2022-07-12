let fs = require('fs');

let input = fs.readFileSync('dev/stdin').toString().split('\n');

let firstLine = input[0].split(' ')
let secondLine = input[1].split(' ')

let count = Number(firstLine[0])

let arr = secondLine.map(item => +item)


const map = new Map()

for(let i = 0; i < count; i++){
  if (map.has(arr[i])) {
    map.set(arr[i], map.get(arr[i]) + 1)
  }else{
    map.set(arr[i],1)
  }
}


const test = [...map]


const test2 = test.sort((a,b) => {
  if(a[1] === b[1]){
    return 0
  }
  if(b[1] < a[1]){
    return -1
  }
})


let resultArr = [];
for(let i =0; i < test2.length; i++){
  for(let j = 0; j < test2[i][1]; j++){
  resultArr.push(test2[i][0])  
  }
  
}
console.log(resultArr.join(' '))