function generateHourglass(number) {
  let arrayStr = [];
  // loop from 0 to number
  for (let i = 0; i < (2*number)-1; i++) {
    let hash =''
    for (let j = (2*number)-1-i; j > 0; j--) {
      hash += '#'
    }
    // console.log(hash);
    arrayStr.push(hash);
  }
  for (let i = (2*number)-1; i > 0; i--) {
    let hash ='#'
    for (let j = 0; j < (2*number)-1-i ; j++) {
      hash += '#'
    }
    // console.log(hash);
    if (hash !=='#') {
      arrayStr.push(hash);
    }
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
let hrglass = generateHourglass(5);
console.log(typeof hrglass);
console.log(hrglass);

// console.log(printHourglass(hrglass));
