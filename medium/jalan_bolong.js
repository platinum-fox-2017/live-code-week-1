function lubangTerbesar(array){
  let arr = []
  let arrCount = []
  for (var i = 0; i < array.length; i++) {
    arr.push(array[i].split(''))
  }

  // check Vertical
  for (var i = 0; i < array.length; i++) {
    let count = []
    for (var j = 0; j < array.length; j++) {
      if
    }
  }

}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6
