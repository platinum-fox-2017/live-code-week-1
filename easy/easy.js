function generateHourglass(number) {
  let arrayStr = [];
  // loop from 0 to number
  for (let i = 0; i < number; i++) {
    let hash = ''
    for (let k = number-i; k > 0 ; k--) {
      hash += '#'
    }
    for (let j = number-i; j > 1 ; j--) {
      // console.log(j);
      hash += '#'
    }
    arrayStr.push(hash)
  }

  for (let i = 0; i < number-1; i++) {
    let hash = ''
    for (let k = 0; k < 2+i ; k++) {
      hash += '#'
    }
    for (let j = 0; j < 1+i ; j++) {
      hash += '#'
    }
    arrayStr.push(hash)
  }
  return arrayStr
}

function printHourglass(arrayStr) {
  let number = (arrayStr.length+1)/2
  for (let i = 0; i < number; i++) {
    for (let j = 1+i; j < number; j++) { // arrayStr
      arrayStr[j] = ' ' + arrayStr[j]
    }
  }
  for (let i = 0; i < number; i++) {
    for (let j = 1+i; j < number; j++) { // arrayStr
      arrayStr[j] = arrayStr[j] + ' '
    }
  }

  for (let i = number; i > 0; i--) {
    for (let j = number; j < number+(number-1)-i; j++) {
      arrayStr[j] = ' ' + arrayStr[j]
    }
  }
  for (let i = number; i > 0; i--) {
    for (let j = number; j < number+(number-1)-i; j++) {
      arrayStr[j] = arrayStr[j] + ' '
    }
  }

  return arrayStr
}

// num > 0
let hrglass = generateHourglass(10);
console.log(typeof hrglass);
// console.log(hrglass);
console.log(printHourglass(hrglass));
