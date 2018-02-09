function generateHourglass(number) {
  let arrayStr = [];
  // loop from 0 to number
  for (let i = 0; i < number; i++) {
    let hash =''
    for (let j = number-i; j > 0; j--) {
      hash += '#'
    }
    console.log(hash);
    arrayStr.push(hash);
  }
  for (let i = number; i > 0; i--) {
    let hash ='#'
    for (let j = 0; j < number -i ; j++) {
      hash += '#'
    }
    console.log(hash);
    if (hash !=='#') {
      arrayStr.push(hash);
    }
  }
  return arrayStr
}

function printHourglass(arrayStr) {
  let logHash= [];
  for (var i = 0; i < arrayStr; i++) {
    arrayStr[i]
  }


  // as hourglass
  return
}

// num > 0
let hrglass = generateHourglass(5);
console.log(typeof hrglass);
// console.log(hrglass);
// console.log(printHourglass(hrglass));
