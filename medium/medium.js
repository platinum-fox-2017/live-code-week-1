function lubangTerbesar(arr) {
  let arr2 = []

  //array of array
  for(let i=0; i<arr.length; i++) {
    arr2.push(arr[i].split(''))
  }

  // let total0Horizontal = 0;
  // for(let i=0; i<arr2.length; i++) {
  //   let total = 0
  //   for(let j=0; j<arr2[i].length; j++) {
  //     if((arr2[i][j] == '0' && total == 0) || (arr2[i][j] == '0' && arr2[i][j-1] == '0')) {
  //       total +=1
  //     } else {
  //       total = 0
  //     }
  //     if(total > total0Horizontal) {
  //       total0Horizontal = total
  //     }
  //   }
  // }

  let total0Vertical = 0
  for(let i=0; i<arr2.length; i++) {
    let total = 0
    for(let j=0; j<arr2[i].length; j++) {
      if((arr2[i][j] == '0' && total == 0) || (arr2[i][j] == '0' && arr2[i][j-1] == '0')) {
        total +=1
      } else {
        total = 0
      }
      if(total > total0Horizontal) {
        total0Horizontal = total
      }
    }
  }

  console.log(arr2);
  console.log(total0Vertical);
  // return total0Horizontal;
}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6
