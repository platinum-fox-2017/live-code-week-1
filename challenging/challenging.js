function generateParen(num){;
  var arrTemp = new Array();
  printParen(num,0,0,"",arrTemp);
  return arrTemp;
}

function printParen(num, openCount, closeCount, str,arr){
  if(closeCount==num){
    arr.push(str);
  }

  if(closeCount<openCount){
    printParen(num,openCount,closeCount+1,str+")",arr);
  }

  if(openCount<num){
    printParen(num,openCount+1,closeCount,str+"(",arr);
  }

}

console.log(generateParen(4));
console.log(generateParen(3));
