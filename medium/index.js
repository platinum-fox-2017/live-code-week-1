function lubangTerbesar(array) {
    
    let board = [];
    let lubangKecil = 0;
    let lubangBesar = 0;
    let posfor0 = [];
    let posfor0Kecil = [];

    for (let i = 0; i < array.length; i++) {
        let tempBoard = []
        for (let j = 0; j < array[i].length; j++) {
            tempBoard.push(array[i].split('')[j])
        }
        board.push(tempBoard)
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {


            if (board[i][j] === '0' && board[i][j + 1] === '0') {
                lubangBesar += 1
                posfor0.push([i, j])
            } 
            // else if (board[i][j] === '0') {
            //     lubangKecil += 1
            //     posfor0Kecil.push([i, j])
            // }

        }
    }

 
    console.log(board)
    console.log(lubangBesar)
    // console.log(lubangKecil)
    // if(lubangBesar > lubangKecil) {
    //     return lubangBesar
    // } else {
    //     return posfor0Kecil.length
    // }
    
    // console.log(lubangKecil)
    console.log(posfor0)
    // console.log(posfor0Kecil)
    // console.log(posfor0[0])
}


// console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
// console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6