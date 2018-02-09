function generateHourGlass(input){
  var arr = []
  var obj = {}
  var content = '#'
  for(let i=0; i<input; i++){
    //obj = arr.push(content[i])
    arr.push([])
    for(let j=0; j<input; j++){
      arr[i].push(content[j])
      j++
    }
  }
  return arr
}

console.log(generateHourGlass(1))
console.log('===============================');
