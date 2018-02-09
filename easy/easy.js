
// let hrglass = generateHourglass(number);


let generateHourglass = (number) => {
    let container =[];
    let string ='#'
    for(let i=0; i<number; i++){
        if(i === 0){
            container.push('#')
        }
        if(i === 1){
            container.push('###')
            container.unshift('###')
        }
        if(i === 2){
            container.push('#####')
            container.unshift('#####')
        }
        if(i === 3){
            container.push('#######')
            container.unshift('#######')
        }
        if(i === 4){
            container.push('#########')
            container.unshift('#########')
        }
    }
    return (container);
}
// console.log(generateHourglass(1));
// console.log(generateHourglass(2));
// console.log(generateHourglass(3));
// console.log(generateHourglass(4));
// console.log(generateHourglass(5));

let hrglass1 = generateHourglass(1);
let hrglass2 = generateHourglass(2);
let hrglass3 = generateHourglass(3);
let hrglass4 = generateHourglass(4);
let hrglass5 = generateHourglass(5);



let printHourglass = (input) => {

    for(let i=0; i<input.length; i++){
        if(input.length === 9 || input.length === 1){
            if(i === 0|| i === 8){
                console.log(input[i]);
            }
            if(i === 1 || i === 7){
                console.log(' '+input[i]);
            }
            if(i === 2 || i === 6){
                console.log('  '+input[i]);
            }
            if(i === 3 || i === 5){
                console.log('   '+input[i]);
            }
            if(i === 4 || i ===  4){
                console.log('    '+input[i]);
            }
        }
        if(input.length === 3){
            if(i === 0|| i === 2){
                console.log(input[i]);
            }
            if(i === 1){
                console.log(' '+input[i]);
            }
        }
        if(input.length === 5){
            if(i === 0|| i === 4){
                console.log(input[i]);
            }
            if(i === 1 || i === 3){
                console.log(' '+input[i]);
            }
            if(i === 2){
                console.log('  '+input[i]);
            }
        }
        if(input.length === 7){
            if(i === 0|| i === 6){
                console.log(input[i]);
            }
            if(i === 1 || i === 5){
                console.log(' '+input[i]);
            }
            if(i === 2 || i === 4){
                console.log('  '+input[i]);
            }
            if(i === 3){
                console.log('   '+input[i]);
            }
        }
    }
    return '';
}
console.log(printHourglass(hrglass1));
console.log(printHourglass(hrglass2));
console.log(printHourglass(hrglass3));
console.log(printHourglass(hrglass4));
console.log(printHourglass(hrglass5));

// console.log(typeof hrglass);
// console.log(printHourglass(hrglass));