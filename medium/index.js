const lubangTerbesar = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            console.log(array[i][j])
        }
        for (let k = 0; k < array.length; k++) {
            console.log(array[k][i])
        }
        console.log('sini')
    }
    // return array
}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
// console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2