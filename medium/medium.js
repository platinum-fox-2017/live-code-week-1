function lubangTerbesar(arr) {
  let firstArr = []
  for (var i = 0; i < arr.length; i++) {
    firstArr.push(arr[i])
  }
  for (var i = 0; i < firstArr.length; i++) {
    var tempNumb = ''
    var tempNumb1 = ''
    var tempNumb2 = ''
    var tempNumb3 = ''
    var tempNumb4 = ''
    for (var j = 0; j < firstArr[i].length; j++) {
      // if (firstArr[i][0] === '0') {
      //   tempNumb1 += firstArr[i][0]
      //   console.log(tempNumb1);
      // }
      // else if (firstArr[i][1] === '0') {
      //
      // }
      if (firstArr[i][j] ===  '0') {
        tempNumb += firstArr[i][j]
      }
    }
  }
  return tempNumb.length
}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6
