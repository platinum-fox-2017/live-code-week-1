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

    var arrHasil = [];
    var index = number + 1;
    var hash = '#'
    
    for (var j = 0; j < number+1; j++) {
        var arrHashTag = [];
        if (j % 2 == 0) {
            for (var i = 0; i < number+1; i++) {
                arrHashTag.push(hash);
            }
            var joint = arrHashTag.join('');
            arrHasil.push(joint);    
        } else {
            for (var i = 0; i < number-1; i++) {
                arrHashTag.push('#');
            }
            var joint = arrHashTag.join('');
            arrHasil.push(joint);
        }
    }

    return arrHasil;

}

// then create object of hourglass for input to printhourglass
var obj = {}

let hourglass = generatehourglass(4);
console.log(hourglass);
