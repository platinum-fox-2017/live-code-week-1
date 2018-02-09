function generateParen(value){
  let arr = []
  for(let i=0; i<value; i++){
    arr.push('(')
    arr.push(')')
  }
  // console.log(arr.join('').split(',').join(','));

  for(let i=0; i<arr.length; i++){
    if(arr[i] === '(' && arr[i+1] === ')'){
      let temp = arr[i+1]
      arr[i+1] = arr[i]
      arr[i] = temp
      console.log(arr.join('').split(',').join(','));
    }
    if(arr[i+1] === '(' && arr[i] === ')'){
      let temp = arr[i+1]
      arr[i+1] = arr[i]
      arr[i] = temp
      console.log(arr.join('').split(',').join(','));
    }
  }
}

generateParen(3) // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
