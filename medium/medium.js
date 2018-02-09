function lubangTerbesar(arr){
  let maxVal = 0;
  let val = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j]=="0"){
        for(let k = 0; k < 4; k++){
          val = countLubang(j,i,arr,k,arr[i].length);
          if(val>maxVal)
            maxVal = val;
        }
      }
    }
  }
  return maxVal;
}

function countLubang(x,y,arr,dir,size){
  if(x<0||y<0||x>(size-1)||(y>arr.length-1))
    return 0;
  if(arr[y][x]=="0"){
    // console.log("x: "+x+" y: "+y+" arr: "+arr[y][x]);
    switch(dir){
      case 0:
      return 1+countLubang(x+1,y,arr,dir,size);
      break;
      case 1:
      return 1+countLubang(x,y+1,arr,dir,size);
      break;
      case 2:
      return 1+countLubang(x-1,y,arr,dir,size);
      break;
      case 3:
      return 1+countLubang(x,y-1,arr,dir,size);
      break;
    }
  }
  else{
    return 0;
  }
}


console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6
console.log(lubangTerbesar(
  [
    "10111",
    "11011",
    "10110",
    "01110"])); // 3
