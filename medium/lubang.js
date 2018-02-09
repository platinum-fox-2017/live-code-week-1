function lubangTerbesar(input){
	let array = []
	// console.log(input.length)
	for(let i =0;i<input.length;i++){
		let inside = []
		for(let j =0;j<input[i].length;j++){
			inside.push(input[i][j])
		}
		array.push(inside)
	}
	// console.log(array)
	let posisi0 =[]
	for(let i =0;i<array.length;i++){
		for(let j=0;j<array[i].length;j++){
			if(array[i][j] == 0){
				posisi0.push([i,j])
			}
		}
	}
	// console.log(posisi0)
	let count0Vert = 0
	let count0Hor = 0
	for(let i =0;i<posisi0.length;i++){
		// console.log(posisi0[i])
		for(let j =0;j<posisi0[i].length;j++){
			// console.log(i,posisi0[i][0])
			console.log('i',i,'posisi',posisi0[i][j])
			if(i === posisi0[i][1] && i == j){
				count0Vert+=1
			}
			
		}
	}
	console.log(count0Vert)
	if(count0Vert>count0Hor){
		return count0Vert
	}else{
		return count0Hor
	}

}






// Gunakan driver code di bawah ini :

// javascript
console.log(lubangTerbesar(["00111", "01101", "00100", "11110"])); // 3
// console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
// console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6