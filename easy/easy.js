//menerima tipe data number , return array yang ada simbolnya
function generateHourglass(num){
  let result = []
  for (i = 1; i < 2*num; i++){
      let temp = ''
    for (j = 1; j < 2*num; j++){
      if (i <= j && i+j <= 2*num || i > num && i >= j && i+j >= 2*num ){
        temp += '#'
      }else{
        temp += ' '
      }
    }
    result.push(temp)
  }
  return result
}

//menerima sebuah parameter dari function generateHourglass, jadi bentuk jam pasir
function printHourglass(array){
  let hourglass = array
  return hourglass.join('\n')

}


let hrglass1 = generateHourglass(1);
console.log(hrglass1);
console.log(printHourglass(hrglass1));


console.log('===============================');

let hrglass2 = generateHourglass(2);
console.log(hrglass2);
console.log(printHourglass(hrglass2));


console.log('===============================');

let hrglass3 = generateHourglass(3);
console.log(hrglass3);
console.log(printHourglass(hrglass3));


console.log('===============================');

let hrglass4 = generateHourglass(4);
console.log(hrglass4);
console.log(printHourglass(hrglass4));

console.log('===============================');

let hrglass5 = generateHourglass(5);
console.log(hrglass5);
console.log(printHourglass(hrglass5));
