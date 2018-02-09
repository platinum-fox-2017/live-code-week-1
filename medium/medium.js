function lubangTerbesar(input){
  var arr = []
  var string = input.toString()

  for(let i=0; i<input.length; i++){
    arr.push([])

    for(let j=0; j<input[i].length; j++){
      arr[i].push(string[j])
    }
  }
  return arr
}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
