function lubangTerbesar(arr){
  for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
  }
  let total = []
  let temp = []
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
      temp.push([])
      if(arr[i][j] == 0){
        if(arr[i][j+1] !== 1 && arr[i][j+1] !== undefined){
          temp[i+j].push('0')
        }
        if(arr[i+1][j] !== 1 && arr[i+1][j] !== undefined){
          temp[i+j].push('0')
        }
        if(arr[i-1][j] !== 1 && arr[i-1][j] !== undefined){
          temp[i+j].push('0')
        }
        if(arr[i][j-1] !== 1 && arr[i][j-1] !== undefined){
          temp[i+j].push('0')
        }
      }
    }
  }
  console.log(temp);
}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6
