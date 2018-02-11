function generateHourglass(input){
  let array = [];
  let isi = 'x';
  let isiTambahan = ' ';
  for(let i=(input+input-1); i>0; i-=2){
    let akumulasi = '';
    for(let h=i; h>0; h--){
      akumulasi += isi;
    }
    if(akumulasi.length!==(input+input-1)){
      let selisih = (input+input-1) - akumulasi.length;
      for(let q=0; q<selisih/2; q++){
        akumulasi = akumulasi + isiTambahan;
      }
      for(let z=0; z<selisih/2; z++){
        akumulasi = isiTambahan + akumulasi;
      }
    }
    array.push(akumulasi);
  }
  array.pop();
  for(let b=1; b<=(input+input-1); b+=2){
    akumulasi = '';
    for(let c=1; c<=b; c++){
      akumulasi += isi;
    }
    if(akumulasi.length!==(input+input-1)){
      let selisih = (input+input-1) - akumulasi.length;
      for(let g=0; g<selisih/2; g++){
        akumulasi = akumulasi + isiTambahan;
      }
      for(let d=0; d<selisih/2; d++){
        akumulasi = isiTambahan + akumulasi;
      }
    }
    array.push(akumulasi);
  }
  return array;
}

function printHourglass(input){
  let array = input;
  let newArray = [];
  for(let s=0; s<array.length; s++){
    let variabelBaru = '';
    for(let d=0; d<array[s].length; d++){
      let ubah = array[s][d];
      if(array[s][d]==='x'){
        ubah = '#';
        variabelBaru += ubah;
      } else {
        variabelBaru += ubah;
      }
    }
    newArray.push(variabelBaru);
  }
  return newArray.join('\n');
}

let hrglass1 = generateHourglass(6);
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
