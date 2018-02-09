function generateHourglass(num) {
  let newNum = num * 2
  let arr = []
  for (var i = 1; i < newNum; i+=3) {
    let hashTag= ''
    for (var j = newNum; j > 0 ; j-= 2) {
      hashTag += '#'
      arr.push(hashTag)

    }
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
//
//
console.log(typeof hrglass1); // object
console.log(printHourglass(hrglass1));
