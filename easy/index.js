
function generateHourglass(num){
  var simpan=[]
  for(let i=num;i>0;i--){
    var kosong=' ',pagaratas='#',pagarbawah='#'
    for(var j=i*2-1;j>1;j--){
      pagaratas=pagaratas+'#'
    }
    for(var j=i;j<num;j++){
      kosong=kosong+' '
    }
    simpan.push(kosong+pagaratas)
  }

  for(let i=1;i<num;i++){
    var kosong=' ',pagarbawah='#'
    for(var j=i*2;j>0;j--){
      if(i!=num){
        pagarbawah=pagarbawah+'#'
      }
    }
    for(var j=i+1;j<num;j++){
      kosong=kosong+' '
    }
    simpan.push(kosong+pagarbawah)
  }

  return simpan

}


function printHourglass(obj){
  for(let i=0;i<obj.length;i++){
    console.log(obj[i])
  }
  return ''
}
let hrglass3 = generateHourglass(5);
console.log(hrglass3);

console.log(typeof hrglass3);  // object
console.log(printHourglass(hrglass3));
/*
#####
 ###
  #
 ###
#####
*/
