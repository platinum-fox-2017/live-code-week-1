/*
ada 2 function
generatehourglass
input: number
process: number -> string
output: array of string #

printhourglass
input: array of string #
process: looping
output: string
*/


function generatehourglass(number) {

    var arrHashTag = [];
    var index = number + 1;

    var angka = 1;

    for (var j = 0; j < number; j++) {
        for (var i = 0; i < number; i++) {
            arrHashTag.push(i);
        }

    }

    return arrHashTag;

}


console.log(generatehourglass(3));
