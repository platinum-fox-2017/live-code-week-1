function generateParen(number){
  if (number === 0){
    return '';
  }
  let lefts = []
  let rights = []
  let result= []
  for (let i = 1; i <= number; i++) {
    var left = ''
    var right = ''
    // console.log(left);

    for (let k = 0; k < number; k++) {
      left += '('
    }
    // left.length = 3
    for (let j = 0; j < number; j++) {
      right += ')'
    }

    lefts.push(left);
    rights.push(right);
  }

  // let rights = []
  // for (let i = 0; i < number; i++) {
  //   var right = ''
  //   // console.log(left);
  //
  //   for (let k = 0; k < number-i; k++) {
  //     right += ')'
  //   }
  //   rights.push(right);
  // }

  // let result = [];
  // for (let i = 0; i < number; i++) {
  //   let combine = lefts[i];
  //   for (let k = 0; k < number; k++) {
  //     combine += rights[k]
  //     if (combine.length === (number*2)) {
  //       break;
  //     }
  //   }
  //
  //   result.push(combine)
  // }

  return console.log(lefts, rights, result)
}


generateParen(3)

// 3
//  (, (, ( and reverse
//  ((, ( and ), ))
  // (( + )) + ( + )
  // ( + ) + (( + ))
  // (( + ) + ( + ))
