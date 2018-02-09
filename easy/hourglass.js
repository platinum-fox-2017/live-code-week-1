function generateHourglass(num){
    var bigwrap = [];
    for(var x=num; x>=0; x--){
        var wrap = '';
        for(var i=0; i<x+1; i++){
            wrap += '#';
        }
        // console.log(wrap);
        bigwrap.push(wrap);
    }
    return bigwrap;
}
function printHourglass(generateHourglass){

}

let hrglass = generateHourglass(2);
console.log(typeof hrglass);
console.log(hrglass);
// console.log(printHourglass(hrglass2));