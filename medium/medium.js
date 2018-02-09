function lubangTerbesar(array){
  let countVertical = []
  let countHorizontal = []
  let result = []
  for(let i = 0 ; i < array.length ; i++){
    for(let j = 0 ; j < array.length ; j++){
      if(i !== array.length-1 && j !== array.length-1){
        if(array[i][j] && array[i+1][j] == '0'){
          let cordinat = []
          cordinat.push(i)
          cordinat.push(j)
          countVertical.push(cordinat)
        }else if(array[i][j] && array[i][j+1] == '0' ){
          let cordinat = []
          cordinat.push(i)
          cordinat.push(j)
          countHorizontal.push(cordinat)
        }
      }
    }
  }
  result.push(countVertical.length)
  result.push(countHorizontal.length)
  let max = result.sort(function(a,b){return b>a})
  console.log(max[0])

}

lubangTerbesar(["00111", "01101", "00100", "11110"]); // 3
lubangTerbesar(["111", "111", "111", "100"]); // 2
// lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111']); // 6
