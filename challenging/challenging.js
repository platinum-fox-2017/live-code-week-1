function generateParen(num){
    let result = [];
    let braces = '()'
    
    for(i = 0; i < num; i++){
        result.push(braces)
    }
    result.push(braces.repeat(num-1))    
    result.push(braces.repeat(num))
    console.log(result)

    // console.log(result)
}

generateParen(3) // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
generateParen(4) // 
/*
[ '(((())))',
  '((()()))',
  '((())())',
  '((()))()',
  '(()(()))',
  '(()()())',
  '(()())()',
  '(())(())',
  '(())()()',
  '()((()))',
  '()(()())',
  '()(())()',
  '()()(())',
  '()()()()' ]
  */
























