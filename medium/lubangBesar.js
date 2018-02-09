"use strict"

function lubangTerbesar(arr) {
    let max=0;
    let horizontalArr=arr.slice()
    horizontalArr=horizontalArr.map(a=>a.split('1'))
    for(let i in horizontalArr) {
        for(let j in horizontalArr[i]) {
            let length=horizontalArr[i][j].length;
            if(length>max) max=length
        }
    }
    for(let i in arr[0]) {
        let tempMax=0;
        for(let j in arr) {
            if(arr[j][i]==='0') tempMax++;
            else {
                if(tempMax>max) max=tempMax;
                tempMax=0;        
            }
        }
        if(tempMax>max) max=tempMax;
    }
    // console.log(arr,horizontalArr)
    return max;
}

function draw(arr) {
    return arr.join("\n");
}

console.log(lubangTerbesar(["01000", "01101", "00100", "11110"])); // 3
console.log(lubangTerbesar(["111", "111", "111", "100"])); // 2
console.log(lubangTerbesar(["00111", "10011", "00111", "10010","00110",'10111'])); // 6

console.log(lubangTerbesar(['01001','1111','1111']))

console.log(draw(["01000", "01101", "00100", "11110"])); // 3
console.log(draw(["111", "111", "111", "100"])); // 2
console.log(draw(["00111", "10011", "00111", "10010","00110",'10111'])); // 6