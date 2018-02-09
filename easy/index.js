const generateHourglass = (number) => {
    let array = []
    let count = number + (number - 1)
    for (let i = 0; i < number + (number - 1); i++) {

        // for (let j = 0; j < number + (number - 1); j++) {
        //     let char = '#'
        //     parseInt(char)
        //     char *= j + 1
        //     array[i] += char
        // }
        let char = '#'
        // console.log(1 * char)
        if (i < number) {
            array.push(char.repeat(count))
            console.log('masuk sini')
            console.log(array)
            //push yg full trus kurangi sebanyak counter 2 dst
            count -= 2
            console.log(count)
        } else if (i >= number) {
            array.push(char.repeat(count))
            count += 2
        }
        //     //push ke # ditambah trus
        //     array.push(char.repeat(count))
        //     count += 2
        // }
    }
    // return array
}


const printHourglass = (array) => {

}


let hrglass = generateHourglass(4);
// console.log(printHourglass(hrglass));
console.log(hrglass)
// console.log(typeof hrglass);
