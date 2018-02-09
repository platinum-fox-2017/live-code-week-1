"use strict"

function generateParen(num) {
    let arrPosibilities=[]
    let tempPosibilities='';
    let paren=['(',')']
    for(let i=0; i<num; i++) {
        let mid=(tempPosibilities.length-1)/2
        tempPosibilities.splice(mid,0,paren)
    }
    arrPosibilities.push(tempPosibilities);
    return arrPosibilities;
}

console.log(generateParen(4));