function generateHourglass(num) {
    let stars = ['#', '###', '#####', '#######', '#########']

    for (let i = 0; i < num; i++) {
        let result = []
        for (let j = 0; j < num-1; j++) {
            result.push('')
        }
        for (let k = 0; k <= i; k++) {
            result.push('#')
        }
        console.log(result)
    }
    

    // if (num === 1) {
    //     let arr = []
    //     for (let i = 0; i <= num; i++) {
    //         arr.push(stars[i])
    //         console.log(arr)
    //         return arr
    //     }
    // } else if (num === 2) {
    //     let arr = []
    //     for (let i = 0; i <= num; i++) {
    //         for (let j = 0; j < num; j++) {
    //             arr.push(stars[i][j])
    //             console.log(arr)
    //             return arr
    //         }
    //     }
    // }
}

function printHourglass(arr) {
    // for (let i = 0; i < arr.length; i++) {
    //     return arr[i]
    // }
}

//driver code
let hrglass = generateHourglass(5);
console.log(typeof hrglass);
console.log(printHourglass(hrglass));