function lubangTerbesar(num){
  var arrhorizontal=[],arrvertical=[]
  for(let i=0;i<num.length;i++){
    var simpan='',horizontal=0
    for(let j=0;j<num[i].length;j++){
      if(num[i][j]==='0'){
        horizontal++
      }
    }
    arrhorizontal.push(horizontal)
  }
  console.log(arrhorizontal)
}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"]))
