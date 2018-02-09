function generateHourglass(number) {
  let arr = new Array();
  if (number < 0)
    return 0;
  for (let i = 0; i < number; i++) {
    let tempStr = new String();
    tempStr += (countSpace(i) + countHashtag((2*number-1)-2*i) + countSpace(i));
    arr.push(tempStr);
  }
  for (let i = number-2; i >= 0; i--) {
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
console.log(typeof hrglass5);  // object
console.log(printHourglass(hrglass5));

console.log('===============================');
let hrglass4 = generateHourglass(4);
console.log(hrglass4);
console.log(typeof hrglass4);  // object
console.log(printHourglass(hrglass4));

console.log('===============================');
let hrglass3 = generateHourglass(3);
console.log(hrglass3);
console.log(typeof hrglass3);  // object
console.log(printHourglass(hrglass3));

console.log('===============================');
let hrglass2 = generateHourglass(2);
console.log(hrglass2);
console.log(typeof hrglass2);  // object
console.log(printHourglass(hrglass2));
