/*
input: array string of numbers
process:
1. need to count number 0 vertically berdampingan -> create input tampungan untuk hitung 0 yang bersebelahan dengan 0 jika tidak return 0
2. need to count number 0 horrizontally berdampingan > idem
3. compare between veritcal and horrizontal
output: number
*/

function lubangTerbesar(arrStr) {

    var arrHitungHorizontal = [];
    var arrHitungVertical = [];
    // console.log(arrStr[3]); //[ '111', '111', '111', '100' ] // 100 // length: 3

    // for (var j = 0; j < arrStr.length; j++) {
        for (var i = 0; i < arrStr[3].length; i++) {
            var hitung0 = 1;
            if (arrStr[3][i] == 0 && arrStr[3][i+1] == 0) {
                hitung0 +=1
            } else {
                hitung0 = 0;
            }
        }
        arrHitungHorizontal.push(hitung0);
    // }

    return arrHitungHorizontal;

}






//TEST CASE
// console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
// console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6

/*
TEST
var x = '0';
var y = 0;
if (x == y) {
    console.log(true);
} else {
    console.log(false);
}

*/