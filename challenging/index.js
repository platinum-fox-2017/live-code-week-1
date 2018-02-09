
function generateParen(num){
  var paren  = [] ;
  var parenNum = num * 2;
  var indexDepan = num - 1 ;
  var jumlahParen = parenNum - 1; 
  var indexBelakang = (num - 1) + 1;
  var childParent = [];
  var grantParent = [];
  for(var i = 0; i < parenNum; i++){
    childParent = '|';
    paren.push(childParent);
    
  }

  for(var i = 0; i < jumlahParen; i++){
    for(var j = 0; j < num; j++){
      if(i === 1 && j === 0){
        paren[indexDepan - j] = ')';
        paren[indexBelakang + j] = '(';
       } else {
        if(i % 2 === 0 && i > 0 && j == num - num){
          paren[indexBelakang + j] = ')';
          paren[indexDepan - j] = ')';
        } else if(i % 2 === 0 && i > 0 && j == num - 2){
          paren[indexBelakang + j] = '(';
          paren[indexDepan - j] = '(';
        } else {
          paren[indexDepan - j] = '(';
          paren[indexBelakang + j] = ')';
          
        }
      }
    }
    var parenJoin =paren.join('');
    grantParent.push(parenJoin);
    
  }
  console.log(grantParent);
  
}


generateParen(3) // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
generateParen(4) // [ '(((())))',
