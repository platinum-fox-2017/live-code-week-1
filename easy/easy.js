
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
            container.push('######')
            container.unshift('######')
        }
        if(i === 4){
            container.push('########')
            container.unshift('########')
        }
    }
    return (container);
}
console.log(generateHourglass(1));
console.log(generateHourglass(2));
console.log(generateHourglass(3));
console.log(generateHourglass(4));
console.log(generateHourglass(5));

let hrglass1 = generateHourglass(1);
let hrglass2 = generateHourglass(2);
let hrglass3 = generateHourglass(3);
let hrglass4 = generateHourglass(4);
let hrglass5 = generateHourglass(5);



let printHourglass = (input) => {

}

console.log(printHourglass(hrglass1));
console.log(printHourglass(hrglass1));
console.log(printHourglass(hrglass1));
console.log(printHourglass(hrglass1));
console.log(printHourglass(hrglass1));

// console.log(typeof hrglass);
// console.log(printHourglass(hrglass));