function generateHourglass(num) {
    var hourGlassArr=[];
    var str='';
    for(var i=0; i<num; i++) {
        str='';
        for(var j=i; j>0; j--) str+=' ';
        for(var k=((num-i)*2-1); k>0; k--) str+='#';
        hourGlassArr.push(str);
    }
    var reversed=hourGlassArr.slice();
    reversed=reversed.reverse().slice(1);
    hourGlassArr=hourGlassArr.concat(reversed);
    return hourGlassArr;
}

function printHourglass(arr) {
    return arr.join('\n')
}

var hrglass = generateHourglass(5);
console.log(typeof hrglass);
console.log(printHourglass(hrglass));


var hrglass4 = generateHourglass(4);
console.log(printHourglass(hrglass4));