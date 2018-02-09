const generateParen = num =>{
    let arr = []
    let str = ''
    for(let i = 0; i< num; i++){
        str += '()'
        // arr.push('(')
        // arr.push(')')
    }
    arr.push(str)
    console.log(arr)
}

generateParen(3)