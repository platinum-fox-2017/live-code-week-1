function lubangTerbesar(input){
  let array = [];
  for(let i=0; i<input.length; i++){
    let count = 0;
    for(let j=0; j<input[i].length; j++){
      if(input[i][j]==='1'){
        array.push(count);
        count = 0;
      } else if(input[i][j]==='0'){
        count++;
      }
    }
    array.push(count);
  }
  for(let i=0; i<input[0].length; i++){
    let count = 0;
    for(let j=0; j<input.length; j++){
      if(input[j][i]==='1'){
        array.push(count);
        count = 0;
      } else if(input[j][i]==='0'){
        count++;
      }
    }
    array.push(count);
  }
  array.sort();
  return array[array.length-1];
}


console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6
