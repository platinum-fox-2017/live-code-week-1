function lubangTerbesar(arr) {
	let max = 0;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			if (isLubang(arr[i][j])) {
				if (max < hitungLubang(arr[i], j)) {
					max = hitungLubang(arr[i], j);
				}
			}
		}
	}

	for (let i = 0; i < arr[0].length; i++) {
		let temp = '';
		for (let j = 0; j < arr.length; j++) {
			temp += arr[j][i];
		}

		for (let j = 0; j < temp.length; j++) {
			if (isLubang(temp[j])) {
				if (max < hitungLubang(temp, j)) {
					max = hitungLubang(temp, j);
				}
			}
		}
	}
	return max;
}

function hitungLubang(str, index) {
	if (!isLubang(str[index])) return 0;
	else return 1 + hitungLubang(str, index+1);
}

function isLubang(str) {
	if (str == 0) return true;
	else return false;
}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6