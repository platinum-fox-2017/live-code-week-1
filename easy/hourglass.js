// function generateHourglass(value){
//   let result = [];
//   for(let i=0; i<=value*2-1; i++){
//     let temp = [];
//     for(let j=0; j<=value*2-1; j++){
//       if(i%2 === 0){
//         temp += '#'
//       }
//       else {
//         if(j%2 === 0){
//           temp += ' '
//         }
//         else{
//           temp += '#'
//         }
//       }
//     }
//     result.push(temp)
//   }
//   return result
// }

function generateHourglass(value){
  let arr = [];
  let arr2 = [];
  let result = []
  let total = value*2-1
  for(let i=0; i<value; i++){
    let temp = ''
    for(let j=total; j>0; j--){
      temp += '#'
    }
    result.push(temp)
    total -= 2
  }
  for(let i=0; i<arr; i++){
    
  }
  return result
}

let hrglass2 = generateHourglass(3);
console.log(hrglass2);
