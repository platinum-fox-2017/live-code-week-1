function lubangTerbesar(arr){
    let counter = 0;

    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].split('')
        // arr[i].replace()
        for (let j = 0; j < arr[i].length; j++){
            arr[i][j] = arr[i][j].replace(/1/, ' ')
        }
    }
    // return arr

    // check row
    for (let i = 0; i < arr.length; i++){
        let rowCounter = 0;
        for (let j = 0; j < arr[i].length; j++){
            let tempRowCounter = 0
            if (arr[i][j] != '0'){
                console.log('kena')
                tempRowCounter = 0
                continue
            } else if (arr[i][j] == '0'){
                console.log(`ini i ${i} ini j${j}`)
                tempRowCounter++
            }
            if (tempRowCounter > rowCounter){
                rowCounter = tempRowCounter
            }
        }
        console.log(rowCounter)
        if (rowCounter > counter){
            counter = rowCounter
        }
    }
    return counter

    // check col
    for (let i = 0; i < arr.length; i++){
        let colCounter = 0;
        for(let j = 0; j < arr.length; j++){
            if (arr[j][i] == '0'){
                colCounter++ 
            }
        }
        if (colCounter > counter){
            counter = colCounter
        }
    }


    return counter
}

// console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log()
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log()
// console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6