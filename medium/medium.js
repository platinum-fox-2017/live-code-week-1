function lubangTerbesar(array){
  let combine = []
  for (let i = 0; i < array.length; i++) {
    let splitStr = array[i].split('')
    combine.push(splitStr)
  }
  console.log(combine);
  // count

  let holeMax=0;
  // horizontal
  for (let i = 0; i < combine.length; i++) {
    let holeCount = 0;

    for (let j = 0; j < combine[i].length; j++) {
      if (combine[i][j] === '0') {
        holeCount +=1
        if (holeCount > holeMax) {
          holeMax = holeCount
        }
        // console.log(holeCount);
      } else {
        if (holeCount > holeMax) {
          holeMax = holeCount
        }
        holeCount = 0
      }

    }
  }
  console.log('holemax', holeMax);
  // vertical
  for (let i = 0; i < combine.length; i++) {
    let holeCount = 0;

    for (let j = 0; j < combine.length; j++) {
      if (combine[j][i] === '0') {
        holeCount +=1
        if (holeCount > holeMax) {
          holeMax = holeCount
        }
        // console.log(holeCount);
      } else {
        if (holeCount > holeMax) {
          holeMax = holeCount

        }
        holeCount = 0
      }

    }
  }

  return holeMax
}









// driver
console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6
