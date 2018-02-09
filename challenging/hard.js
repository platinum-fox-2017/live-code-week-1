function generateParen(number){
  let array = [];
  // ()()()()
  let combination = ''
  for (let i = 0; i < number; i++) {
    combination += '()'
  }
  array.push(combination);
  // (((())))
  let inception = ''
  for (let i = 0; i < number; i++) {
    inception +='('
  }
  for (let i = 0; i < number; i++) {
    inception +=')'
  }
  array.push(inception);
  return console.log(array);
}


generateParen(4)
