
function printHourglass(num){

  for(let i=num;i>0;i--){
    var kosong=' ',pagaratas='#'
    for(let j=(num*2)-1;j>i;j--){
      pagaratas=pagaratas+'#'
    }
    console.log(pagaratas)
  }

  // console.log(pagarbawah)
}
console.log(typeof hrglass5);  // object
console.log(printHourglass(3));
/*
#####
 ###
  #
 ###
#####
*/
