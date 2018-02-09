function generateHourglass(num){
    let print = (num*2)-2;
    let result = [];
    let mid = Math.ceil(((num*2)-1)/2)
    let midToTop = [];
    let midToBottom = [];

    for(let i=0; i<mid; i++){
        let str = '';
        for(let j=0; j<=print; j++){
            str += 'X';
        }
        if(print==1){
            print -= 1;
        }else{
            print -= 2;
        }
        result.push(str);
    }
    for(let i=mid-2; i>=0; i--){
        result.push(result[i])
    }
    return result;
}

console.log(generateHourglass(5));

function printHourglass(num){
    // let mid = Math.ceil((num.length)/2);
    // let result = [];
    // for(let i=0; i<mid; i++){
    //     let str = '';
    //     for(let j=0; j<i; j++){
    //         str += ' '
    //     }
        

    // }
    // return mid
}


console.log(printHourglass(generateHourglass(5)));