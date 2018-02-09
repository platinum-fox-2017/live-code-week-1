// Buatlah sebuah function bernama generateHourglass dan printHourglass. 

function generateHourglass(number){
    let array = []
    for(let i=0;i<=number;i++){
			let inside =[]
			for(let j=0;j<=number;j++){
				// console.log(i,j,'i-j')
				if(i !== 1){
					inside.push(' # ')
				}else{
					inside.push(' # ')
				}
				
				// console.log(i,j,'i-jaf')
			}
				array.push(inside.join(''))
    }
    return array
}

function printHourglass(array){
		let result =''
		for(let i =0;i<array.length;i++){
			result+=array[i]+'\n'
		}
		return result
}

// Gunakan driver code di bawah ini :

// javascript
// let hrglass = generateHourglass(...);
// console.log(typeof hrglass);
// console.log(printHourglass(hrglass));


// Lihat CONTOH di bawah ini :

// javascript
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

// console.log('===============================');
// let hrglass4 = generateHourglass(4);
// console.log(hrglass4);
// /*
// [ 'xxxxxxx',
//   ' xxxxx ',
//   '  xxx  ',
//   '   x   ',
//   '  xxx  ',
//   ' xxxxx ',
//   'xxxxxxx' ]
// */
// console.log(typeof hrglass4); // object
// console.log(printHourglass(hrglass4));
// /*
// #######
//  #####
//   ###
//    #
//   ###
//  #####
// #######
// */

// console.log('===============================');
// let hrglass5 = generateHourglass(5);
// console.log(hrglass5);
// /*
// [ 'xxxxxxxxx',
//   ' xxxxxxx ',
//   '  xxxxx  ',
//   '   xxx   ',
//   '    x    ',
//   '   xxx   ',
//   '  xxxxx  ',
//   ' xxxxxxx ',
//   'xxxxxxxxx' ]
// */
// console.log(typeof hrglass5);  // object
// console.log(printHourglass(hrglass5));
// /*
// #########
//  #######
//   #####
//    ###
//     #
//    ###
//   #####
//  #######
// #########
// */
// ```