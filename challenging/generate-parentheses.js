function generateParentheses(num){
    let result = [];
    for(let i=0; i<num; i++){
        if(i==0){
            result.push('(');
        }else{
            if(result[i-1]=='('){
                result.push(')')
            }else if(result[i-1]==')'){
                result.push('())')
            }
        }
    }
    return result.join('');
}
generateParen(3);