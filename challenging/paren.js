function generateParen(value){
  let arr = []
  for(let i=0; i<value; i++){
    arr.push('(')
  }
  for(let i=0; i<value; i++){
    arr.push(')')
  }
  console.log(arr.join('').split(',').join(','));

  for(let i=1; i<arr.length; i++){
    if(arr[i] === '(' && arr[i+1] === ')'){
      let temp = arr[i+1]
      arr[i+1] = arr[i]
      arr[i] = temp
      console.log(arr.join('').split(',').join(','));
    }

  }
  for(let i=arr.length-1; i>0; i--){
    if(arr[i] === '(' && arr[i+1] === ')'){
      let temp = arr[i+1]
      arr[i+1] = arr[i]
      arr[i] = temp
      console.log(arr.join('').split(',').join(','));
    }
  }
}

generateParen(3) // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
