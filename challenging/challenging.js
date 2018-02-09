function generateParen(num){
    let tempResult = []
    let str = ''
    let leftParen = '('
    let rightParen = ')'
    let leftParenCount = 0
    let rightParenCount = 0
    let braces = '()'

    for (let i = 0; i < num; i++){
        tempResult.push(braces.repeat(i+1))
    }
    
    // console.log(tempResult)
    let processing = []

    for (let i = 0; i <tempResult.length-1; i++){
       processing.push(tempResult[i])
       for (let j = 0; j < processing[i].length; j++){
            if(processing[i][j] == leftParen){
                leftParenCount++
            } else if (processing[i][j] == rightParen){
                rightParenCount++
            }
       }
       switch(leftParenCount){
           case 1: tempResult.unshift('('.repeat(num-leftParenCount) + processing[i] + ')'.repeat(num-rightParenCount)); break;
           case 2: tempResult.unshift('('.repeat(num-leftParenCount) + processing[i] + ')'.repeat(num-rightParenCount)); break;
       }
    }
    console.log(tempResult)
    // console.log(process)
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