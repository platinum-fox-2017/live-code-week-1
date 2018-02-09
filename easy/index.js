function generateHourglass(num) {
    // let arr = []
    // for (let i = 0; i <= num; i++) {
    //     let temp = []

    //     for (let j = 0; j <= num; j++) {
    //         if(i === num - 1) {
    //             for (let i = 0; i < num-1; i++) {
    //                 temp.push(' ')
    //             }
    //         } else {
    //             temp.push('#') 
    //         }
            
    //     }

    //     arr.push(temp)
    // }    
    // console.log(arr)

    // for (var i = 1; i <= num; i++) {
    //     var arr = [];
    //     for(var k = 0; k < i; k++){
    //         arr.push(' ');
    //     }
    //     for (var j = num ; j >= i; j--) {
    //         arr.push('# ');
    //     }
    //     // arr.push('#')
    //     console.log(arr.join(''));
    // }

    for (let i = 0; i < num; i++) {
        var arr = [];
        for(let j = 0; j < num; j++) {
            arr.push('#')
        }
        console.log(arr.join(''))
    }

    


    
}




let hrglass1 = generateHourglass(5);
console.log(hrglass1);
