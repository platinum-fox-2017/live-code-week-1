'use strict'

    function generateHourglass(input){
      var ganjil=[];
      var kosong=[];
      var batas=1;
      var pagar=[];
      var gabung='';
      var batasKosong=0;
      for(var k=1;k<=input;k++){
        ganjil.push(batas);
        kosong.push(batasKosong);
        batasKosong++;
        batas=batas+2;
      }
        for(var i=ganjil.length-1;i>=0;i--){

          for(var j=0;j<ganjil[i];j++){
              gabung += '#';
          }
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
    function printHourglass(input){
      var ganjil=[];
      var kosong=[];
      var batas=1;
      var pagar=[];
      var gabung='';
      var batasKosong=0;
      for(var k=1;k<=input;k++){
        ganjil.push(batas);
        kosong.push(batasKosong);
        batasKosong++;
        batas=batas+2;
      }
        for(var i=ganjil.length-1;i>=0;i--){
          for(var j=0;j<ganjil[i];j++){
              gabung += '#';
          }
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

        for(var x=0;x<=pagar.length-1;x++){
          console.log(pagar[x]);
        }
    }

//let hrglass = generateHourglass(5);
//console.log(typeof hrglass);
//console.log(printHourglass(hrglass));
console.log(generateHourglass(5));
console.log(printHourglass(5));
