function lubangTerbesar(hole){
    var peta = [];
    for(var i=0; i<hole.length; i++){
        var currHole = hole[i];
        var jalan = [];
        for(var j=0; j<currHole.length; j++){
            jalan.push(currHole[j]);
        }
        peta.push(jalan);
    }
    console.log(peta);

    // checker vertical
    for(var k=0; k<peta.length; k++){
        var row = peta[k];
        var countVertical = 0;
        var count = [];
        for(var l=0; l<row.length; l++){
            if(l === k){
            //     if(row[l] === '0'){
            //         countVertical++;
            //     }
            // console.log(row[k]);
            }
            // count.push(countVertical);
            console.log(peta[k][l]);
        }
        console.log('======');
    }
    // console.log(count);

}
console.log(lubangTerbesar(["00111", "01101", "060100", "11110"])); // 3
// console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
// console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6