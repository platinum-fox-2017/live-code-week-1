function hourGlass(index) {
  let arr = []
  let count1 = 0
  let count2 = index -1
  for (let i = 0 ;i<index;i++){
    let temp = []
    for (let j = 0;j<index;j++){
      for(let k =0;k<Math.ceil(index/2){
        count1++
        count2--
        if(i==count1 || i==count2){
          temp.push('*')
        } else {
          temp.push(' ')
        }
      } 
    }
    arr.push(temp)
  }
  return arr
}

console.log(hourGlass(5));
