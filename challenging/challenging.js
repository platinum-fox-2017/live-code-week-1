/*
input: number
process: criteria: must be started with '(' and must be even numbers; 
    key point adalah ')' tidak boleh lebih banyak daripada '(' sebelumnya
output: array of possibilities

*/


function generateParen(num) {

    var arrHasil = [];

    var arrParen = []; // ini untuk push ke arrHasil

    var parentFront = '('; // 0
    var parentBack = ')'; // 1

    for (var i = 0; i < num; i++) {
        arrParen.push(parentFront);
        arrParen.push(parentBack);
    }
    console.log(arrParen.join(''));
    arrHasil.push(arrParen.join(''));

    return arrHasil;

}

console.log(generateParen(3)) // [ '((()))', '(()())', '(())()', '()(())', '()()()' ];