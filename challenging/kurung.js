"use strict"

function generateParen(num) {
    let arrPosibilities=[]
    let tempPosibilities=[];
    let paren=['(',')'];
    let mid=0;
    for(let i=0; i<num; i++) {
        tempPosibilities.push(paren[0],paren[1]);
        let tempPosibilities2=tempPosibilities.slice();
        for(let j=0; j<num-i-1; j++) {
            tempPosibilities2.push(paren[1])
            tempPosibilities2.splice(0,0,paren[0])
            let tempPosibilities3=tempPosibilities2.slice();
            for(let k=j; k<num-i-2; k++) {
                tempPosibilities3.push(paren[0],paren[1]);
            }
            if (arrPosibilities.indexOf(tempPosibilities3.join(''))===-1) {
                arrPosibilities.push(tempPosibilities3.join(''));
            }
        }
        if (arrPosibilities.indexOf(tempPosibilities2.join(''))===-1) {
            arrPosibilities.push(tempPosibilities2.join(''));
        }
        tempPosibilities2=tempPosibilities.slice();
        for(let j=0; j<num-i-1; j++) {
            tempPosibilities2.splice((i*2),0,paren[0]);
            tempPosibilities2.push(paren[1]);
            let tempPosibilities3=tempPosibilities2.slice();
            for(let k=j; k<num-i-2; k++) {
                tempPosibilities3.push(paren[0],paren[1]);
            }
            if (arrPosibilities.indexOf(tempPosibilities3.join(''))===-1) {
                arrPosibilities.push(tempPosibilities3.join(''));
            }
        }
        // console.log(tempPosibilities2.join(''))
        if (arrPosibilities.indexOf(tempPosibilities2.join(''))===-1) {
            arrPosibilities.push(tempPosibilities2.join(''));
        }
        tempPosibilities2=tempPosibilities.slice();
    }
    return arrPosibilities;
}

console.log(generateParen(4));
console.log(generateParen(3));