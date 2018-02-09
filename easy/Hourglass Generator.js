function generateHourglass(num) {
	let result = [],
		iter = num + 1;

	while(--iter && iter > 1) {
		let space = num - iter,
			temp = '';
			
		temp += generateItem(space, ' ');
		temp += generateItem(iter * 2 - 1, 'x');
		temp += generateItem(space, ' ');

		result.push(temp);
	}

	result.push(generateItem(num - iter, ' ') + generateItem(iter, 'x') + generateItem(num - iter, ' '));
	
	while(iter++ && iter <= num) {
		let space = num - iter,
			temp = '';
			
		temp += generateItem(space, ' ');
		temp += generateItem(iter * 2 - 1, 'x');
		temp += generateItem(space, ' ');

		result.push(temp);
	}

	return result;
}

function printHourglass(arr) {
	var result = ''
	for (var i = 0; i < arr.length; i++) {
		result += arr[i] + '\n';
	}
	return result;
}

function generateItem(num, item) {
	var result = '';
	for (var i = 0; i < num; i++) {
		result += item;
	}
	return result;
}

let hrglass1 = generateHourglass(1);
console.log(hrglass1);
console.log(typeof hrglass1);
console.log(printHourglass(hrglass1));

let hrglass2 = generateHourglass(2);
console.log(hrglass2);
console.log(typeof hrglass2);
console.log(printHourglass(hrglass2));

let hrglass3 = generateHourglass(3);
console.log(hrglass3);
console.log(typeof hrglass3);
console.log(printHourglass(hrglass3));

let hrglass4 = generateHourglass(4);
console.log(hrglass4);
console.log(typeof hrglass4);
console.log(printHourglass(hrglass4));