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
      if(num[j][i]==='0'){
        vertical++
      }
    }
    arrvertical.push(vertical)
  }

	for (var i = 0; i < arrhorizontal.length - 1; i++) {
		var min = i;
		for (var j = i + 1; j < arrhorizontal.length; j++) {
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

  for (var i = 0; i < arrvertical.length - 1; i++) {
		var min = i;
		for (var j = i + 1; j < arrvertical.length; j++) {
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
    console.log(arrhorizontal[0])
  }else{
    console.log(arrvertical[0])
  }

}

console.log(lubangTerbesar(["00111", "01101", "00100", "11110"]))
