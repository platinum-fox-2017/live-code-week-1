function generateHourglass(number) {
  let arr = new Array();
  if (number < 0)
    return 0;
  for (let i = 0; i < number; i++) {
    let tempStr = new String();
    tempStr += (countSpace(i) + countHashtag((2*number-1)-2*i) + countSpace(i));
    arr.push(tempStr);
  }
  for (let i = number-1; i >= 0; i--) {
    let tempStr = new String();
    tempStr += (countSpace(i) + countHashtag((2*number-1)-2*i) + countSpace(i));
    arr.push(tempStr);
  }
  return arr;
}

function countSpace(num) {
  let str = new String();
  for (let i = 0; i < num; i++) {
    str += " ";
  }
  return str;
}

function countHashtag(num) {
  let str = new String();
  for (let i = 0; i < num; i++) {
    str += "#";
  }
  return str;
}

function printHourglass(nestedArr) {
  let str = new String();
  for(let i = 0; i < nestedArr.length; i++){
    str += (nestedArr[i]+"\n");
  }
  return str;
}

console.log('===============================');
let hrglass5 = generateHourglass(5);
console.log(hrglass5);
/*
[ 'xxxxxxxxx',
  ' xxxxxxx ',
  '  xxxxx  ',
  '   xxx   ',
  '    x    ',
  '   xxx   ',
  '  xxxxx  ',
  ' xxxxxxx ',
  'xxxxxxxxx' ]
*/
console.log(typeof hrglass5);  // object
console.log(printHourglass(hrglass5));
