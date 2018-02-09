function generateHourglass(num) {

    for (let i = num; i > 1; i--) {
        let outerArr = []
        for (let j = 0; j < i; j++) {
            outerArr.push('#')
        }
        console.log(outerArr)
    }
    for (let i = 0; i < num; i++) {
        let outerArr = []
        for (let k = 0; k <= i; k++) {
            outerArr.push('#')
        }
        console.log(outerArr)
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