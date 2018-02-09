function generateHourglass(num) {
    let stars = ['#', '###', '#####', '#######', '#########']

    if (num === 1) {
        let arr = []
        for (let i = 0; i < num; i++) {
            arr.push(stars[i])
            console.log(arr)
            return arr
        }
    } else if (num === 2) {
        let arr = []
        for (let i = 0; i < num; i++) {
            arr.push(stars[i])
            console.log(arr)
            return arr
        }
    }

    // if (num === ganjil[0]) {
    //     let arr = []
    //     arr.push('#')
    //     console.log(arr)
    //     return arr
    // }
    // else if (num === ganjil[1]) {
    //     let arr = []
    //     arr.push('###')
    //     console.log(arr)
    //     return arr
    // }
}

function printHourglass(arr) {
    // for (let i = 0; i < arr.length; i++) {
    //     return arr[i]
    // }
}

//driver code
let hrglass = generateHourglass(2);
console.log(typeof hrglass);
console.log(printHourglass(hrglass));