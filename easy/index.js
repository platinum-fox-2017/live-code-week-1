
function generateHourglass(num){
   var arrayHourGlass = [];
   var isiHourGlass = '';
   var jumlahPagarTerbesar = (num - 1)
   jumlahPagarTerbesar = jumlahPagarTerbesar + num;
   for(var i = 0; i < jumlahPagarTerbesar; i++){
     
     isiHourGlass += '#';
   }

   var indexDepan = -1 ;
   var indexBelakang = isiHourGlass.length;
   var isiHourGlass = isiHourGlass.split();
   var indexDepanTerbaru = 0 ;
   var indexTerakhirTerbaru = 0;
   for(var i = 1 ; i <= num; i++){
    var joinIsiHourGlass = isiHourGlass.join(''); 
    arrayHourGlass.push(joinIsiHourGlass);
    isiHourGlass = joinIsiHourGlass.split('');
    isiHourGlass[indexDepan + i] = ' ';
    isiHourGlass[indexBelakang - i ] = ' ';
    indexDepanTerbaru = indexDepan + i;
    indexTerakhirTerbaru = indexBelakang - i;
   }
    indexDepan = indexDepanTerbaru;
    indexBelakang = indexTerakhirTerbaru;
    isiHourGlass[num] = '#'
    console.log(isiHourGlass);
   for(var i = 0 ; i < num; i++){
     
    isiHourGlass[indexDepan - i] = '#';
    isiHourGlass[indexBelakang + i ] = '#';
    var joinIsiHourGlass = isiHourGlass.join(''); 
    if(i === 0){
      
    } else {
      
      arrayHourGlass.push(joinIsiHourGlass);
    }
    isiHourGlass = joinIsiHourGlass.split('');
   }


   return arrayHourGlass;
}

function printHourglass(hourGlass){
  return hourGlass.join('\n');
}


let hrglass = generateHourglass(5);
console.log(typeof hrglass);
console.log(hrglass);
console.log(printHourglass(hrglass));
