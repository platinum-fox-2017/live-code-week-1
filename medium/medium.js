function lubangTerbesar(arr) {
var countVertical = 0
let boxVertical = []
// console.log(arr);
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if(arr[i][j] === '0' && arr[i+1][j] === '0') {
        countVertical++
      } else {
        boxVertical.push(countVertical)
        // countVertical = 0
      }
    }
  }

var countHorizontal = 0
let boxHorizontal = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if(arr[i][j] === '0') {
        countHorizontal++
        boxHorizontal.push(countHorizontal)
      } else {
        countHorizontal = 0
      }
    }
  }

let indexVertical = boxVertical.sort()
let indexHorizontal = boxHorizontal.sort()

  if(indexVertical[indexVertical.length-1] >= indexHorizontal[indexHorizontal.length-1]) {
    return indexVertical[indexVertical.length-1]
  } else {
    return indexHorizontal[indexHorizontal.length-1]
  }
}




console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6
