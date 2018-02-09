function lubangTerbesar(input){
  let nestedArray = [];
  for(let o=0; o<input.length; o++){
    // console.log(input[o]);
    for(let h=0; h<input[o].length; h++){
      var array = [];
      // console.log(input[o][h]);
      if(input[o][h]===0){
        array.push(o,h);
        console.log(array);
      }
      // console.log(array);
    }
    nestedArray.push(array);
  }
  // return nestedArray;
}


console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
// console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
// console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6
