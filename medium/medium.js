const lubangTerbesar = arr =>{
    
    for (let i =0; i<arr.length-1; i++){
       let countH = 0;
        for(let j = 1; j<arr[i].length-1; j++){
            //console.log(arr[i][j-1], arr[i][j])
            if(arr[i][j-1] === 0 || arr[i][j]=== 0){
                countH+=1;
            }
        }
       console.log(countH)
    }
    //return countH
}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6