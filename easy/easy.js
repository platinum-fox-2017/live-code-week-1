function generateHourglass(num) {
  let arr = []
  for (var i = 0; i < num; i++) {
    arr.push('#')
  }
  return arr
}

let hrglass1 = generateHourglass(1);
console.log(hrglass1);

function printHourglass(obj) {
  let tempChar = ''
  for (var i = 0; i < obj.length; i++) {
    tempChar += obj[i]
  }
  return tempChar
}


console.log(typeof hrglass1); // object
console.log(printHourglass(hrglass1));
