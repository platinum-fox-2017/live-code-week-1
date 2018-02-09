let lubangTerbesar = (input) => {


    let count1 =0;
    let count2 =0;
    let count3 =0;
    let count4 =0;

    let horizontal =0;
    let vertical =0;

    let count_horizontal1 = []
    let count_horizontal2 = []
    let count_horizontal3 = []
    let count_horizontal4 = []
    let count_horizontal5 = []
    let count_horizontal6 = []

    // console.log(input[0]);
    // console.log(input[1]);
    // console.log(input[2]);
    // console.log(input[3]);
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
        // console.log(zero_positions[i][0]);
        if(zero_positions[i][0] === 0){
            count_horizontal1.push(zero_positions[i][1]);
        }
        if(zero_positions[i][0] === 1){
            count_horizontal2.push(zero_positions[i][1])
        }
        if(zero_positions[i][0] === 2){
            count_horizontal3.push(zero_positions[i][1])
        }
        if(zero_positions[i][0] === 3){
            count_horizontal4.push(zero_positions[i][1])
        }
        if(zero_positions[i][0] === 4){
            count_horizontal5.push(zero_positions[i][1])
        }
        if(zero_positions[i][0] === 5){
            count_horizontal6.push(zero_positions[i][1])
        }
    }
    // console.log(count_horizontal1);
    // console.log(count_horizontal2);
    // console.log(count_horizontal3);
    // console.log(count_horizontal4);
    // console.log(count_horizontal5);
    // console.log(count_horizontal6);
    let empty =[];
    empty.push(count_horizontal1)
    empty.push(count_horizontal2)
    empty.push(count_horizontal3)
    empty.push(count_horizontal4)
    empty.push(count_horizontal5)
    empty.push(count_horizontal6)
    let new_empty = empty.toString().split(',').join('');
    // console.log(new_empty);

    for(let i=0; i<new_empty.length; i++){
        if(new_empty[i] == 0){
            count1 +=1;
        }
        if(new_empty[i] == 1){
            count2++;
        }
        if(new_empty[i] == 2){
            count3++;
        }
        if(new_empty[i] == 3){
            count4++;
        }
    }
    // console.log(count1);
    // console.log(count2);
    // console.log(count3);
    // console.log(count4);

    if(count1 > count2 && count1 > count3 && count1 > count4){
        return count1;
    }
    if(count2 > count1 && count2 > count3 && count2 > count4){
        return count2;
    }
    if(count3 > count1 && count3 > count2 && count3 > count4){
        return count3;
    }
    if(count4 > count1 && count4 > count2 && count4 > count3){
        return count4;
    }
    return count1+count2+count3+count4;
}
console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6