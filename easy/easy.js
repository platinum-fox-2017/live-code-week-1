function generateHourglass(num){
    let result = []
    // upper inverse pyramid
    for (let i = num; i > 1; i--){
        let str = ''
        for(let j = 0; j < num-i; j++){
            str += ' '
        }
        for (let k = 0; k < (2*i)-1; k++){
            str += '#'
        }
        for(let l = 0; l < num-i; l++){
            str += ' '
        }
        result.push(str)
    }
    // lower pyramid
    for (let i = 1; i <= num; i++){
        let str2 = ''
        for (let j = 0; j < num-i; j++){
            str2 += ' '
        }
        for (let k = 0; k < (2*i)-1; k++){
            str2 += '#' 
        }
        for (let l = 0; l < num-i; l++){
            str2 += ' '
        }
        result.push(str2)
    }
    return result
}

function printHourglass(arr){
    return arr.join('\n')
}


let hrglass1 = generateHourglass(1);
console.log(hrglass1);
/*
[ 'x' ]
*/
console.log(typeof hrglass1); // object
console.log(printHourglass(hrglass1));
/*
#
*/

console.log('===============================');
let hrglass2 = generateHourglass(2);
console.log(hrglass2);
/*
[ 'xxx', ' x ', 'xxx' ]
*/
console.log(typeof hrglass2);  // object
console.log(printHourglass(hrglass2));
/*
###
 #
###
*/

console.log('===============================');
let hrglass3 = generateHourglass(3);
console.log(hrglass3);
/*
[ 'xxxxx', ' xxx ', '  x  ', ' xxx ', 'xxxxx' ]
*/
console.log(typeof hrglass3); // object
console.log(printHourglass(hrglass3));
/*
#####
 ###
  #
 ###
#####
*/

console.log('===============================');
let hrglass4 = generateHourglass(4);
console.log(hrglass4);
/*
[ 'xxxxxxx',
  ' xxxxx ',
  '  xxx  ',
  '   x   ',
  '  xxx  ',
  ' xxxxx ',
  'xxxxxxx' ]
*/
console.log(typeof hrglass4); // object
console.log(printHourglass(hrglass4));
/*
#######
 #####
  ###
   #
  ###
 #####
#######
*/

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
/*
#########
 #######
  #####
   ###
    #
   ###
  #####
 #######
#########
*/