function lubangTerbesar(input){
  let nestedArray = [];
  for(let o=0; o<input.length; o++){
    for(let i=0; i<input[o].length; i++){
      var array = [];
      if(input[o][i]==='0'){
        array.push(o,i);
      }
    }
    nestedArray.push(array);
  }
  // return nestedArray;
}


console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
// console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
// console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6

//tuliskan koodinat dari nol di tiap isi array
//hitung nilai dari koordinat x dan y yang sama
