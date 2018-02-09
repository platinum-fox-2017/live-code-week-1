function lubangTerbesar(arr){
    let board = [];
    for(let i=0; i<arr.length; i++){
        let row = [];
        for(let j=0; j<arr[i].length; j++){
            row.push(arr[i][j]);
        }
        board.push(row);
    }

    let trap = 0;

    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if(board[i][j]==0){
                let trapHorizontal = 0;
                for(let k=1; k<board[i].length; k++){
                    if(board[i][k]==0){
                        trapHorizontal += 1;
                    }
                }
                if(trap<trapHorizontal){
                    trap = trapHorizontal;
                }

                // let trapVertical = 0;
                // for(let k=1; k<board[i].length; k++){
                //     if(board[j][k]==0){
                //         trapVertical += 1;
                //     }
                // }
                // if(trap<trapVertical){
                //     trap = trapVertical;
                // }
            }
        }
    }

    console.log(board);

    return trap;
}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6