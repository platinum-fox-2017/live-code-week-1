function generateHourGlass(input){
  var arr = []
  var obj = {}
  var content = '#'

  for(let i=0; i<input; i++){
    arr.push([])
    for(let j=0; j<i; j++){
      arr[i].push('')
    }
    for(let k=0; k<input; k++){
      arr[i].push(content)
    }
  }
  for(let x=input; x>0; x-- ){
    arr.push('')
    for(let y=input[x]; y>0; y--){
      arr.push(content)
    }
  }
  return arr
}

console.log(generateHourGlass(3))
console.log('===============================');
