const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = []
rl.on("line", function(line) {
  input.push(line)
}).on("close", function() {
  solution(input)
  process.exit();
});


function solution(input){
  let count = Number(input[0]);
  let arr = [];
for(let i = 1; i<= count; i++){
  arr.push(input[i])
}
let increasing = true
let decreasing = true

for(let i = 0; i < count - 1; i++){
  if(arr[i] < arr[i + 1]){
    decreasing = false
  }else if(arr[i] > arr[i + 1]) {
    increasing = false
  }
}
  if(increasing) console.log("INCREASING");
else if(decreasing) console.log("DECREASING");
else console.log("NEITHER");
}