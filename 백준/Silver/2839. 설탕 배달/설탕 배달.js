const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

let target = Number(input)
let answer = 0

while (true) {
  if (target % 5 === 0) {
    answer += target / 5
    break
  }

  target -= 3
  answer += 1

  if (target < 0) {
    answer = -1
    break
  }
}

console.log(answer)
