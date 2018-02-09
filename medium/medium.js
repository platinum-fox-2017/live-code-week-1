function lubangTerbesar(arr){
    let counter = 0;
    // replace all 1s
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].split('')
        for (let j = 0; j < arr[i].length; j++){
            arr[i][j] = arr[i][j].replace(/1/, ' ')
        }
    }

    // check row
    for (let i = 0; i < arr.length; i++){
        let rowCounter = 0
        let tempRowCounter = 0
        for (let j = 0; j < arr[i].length; j++){
            if (arr[i][j] != '0'){
                tempRowCounter = 0
            } else if (arr[i][j] == '0'){
                tempRowCounter ++
            }
            if (tempRowCounter > rowCounter){
                rowCounter = tempRowCounter
            }
        }
        if (rowCounter > counter){
            counter = rowCounter
        }
    }

    // check col
    for (let i = 0; i < arr.length; i++){
        let colCounter = 0;
        let tempColCounter = 0;
        for(let j = 0; j < arr.length; j++){
            if (arr[j][i] != '0'){
                tempColCounter = 0
            } else if (arr[j][i] == '0'){
                tempColCounter++ 
            }
            if (tempColCounter > colCounter){
                colCounter = tempColCounter
            }
        }
        if (colCounter > counter){
            counter = colCounter
        }
    }
    return counter
}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6