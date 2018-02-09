function generateParen(num) {
    if (num === 0) { 
        return [''];
    }
    let result = [];
    for (let i = 0; i < num; ++i) {
        let lefts = generateParen(i);
        let rights = generateParen(num - i - 1);
        // console.log(lefts, rights)
        for (let l = 0; l < lefts.length; l++)
            for (let r = 0; r < rights.length; r++)
                result.push('(' + lefts[l] + ')' + rights[r]); //generate '()' if num == = 1
    }
    return result;
}

console.log(generateParen(3))
console.log(generateParen(4))