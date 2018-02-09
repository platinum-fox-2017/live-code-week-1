function generateHourglass (num) {
    let counterNum = 1;
    for(let i = 0; i < num-1; i++) {
        counterNum = counterNum + 2;
    }

    var arrHourGlass = [];
    var depan = 0;
    var belakang = counterNum - 1;
    for(var i = 0; i < counterNum; i++) {
        var hash = '';
        if(i == 0 || i == counterNum-1) {
            for (var j = 0; j < counterNum; j++) {
                hash = hash + '*';
            }
            arrHourGlass.push(hash)
        } else if (i == depan || i == belakang) {
            for (var j = 0; j < counterNum; j++) {
                if(j < depan || j > belakang)
                    hash = hash + ' ';
                else {
                    hash = hash + '*';
                }
            }
            arrHourGlass.push(hash)
        }
        depan = depan + 1;
        belakang = belakang - 1;
    }

    var indexTengah = (Math.floor(arrHourGlass.length / 2));
    
    var counterTengah = indexTengah-1;
    for (let i = indexTengah+1; i < arrHourGlass.length; i ++) {
        arrHourGlass[i] = arrHourGlass[counterTengah];
        counterTengah = counterTengah - 1;
    }

    return arrHourGlass;
}


function printHourglass(arrHourGlass) {
    for(let i = 0; i < arrHourGlass.length; i++) {
        console.log(arrHourGlass[i]);
        console.log(" ");
        
    }
}

let hrglass = generateHourglass(7);
console.log(hrglass);
console.log(typeof hrglass);
printHourglass(hrglass);