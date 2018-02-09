function generateHourglass(num){
    let print = (num*2)-2;
    let result = [];
    for(let i=0; i<(num*2)-1; i++){
        let str = '';
        for(let j=0; j<=print; j++){
            str += j;
        }
        if(print==1){
            print -= 1;
        }else{
            print -= 2;
        }
        
        result.push(str);
    }
    return result;
}

// let hrglass1 = generateHourglass(5);
// console.log(hrglass1);

console.log(generateHourglass(4))