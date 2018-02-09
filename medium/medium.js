let lubangTerbesar = (input) => {
    console.log(input);
let max = 0;

    for(let i=0; i<input[0].length; i++){
        console.log(input[0])
        console.log(input[1])
        console.log(input[2])
        console.log(input[3])
        for(let j=0; i<input[1].length; j++){
            for(let k=0; k<input[2].length; k++){
                for(let l=0; l<input[3].length; l++){
                    if(i === j && i === k && i === l){
                        if(input[i] === 0 
                            && input[j] === 0 
                            && input[k] === 0 
                            && input[l] === 0){
                                max += 4;
                            }
                    }
                }
            }
        }
    }
}
console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6