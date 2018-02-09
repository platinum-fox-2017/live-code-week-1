function hitungLubang(str) {
    let counterString = 0;
    let max = 0;
    while(counterString < str.length) {
        let observe = str[counterString];
        let counterNextCharacter = counterString;
        let check = true;
        let counterTwin = 1;

        while(counterNextCharacter < str.length && check == true) {
            if((str[counterNextCharacter+1] == '0' ) && (str[counterNextCharacter] == '0')) {
                counterTwin = counterTwin + 1;
                counterNextCharacter = counterNextCharacter + 1;
            } else {
                check = false;
            }
        }

        if (counterTwin > max) {
            max = counterTwin;
        }

        counterString = counterString + 1;
    }

    return max;
    
}

function lubangTerbesar(arr) {
    let max = 0;
    for(let i = 0; i < arr.length; i++) {
        var compare = hitungLubang(arr[i]);
        if (compare > max) {
            max = compare;
        }
    }

    var panjang = arr[0].length;

    for(let j = 0; j < panjang; j++) {
        var str = '';
        for(let k = 0; k < arr.length; k++) {
            str = str + arr[k][j];
        }
        var compare = hitungLubang(str);
        if (compare > max) {
            max = compare;
        }
    }

    return max;
}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6