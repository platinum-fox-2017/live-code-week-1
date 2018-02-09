function lubangTerbesar(array){
  let mapCoordinat = []
  for(let i = 0 ; i < array.length ; i++){
    for(let j = 0 ; j < array.length ; j++){
      let cordinat = []
      cordinat.push(i)
      cordinat.push(j)
      mapCoordinat.push(cordinat)
    }
  }
  console.log(array.join('\n'))
  console.log(mapCoordinat)
}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
// console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
// console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6
