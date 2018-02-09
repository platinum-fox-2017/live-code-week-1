const generateHourglass = (number) => {
    let array = []
    let count = number + (number - 1)
    let countspace = 0
    for (let i = 0; i < number + number; i++) {
        let char = '#'
        let space = ' '
        if (i < number) {
            array.push(space.repeat(countspace) + char.repeat(count) + space.repeat(countspace))
            count -= 2
            countspace++
        }
        else if (i > number) {
            count += 4
            countspace -= 2
            array.push(space.repeat(countspace) + char.repeat(count) + space.repeat(countspace))
            count -= 2
            countspace++
        }
    }
    return array
}


const printHourglass = (array) => {
    return array.join('\n')
}


let hrglass = generateHourglass(4);
console.log(printHourglass(hrglass));
// console.log(typeof hrglass);
