

function lubangTerbesar(jalan){
   
    var jumlahLubangBerpasanganHorizontal  = 0
    var jumlahLubangBerpasanganVertikal  = 0
    var lubangHorizontal = []
    var lubangVertikal = []
    //lubang horizontal
    for(var i = 0; i < jalan.length; i++){
      for(var j = 0; j < jalan[i].length; j++){
        if(jalan[i][j] == '0'){
          jumlahLubangBerpasanganHorizontal++;
        }  
        if(jalan[i][j] == '1'){
          if(jumlahLubangBerpasanganHorizontal != 0){
            lubangHorizontal.push(jumlahLubangBerpasanganHorizontal);
            jumlahLubangBerpasanganHorizontal = 0;
          }
        }
      }  
      if(jumlahLubangBerpasanganHorizontal != 0){
        lubangHorizontal.push(jumlahLubangBerpasanganHorizontal);
        jumlahLubangBerpasanganHorizontal = 0;
      }
    }
    var jalanVertikal = [];
    var jumlahPerbarisJalan = jalan[0].length;
    var totalJumlahBarisJalan = jalan.length;
    var jalanPekolomVertikal = '';
    var kolomKe = 0;
    var barisKe = 0;
    for(var i = 0; i < jumlahPerbarisJalan; i++){
      for(var j = 0; j < totalJumlahBarisJalan ; j++){
         jalanPekolomVertikal += jalan[j][i]; 

      }
      jalanVertikal.push(jalanPekolomVertikal);
      jalanPekolomVertikal = '';
    }
    //lubang vertical
    for(var i = 0; i < jalanVertikal.length; i++){
      for(var j = 0; j < jalanVertikal[i].length; j++){
        if(jalanVertikal[i][j] == '0'){
          jumlahLubangBerpasanganVertikal++;
        }  
        if(jalanVertikal[i][j] == '1'){
          if(jumlahLubangBerpasanganVertikal != 0){
            lubangVertikal.push(jumlahLubangBerpasanganVertikal);
            jumlahLubangBerpasanganVertikal = 0;
          }
        }
      }  
      if(jumlahLubangBerpasanganVertikal != 0){
        lubangVertikal.push(jumlahLubangBerpasanganVertikal);
        jumlahLubangBerpasanganVertikal = 0;
      }
    }
    var lubangTerbesar = 0;
    for(var i = 0; i < lubangVertikal.length; i++){
      if(lubangTerbesar < lubangVertikal[i]){
        lubangTerbesar = lubangVertikal[i];  
      }  
    }
    for(var i = 0; i < lubangHorizontal.length; i++){
      if(lubangTerbesar < lubangHorizontal[i]){
        lubangTerbesar = lubangHorizontal[i];  
      }  
    }
    return lubangTerbesar
}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6
