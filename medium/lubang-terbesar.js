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
                var trapHorizontal = 1;
                let countPointHorizontal = 1;
                for(let h=1; h<board[i].length-1; h++){
                    if(board[i][h]==0){
                        trapHorizontal += countPointHorizontal;
                    }else if(board[i][h]==1){
                        countPointHorizontal = 0;
                    }
                }
                if(trap<trapHorizontal){
                    trap = trapHorizontal;
                }
                
                var trapVertical = 1;
                let countPointVertical = 1;
                for(let v=1; v<board.length; v++){
                    if(board[v][i]==0){
                        trapVertical += countPointVertical;
                    }else if(board[v][i]==1){
                        countPointVertical = 0;
                    }
                }
                if(trap<trapVertical){
                    trap = trapVertical;
                }
                
            }
        }
    }

    console.log(board);

    return trap;
}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["101", "101", "101", "100"])); // 4
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6