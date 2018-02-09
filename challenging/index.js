
function generateParen(num){
  var paren  = [] ;
  var parenNum = num * 2;
  var indexDepan = num;
  var indexBelakang = num + 1;
  var childParent = [];
  for(var i = 0; i < parenNum; i++){
    childParent = '|';
    paren.push(childParent);
    
  }
  console.log(paren);
  
}


generateParen(3) // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
generateParen(4) // [ '(((())))',
