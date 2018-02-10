function hourGlass(index) {
  let arr = []
  for (let i = 0;i<Math.floor(index/2);i++){
    let temp = []
    for (let j = 0;j<index-i;j++){;
      if(j>=i){
        temp.push('*')
      } else {
        temp.push(' ')
      }
    }
    arr.push(temp)
  }
  for (let i = Math.floor(index/2);i>=0;i--){
    let temp = []
    for (let j = 0;j<index-i;j++){;
      if(j>=i){
        temp.push('*')
      } else {
        temp.push(' ')
      }
    }
    arr.push(temp)
  }


  return arr
}

console.log(hourGlass(7));
