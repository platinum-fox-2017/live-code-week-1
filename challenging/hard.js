function generateParen(num){
  let result = []
  let left = '('
  let right = ')'
  let count = 0

  while(count <= num )
  for(let i = 0; i < num ; i++){
    let temp =''
    for(let j = 0 ; j < num ; j++){
      temp += left
      temp += right
    }
    result.push(temp)
    count++
  }
 console.log(result)

}

generateParen(3) // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
generateParen(4)
// [ '(((())))',
 // '((()()))',
 // '((())())',
 // '((()))()',
 // '(()(()))',
 // '(()()())',
 // '(()())()',
 // '(())(())',
 // '(())()()',
 // '()((()))',
 // '()(()())',
 // '()(())()',
 // '()()(())',
 // '()()()()' ]
