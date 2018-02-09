function generateHourglass (num) {
    let counterNum = 1;
    for(let i = 0; i < num-1; i++) {
        counterNum = counterNum + 2;
    }

    let arrHourGlass = [];

    let counterArrHourGlass = 0;
    while (counterArrHourGlass < counterNum) {
        let hashString = '';
        var depan       = counterArrHourGlass + 1;
        var belakang    = counterNum - 1;
        for(let i = 0; i < counterNum; i++) {
            if(depan && )
            hashString = hashString + '#';
        }
        arrHourGlass.push(hashString);
        counterArrHourGlass = counterArrHourGlass + 1;     
    }
    
    return arrHourGlass;
}

function printHourglass() {

}

let hrglass = generateHourglass(2);
console.log(hrglass);