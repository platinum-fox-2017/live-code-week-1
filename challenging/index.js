function generateParen(num){
  var simpanstr='',simpanstr2='',simpanstr3='',simpanstr4='',arrsimpan=[]
  for(let i=1;i<=num;i++){
      simpanstr='('+simpanstr+')'
      if(i>2){
        simpanstr2='('+simpanstr2+')'
      }else{
        simpanstr2=simpanstr2+'()'
      }

      if(i%2==0){
        simpanstr3='('+simpanstr3+')'
      }else{
        simpanstr3=simpanstr3+'()'
      }

      if(i%2===0){
        simpanstr4='(()'+simpanstr4+')'
      }else{
        simpanstr4=simpanstr4+'()'
      }
  }
  arrsimpan.push(simpanstr)
  arrsimpan.push(simpanstr2)
  arrsimpan.push(simpanstr3)
  arrsimpan.push(simpanstr4)



  console.log(arrsimpan)
}
generateParen(3)
