const generateHourglass = rows =>{
    let arr = []
     for(i = rows-1;i >= 1; i--) {
         let str='';
        for(space = 0; space <=rows-i; space++) {
           str+=' ';
        }
        let has = 0;
        while(has != (2*i - 1)) {
            str+='#'
            has++;
        }
        arr.push(str)
    }

    for(i = 1; i<rows; i++) {
        let str='';
       for(space = 0; space <= rows-i; space++) {
          str+=' ';
       }
       let has = 0;
       while(has != (2*i - 1)) {
           str+='#'
           has++;
       }
       arr.push(str)
   }

    return arr;

}

const printHourglass= num =>{

}

let hrglass1 = generateHourglass(4);
console.log(hrglass1);



    