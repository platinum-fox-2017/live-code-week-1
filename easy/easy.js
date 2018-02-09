const generateHourglass = rows =>{
    let arr = [], has =0;
     for(i = rows;i >= 1; i--) {
         let str='';
        for(space = 0; space <=rows-i; space++) {
           str+=' ';
        }
        has = 0;
        while(has != (2*i - 1)) {
            str+='#'
            has++;
        }
        arr.push(str)
    }

    for(i = 1; i<=rows; i++) {
        let str='';
       for(space = 0; space <= rows-i; space++) {
          str+=' ';
       }
       has = 0;
       while(has != (2*i - 1)) {
           str+='#'
           has++;
       }
       arr.push(str)
   }

    return arr;
}

const printHourglass= arr =>{
    return arr.join('\n')

}

let hrglass3 = generateHourglass(3);
console.log(hrglass3);
console.log(typeof hrglass3); // object
console.log(printHourglass(hrglass3));



    