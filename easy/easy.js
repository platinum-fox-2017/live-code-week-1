'use strict'

    function generateHourglass(input){
      var ganjil=[];
      var batas=1;
      var pagar=[];
      for(let i=1;i<input;i++){
        ganjil.push(batas);
        batas=batas+2;
        for(let i=ganjil.length-1;i>0;i--){
          for(let j=0;j<i;j++){
            pagar.push('#');
          }
        }
      }
    return pagar;
    }

let hrglass = generateHourglass(5);
console.log(typeof hrglass);
//console.log(printHourglass(hrglass));
console.log(generateHourglass(5));
