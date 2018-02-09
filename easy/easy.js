'use strict'

function generateHourglass(num) {
  let result = []
  let str = ''
  for (let i = 0; i <= num; i++) {
    let count = num
    for (let j = 0; j <= num; j++) {
      str += '#'
    }
    result.push(str)
  }
  return result
}

console.log(generateHourglass(2));
