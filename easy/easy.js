'use strict'

function generateHourglass(num) {
  let result = []
  let str = ''
  var count = 0
  if(num === 1) {
    result.push('#')
  } else {
    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        if(count <= num) {
          str+= '#'
          count++
        } else {
          str+=''
          count--
        }
      }
      result.push(str)
    }
  }
  return result
}

function printHourglass(arr) {
  if(arr.length === 1) {
    return arr.join('')
  } else {
      return arr.join('\n')
  }
}

let hrglass1 = generateHourglass(2);
console.log(hrglass1);
console.log(typeof hrglass1); // object
console.log(printHourglass(hrglass1));
