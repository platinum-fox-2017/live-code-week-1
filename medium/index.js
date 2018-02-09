const lubangTerbesar = (array) => {
    // ke kanan
    let countLubangX = 0
    let maks = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === '0') {
                countLubangX++
                maks = countLubangX
            } else if (array[i][j] !== '0') {
                // salah jadi ke reset
                // maks nya terakhir misal ada 2 ketemu I maka 2 harus tetap disimpan
                // bandingin maks terakhir dengan maks terlama

                if (maks < temp) {
                    maks = temp
                }
                countLubangX = 0
            }
        }
    }
    // ke bawah
    const col = array.length
    let countLubangY = 0;
    for (let k = 0; k < col; k++) {
        for (let l = 0; l < array.length; l++) {
            if (array[l][k] != undefined) {
                if (array[l][k] === '0') {
                    countLubangY++
                } else if (array[l][k] !== '0') {
                    countLubangY = 0
                }
            }
        }
    }
    console.log(countLubangX)
    console.log(countLubangY)
    // if (countLubangX > countLubangY) {
    //     return countLubangX
    // } else {
    //     return countLubangY
    // }
    // return array
}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
// console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
// console.log(lubangTerbesar(["00111", "10011", "00111", "10010", "00110", '10111'])); // 6
