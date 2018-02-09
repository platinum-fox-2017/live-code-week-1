/*
input: array string of numbers
process:
1. need to count number 0 vertically berdampingan -> create input tampungan untuk hitung 0 yang bersebelahan dengan 0 jika tidak return 0
2. need to count number 0 horrizontally berdampingan > idem
3. compare between veritcal and horrizontal
4. untuk vertical harus ubah menjadi array baru sebelum dihitung
output: number
*/

function lubangTerbesar(arrStr) {

    // HITUNG HORIZONTAL
    var arrHitungHorizontal = [];
    // console.log(arrStr[3]); //[ '111', '111', '111', '100' ] // 100 // length: 3
    
    for (var j = 0; j < arrStr.length; j++) {
        for (var i = 0; i < arrStr[j].length-1; i++) {
            var hitung0 = 1;
            if (arrStr[j][i] == '0' && arrStr[j][i+1] == '0') {
                hitung0 +=1
            } else {
                hitung0 = 0;
            }
        }
        arrHitungHorizontal.push(hitung0);
    }
    // console.log('H', arrHitungHorizontal);
    
    // HITUNG VERTICAL
    var arrHitungVertical = [];
    
    // CREATE ARRAY VERTICAL
    var arrTampungVertical = []; // untuk tampung hasil gabungan untuk dihitung
    for (var j = 0; j < arrStr[0].length; j++) {
        var arrVertical = [] // ini array untuk ubah dari horrizontal ke vertical
        for (var i = 0; i < arrStr.length; i++) {
            arrVertical.push(arrStr[i][j]);
        }
        // console.log(arrVertical.join('')); // 1111
        arrTampungVertical.push(arrVertical.join(''));
    }
    // console.log(arrTampungVertical); // OK

    for (var j = 0; j < arrTampungVertical.length; j++) {
        for (var i = 0; i < arrTampungVertical[j].length-1; i++) {
            var hitung0 = 1;
            if (arrTampungVertical[j][i] == '0' && arrTampungVertical[j][i+1] == '0') {
                hitung0 +=1
            } else {
                hitung0 = 0;
            }
        }
        arrHitungVertical.push(hitung0);
    }
    // console.log('V', arrHitungVertical);

    //COMPARE MAX
    var HMax = Math.max(...arrHitungHorizontal);
    // console.log('Hmax', HMax);
    var VMax = Math.max(...arrHitungVertical);
    // console.log('Vmax', VMax);

    if (HMax > VMax) {
        return HMax;
    } else {
        return VMax; 
    }
    
}






//TEST CASE
console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6


// // TEST
// var x = '100';
// var y = '0';
// if (x[1] === y) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// console.log('===', x[1]);
