function lubangTerbesar(arr) {
	let max = 0;
	// return arr[0].match(/[0]/g);
	for (var i = 0; i < arr.length; i++)
		if (arr[i].match(/[0]/g) && max < arr[i].match(/[0]/g).length) max = arr[i].match(/[0]/g).length;

	for (let i = 0; i < arr[0].length; i++) {
		let temp = '';
		for (let j = 0; j < arr.length; j++) {
			temp += arr[j][i];
		}
		// console.log(temp);
		if (temp.match(/[0]/g) && max < temp.match(/[0]/g).length) max = temp.match(/[0]/g).length;
	}

	return max;
}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6