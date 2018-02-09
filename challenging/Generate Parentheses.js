function generateParen(num) {
	let initParentheses = '',
		parentheses = [];
	for (let i = 0; i < num; i++) initParentheses += '(';
	for (let i = 0; i < num; i++) initParentheses += ')';

	parentheses.push(initParentheses);
	for (var i = 1; i <= num*2; i++) {
		findParenRight(parentheses, initParentheses, i % num);
		findParenLeft(parentheses, initParentheses, i % num);
	}

	console.log(parentheses);

}

function findParenRight(arr, str, index) {
	if (isParen(str, index)) {
		str = str.substr(0, index) + str.substr(index + 1, 1) + str.substr(index, 1) + str.substr(index + 2);
		
		if (isParen(str, index + 1)) {
			if (arr.indexOf(str) == -1) arr.push(str);
			return findParenRight(arr, str, index + 1);
		}
	}
}

function findParenLeft(arr, str, index) {
	if (isParen(str, index)) {
		str = str.substr(0, index) + str.substr(index + 1, 1) + str.substr(index, 1) + str.substr(index + 2);
		
		if (isParen(str, index - 1)) {
			if (arr.indexOf(str) == -1) arr.push(str);
			return findParenLeft(arr, str, index - 1);
		}
	}
}

function isParen(str, index) {
	if (str[index] == '(' && str[index + 1] == ')') return true;
	else return false;
}

generateParen(1);
generateParen(2);
generateParen(3);
generateParen(4);