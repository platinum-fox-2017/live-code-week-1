const generateHourglass = rows =>{
    let arr = []
    for(let i=rows; i>=1; i--){
        let str=''
        for (let j=0; j<rows-1; j++){
            if(i>j){
                str+='#'
            }
        }
    arr.push(str)
    }

    return arr;

}

const printHourglass= num =>{

}

let hrglass1 = generateHourglass(4);
console.log(hrglass1);



    