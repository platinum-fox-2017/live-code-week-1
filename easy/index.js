function generateHourglass(num) {

    let arrRes = []
    for (let i = 0; i < num; i++) {
    let temporary = []
      for (let j = 0; j < num; j++) {
          if(i === num-1) {
              temporary.push('-')
          } else {
              temporary.push('#')
          }
          
      }
      arrRes.push(temporary)
    }
    console.log(arrRes)

    /*-----------*/
    

    for (var i = 1; i <= num; i++) {
        var arr = [];
        for(var k = 0; k < i; k++){
            arr.push(' ');
        }
        for (var j = num ; j >= i; j--) {
            arr.push('# ');
        }
        console.log(arr.join(''));
    }

    for (let i = 1; i <= num; i++) {
        var arr = [];
        for (var k = num -1; k >= i; k--) {
            arr.push(' ');
        }
        for (var j = 1; j <= i; j++) {
            arr.push('# ');
        }
        console.log(arr.join(''));
    }

    // return arr

 
}

let hrglass1 = generateHourglass(2);
console.log(hrglass1);

// console.log(typeof hrglass1); // object
// console.log(printHourglass(hrglass1));
