function generateHourglass(value){
  let result = []
  let total = value*2-1
  for(let i=0; i<value; i++){
    let temp = ''
    for(let j=total; j>0; j--){
      temp += '#'
    }
    result.push(temp)
    total -= value-1
  }
  for(let i=1; i<value; i++){
    total += value+1
    let temp = ''
    for(let j=0; j<total; j++){
      temp += '#'
    }
    result.push(temp)
  }
  return result
}

function printHourglass(arr){
  for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
  }
}

let hrglass3 = generateHourglass(3);
console.log(hrglass3);
console.log(typeof hrglass3); // object
printHourglass(hrglass3);
