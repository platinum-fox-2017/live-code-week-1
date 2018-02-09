function lubangTerbesar(array){
  let arr = []
  let arrCount = []
  for (var i = 0; i < array.length; i++) {
    arr.push(array[i].split(''))
  }

  // check horizontal
  for (var i = 0; i < arr.length; i++) {
    let count = 0
    for (var j = 0; j < arr[i].length; j++) {
      if(arr[i][j] === '0' && arr[i][j+1] === '0'){
        count++
      } else {
        arrCount.push(count)
      }
    }
  }


  // check vertical
  for (var i = 0; i < arr.length-1; i++) {
    let count = 0
    for (var j = 0; j < arr[i].length; j++) {
      if(arr[i][j] === '0' && arr[i+1][j] === '0'){
        count++
      } else {
        arrCount.push(count)
      }
    }
  }
  console.log(arr);
  return arrCount.sort()[arrCount.length-1]+1
}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6
