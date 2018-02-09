function generateHourglass(num) {
	let result = [],
		iter = num + 1,
		index = 0;

	// for (var i = 0; i < num; i++) {
	// 	for (var j = i * 2 - 1; j >= 0; j--) {
	// 		Things[i]
	// 	}
	// }

	while(--iter && iter > 1) {
		let space = ((num + 1) * 2 - 1) - (iter * 2 - 1) / 2,
			temp = '';

		temp += generateItem(space, ' ');
		temp += generateItem(iter * 2 - 1, 'x');
		temp += generateItem(space, ' ');

		result.push(temp);
		index += 2;
	}
	result.push(generateX(iter));
	while(iter++ && iter <= num) result.push(generateX(iter * 2 - 1));

	return result;
}

function printHourglass(argument) {
	// body...
}

function generateItem(num, item) {
	var result = '';
	for (var i = 0; i < num; i++) {
		result += item;
	}
	return result;
}

let hrglass1 = generateHourglass(4);