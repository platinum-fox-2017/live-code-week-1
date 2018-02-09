const generateHourglass = (number) => {
    let array = []
    for (let i = 0; i < number + (number - 1); i++) {
        array.push('x')
        // for (let j = 0; j < number; j++) {
        //     array[i].push('#')
        // }
        // for (let index = 0; index < array.length; index++) {
        //     const element = array[index];

        // }

    }
    return array
}


const printHourglass = (array) => {

}


let hrglass = generateHourglass(4);
// console.log(printHourglass(hrglass));
console.log(hrglass)
// console.log(typeof hrglass);
