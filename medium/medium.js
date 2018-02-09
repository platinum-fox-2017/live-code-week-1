function lubangTerbesar(input){
  var arr = []
  var count = 0
  var string = input.toString()
  var save = []

  for(let i=0; i<input.length; i++){
    arr.push([])
    for(let j=0; j<input[i].length; j++){

      arr[i].push(string[j][i])
    }
  }
  return arr
  if(count < input.length){
    for(let k=0; k<arr[i].length; k++){
      arr[j] = string[i][j]
      if(string[i][j] === arr[j])
    }
  }
  count++

}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
