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
  let logHash= [];
  for (var i = 0; i < arrayStr.length; i++) {
    // console.log(i);
    let hashes = []

    for (let j = 0; j < i; j++) {
      hashes.push(' ')
    }

    hashes.push(arrayStr[i])

    hashes.push(' ')

    hashes.join('')
    logHash.push(hashes)
  }


  // as hourglass
  return logHash
}

// num > 0
let hrglass = generateHourglass(4);
console.log(typeof hrglass);
console.log(hrglass);

// console.log(printHourglass(hrglass));
