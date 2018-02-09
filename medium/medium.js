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

  //      0    1    2    3    4
  // 0 [ [ '0', '0', '1', '1', '1' ],
  // 1 [ '0', '1', '1', '0', '1' ],
  // 2 [ '0', '0', '1', '0', '0' ],
  // 3 [ '1', '1', '1', '1', '0' ] ]

  // horizontal
  // start from the first row
  // check the first index if it's 0 >> countLubang++
  // check the next index if it's 0, yes >> countLubang++, no >> stop, countLubang >> currentcount
  // continue to the next row, repeat the steps above
  // if countLubang > currentcount, reassign the value
  // continue till the last row
  // do vertical check
  // vertical
  // same as horizontal start from the first column till the last column instead

  var countLubang = 0;
  var indexLubang;
  debugger
  // horizontal check
  for (let i = 0; i < arrLubang.length; i++) {
    debugger
    for (let j = 0; j < arrLubang[0].length; j++) {
      debugger
      if(Number(arrLubang[i][j]) === 0) {
        if(Number(arrLubang[i][j+1])) {
          countLubang;
        }
      }
    }
  }
  // console.log(row,'<<<');
  // console.log(column,'<<<<');
  console.log(countLubang,'<<<')
  console.log(arrLubang[0].length)
}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
// console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
// console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6