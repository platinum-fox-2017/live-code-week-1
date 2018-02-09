function lubangTerbesar(arr) {
  var arrString = arr.toString();
  var column = arr[0].length;
  var row = arr.length;
  var countLubang = 0;
  var arrLubang = [];

  for(let i = 0; i < arrString.length; i++) {
    var temp = [];
    if(arrString[i] !== ',') {
      temp.push(arrString[i]);
    }
    arrLubang.push(temp);
  }

  console.log(arrLubang);
}

// console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
// console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6