let lubangTerbesar = (input) => {

    let count_horizontal1 = 0
    let count_horizontal2 = 0
    let count_horizontal3 = 0
    let count_horizontal4 = 0
    let count_vertical1 = 0
    let count_vertical2 = 0
    let count_vertical3 = 0
    let count_vertical4 = 0

    console.log(input[0]);
    console.log(input[1]);
    console.log(input[2]);
    console.log(input[3]);
    let zero_positions = [];
    for(let i=0; i<input.length; i++){
        for(let j=0; j<input[i].length; j++){
            if(parseInt(input[i][j]) === 0){
                zero_positions.push([i,j]);
            }
        }
    }
    // console.log(zero_positions);
    for(let i=0; i<zero_positions.length; i++){
        console.log(zero_positions[i][0]);
      
    }
}
console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
// console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
// console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6