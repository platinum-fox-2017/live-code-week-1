'use strict'

    function generateHourglass(input){
      var ganjil=[];
      var batas=1;
      var pagar=[];
      var gabung='';
      for(var k=1;k<=input;k++){
        ganjil.push(batas);
        batas=batas+2;
      }
        for(var i=ganjil.length-1;i>=0;i--){
          for(var j=0;j<ganjil[i];j++){
              gabung += '#';
           //console.log(ganjil[i])
          }
          //console.log(gabung);
          pagar.push(gabung);
           gabung='';
        }

          for(var i=1;i<=ganjil.length-1;i++){
              for(var j=0;j<ganjil[i];j++){
                gabung += '#';
             //console.log(ganjil[i])
            }
            //console.log(gabung);
            pagar.push(gabung);
             gabung='';
          }

   return pagar;
    }

let hrglass = generateHourglass(5);
//console.log(typeof hrglass);
//console.log(printHourglass(hrglass));
console.log(generateHourglass(5));
