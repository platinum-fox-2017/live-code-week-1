'use strict'
function lubangTerbesar(input){
  var kotak = [];
  var tempBesar = [];
  var tempKecil = [];
  var besar=1;
  var kecil=0;
  for (let i =0;i<input.length;i++) {
    var tempKotak = [];
    for (let j=0;j<input[i].length;j++) {
        tempKotak.push(input[i].split('')[j]);
    }
        kotak.push(tempKotak)
      //  console.log(kotak)

        for (let j = 0; j<kotak.length; j++) {
          if (kotak[i][j]==='0' && kotak[i][j + 1]==='0') {
            besar += 1;
          }
        }
        //console.log(kotak)
    }

    return besar
}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6
