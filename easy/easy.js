// ```javascript - easy
function generateHourglass(num) {

/*
n selisih arr
1    0    1    (i=1)                  0-1-0
2    1    3    (i=3,1,3)
3    2    5    (i=5,3,1,3,5)          0-5-0; 1-3-1; 2-1-2; 1-3-1; 0-5-0
4    3    7    (i=7,5,3,1,3,5,7)
5    4    9    (i=9,7,5,3,1,3,5,7,9)
}
*/
  //membuat array
  let arr = []
  for(let i=0; i<=num+2; i++) {
    arr.push('')
    let text = ''
    for(let j=0; j<i; j++) {
      if(j == 0 || j == num+2) {
        text += ''
      }
      text += '#'
    }
    arr[i] += text
  }

  //memasukan # da ' '




  console.log(arr);
}

console.log(generateHourglass(3));
//
// let hrglass = generateHourglass(3);
// console.log(typeof hrglass);
// console.log(printHourglass(hrglass));
//
//
// console.log('===============================');
// let hrglass3 = generateHourglass(3);
// console.log(hrglass3);
// /*
// [ 'xxxxx', ' xxx ', '  x  ', ' xxx ', 'xxxxx' ]
// */
// console.log(typeof hrglass3); // object
// console.log(printHourglass(hrglass3));
// /*
// #####
//  ###
//   #
//  ###
// #####
// */
