function lubangTerbesar(arr) {
  let firstArr = []
  // console.log(arr[0][2]);
  for (var i = 0; i < arr.length; i++) {
    firstArr.push(arr[i])
  }
  for (var i = 0; i < arr.length; i++) {
    var tempNumb = []
    for (var j = 0; j < firstArr[0].length; j++) {
      if (firstArr[i][j] ===  '0') {
      }
      tempNumb.push(firstArr[i][j])
      // console.log(tempNumb);
    }
  }
  // console.log(tempNumb);
  return tempNumb.length-1
}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6
