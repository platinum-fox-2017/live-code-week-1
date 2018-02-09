function lubangTerbesar(num){
  var arrhorizontal=[],arrvertical=[]
  for(let i=0;i<num.length;i++){
    var simpan='',horizontal=0
    for(let j=0;j<num[i].length;j++){
      if(num[i][j]==='0' && num[i][j+1]==='0'){
        horizontal++
      }else{
        if(horizontal>1){
          arrhorizontal.push(horizontal)
          horizontal=0
        }
      }
    }
    arrhorizontal.push(horizontal+1)
  }

  for(let i=0;i<num.length;i++){
    var simpan='',vertical=0
    for(let j=0;j<num.length;j++){
      if(num.length-1===j){
        if(num[j][i]==='0'){
          vertical++
        }
        else{
          if(vertical>1){
            arrvertical.push(vertical)
            vertical=0
          }
        }
      }else{
        if(num[j][i]==='0' && num[j+1][i]==='0'){
          vertical++
        }
        else{
          if(vertical>1){
            arrvertical.push(vertical+1)
            vertical=0
          }
        }
      }

    }
    if(vertical<num.length){
      arrvertical.push(vertical+1)
    }else{
      arrvertical.push(vertical)
    }
  }
	for (let i = 0; i < arrhorizontal.length - 1; i++) {
		var min = i;
		for (let j = i + 1; j < arrhorizontal.length; j++) {
			if (arrhorizontal[j] > arrhorizontal[min]) {
				min = j;
			}
		}
		if (min != i) {
			var tmp = arrhorizontal[i];
			arrhorizontal[i] = arrhorizontal[min];
			arrhorizontal[min] = tmp;
		}
	}

  for (let i = 0; i < arrvertical.length - 1; i++) {
		var min = i;
		for (let j = i + 1; j < arrvertical.length; j++) {
			if (arrvertical[j] > arrvertical[min]) {
				min = j;
			}
		}
		if (min != i) {
			var tmp = arrvertical[i];
			arrvertical[i] = arrvertical[min];
			arrvertical[min] = tmp;
		}
	}

  if(arrhorizontal[0]>arrvertical[0]){
    return arrhorizontal[0]
  }else{
    return arrvertical[0]
  }

}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"]))
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6
