function generateHourglass(num){
    let print = (num*2)-2;
    let result = [];
    let mid = Math.ceil(((num*2)-1)/2)
    let midToTop = [];
    let midToBottom = [];

    for(let i=0; i<mid; i++){
        let str = '';
        for(let j=0; j<i; j++){
            str += ' '
        }
        for(let j=0; j<=print; j++){
            str += '#';
        }
        let str2 = '';
        for(let j=str.length; j<(num*2)-1; j++){
            str2 += ' '
        }

        if(print==1){
            print -= 1;
        }else{
            print -= 2;
        }
        result.push(str+str2);
    }
    
    for(let i=mid-2; i>=0; i--){
        result.push(result[i]);
    }
    return result.join('\n');
}

console.log(generateHourglass(5));
