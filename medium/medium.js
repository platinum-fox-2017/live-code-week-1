const lubangTerbesar = arr =>{
    let countH=0;
    let countF=0;
    for (let i =0; i<arr.length-1; i++){
        for(let j = 1; j<arr[i].length-1; j++){
            if(arr[i][j-1] === '0' && arr[i][j]=== '0'){
                countH++
            }
            if(arr[i][j] === '0' && j !=  i ){
                countF++
            }
        }
    }
    if (countH > countF){
        return countH
    }else{
        return countF
    }
    
}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6