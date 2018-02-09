function generateParen(num){
	const parentheses = '()'
	let array =[]
	for(let i =0;i<num;i++){
		let inside = []
		for(let j=0;j<num;j++){
			let random = Math.floor(Math.random()*num)
			inside.push(parentheses)
		}
			array.push(inside.join(''))

	}
	console.log(array)
}




// Contoh:
// javascript
generateParen(3) // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
// generateParen(4) // [ '(((())))',
//   '((()()))',
//   '((())())',
//   '((()))()',
//   '(()(()))',
//   '(()()())',
//   '(()())()',
//   '(())(())',
//   '(())()()',
//   '()((()))',
//   '()(()())',
//   '()(())()',
//   '()()(())',
//   '()()()()' ]