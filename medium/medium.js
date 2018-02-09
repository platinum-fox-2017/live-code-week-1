function lubangTerbesar(arr) {
  var arrString = arr.toString().replace(/,/g, '');
  var row = arr[0].length;
  var column = arr.length;
  var arrLubang = [];

  var count = 0; 
  for (let j = 0; j < column; j++) {
    var temp = [];
    for(let i = 0; i < row; i++) {
      temp.push(arrString[count]);
      count++;
    }
    arrLubang.push(temp);
  }

  // [ [ '0', '0', '1', '1', '1' ],
  // [ '0', '1', '1', '0', '1' ],
  // [ '0', '0', '1', '0', '0' ],
  // [ '1', '1', '1', '1', '0' ] ]

  
  var countLubang = 0;
  var indexLubang;
  for (let i = 0; i < arrLubang[0].length; i++) {
    if(arrLubang[0][i] === 0) {
      countLubang++;
      indexLubang = i;
    }
  }
  console.log(row,'<<<');
  console.log(column,'<<<<');
  console.log(arr[0])
  return arrLubang;
}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
// console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
// console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6