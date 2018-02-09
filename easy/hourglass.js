function hourGlass(index) {
  let arr = []
  for (let i = 0 ;i<index;i++){
    let temp = []
    for (let j = 0;j<index;j++){
        if(j>Math.floor(i/2)){
          temp.push('*')
        } else {
          temp.push(' ')
        }
    }
    arr.push(temp)
  }
  return arr
}

console.log(hourGlass(5));

function print(n) {
    for(i=n;i>=1;i--) {
        for(j=1;j<=i;j++) {
            console.log(i+" ");
        }
         console.log("<br>");
    }
}

console.log(print(5));
