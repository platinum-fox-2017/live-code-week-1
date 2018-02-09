
// let hasil = []
// function generateHourglass(num){
//     if(num === 1){
//         hasil.push('x')
//         return generateHourglass(num-1)
//     }else if(num > 1){
//         let pushX  = (num-1) + num
//         let tmp = ""
//         for(let i = 0; i < pushX; i++){
//             tmp+="x"
//         }
//         hasil.push(tmp)
//         return generateHourglass(num-1)
//     }  
// }

function generateHourglass(num){
    let hasil = []
    let count = 0

    for(let i = num; i >= 0; i--){
        let length = (num -1) + num
        let tmp = ""
        let nextLoop = (i - 1)+i

        if(count > 0){
        
            let loopGoUp = (count-1) + count
            for(let k = 0; k < length; k++){
                let left = Math.floor(length/2)
                let gap = length - loopGoUp
                let divide = gap / 2
                let right = (length-1) - divide
    
                if(k < divide){
                        tmp += " "
                }else if(k > right){
                    tmp += " "
                }else{
                    tmp += "x"
                }
            }
            count++
            i++
        }
        
        if(i >= 1 && count === 0){
            for(let j = 0; j < length; j++){
                let left = Math.floor(length/2)
                let gap = length - nextLoop
                let divide = gap / 2
                let right = (length-1) - divide

                if(j < divide){
                    tmp += " "
                }else if(j > right){
                    tmp += " "
                }else{
                    tmp += "x"
                }
            }
        }

        if(i === 0){
            i++
            count+=2
            console.log("masuk")
        }
           
        if(tmp != ""){
            hasil.push(tmp)
        }

        if(count > num){
            i = 0
        }        
    }
    return hasil
}


function printHourglass(num){
    let hasil = ""
    let count = 0

    for(let i = num; i >= 0; i--){
        let length = (num -1) + num
        let tmp = []
        let nextLoop = (i - 1)+i

        if(count > 0){
        
            let loopGoUp = (count-1) + count
            for(let k = 0; k < length; k++){
                let left = Math.floor(length/2)
                let gap = length - loopGoUp
                let divide = gap / 2
                let right = (length-1) - divide
    
                if(k < divide){
                        tmp.push(" ")
                }else if(k > right){
                    tmp.push(" ")
                }else{
                    tmp.push("#")
                }
            }
            count++
            i++
        }
        
        if(i >= 1 && count === 0){
            for(let j = 0; j < length; j++){
                let left = Math.floor(length/2)
                let gap = length - nextLoop
                let divide = gap / 2
                let right = (length-1) - divide

                if(j < divide){
                    tmp.push(" ")
                }else if(j > right){
                    tmp.push(" ")
                }else{
                    tmp.push("#")
                }
            }
        }

        if(i === 0){
            i++
            count+=2
            console.log("masuk")
        }
           
        if(tmp != ""){
            hasil += tmp.join("") + "\n"
        }

        if(count > num){
            i = 0
        }        
    }
    return hasil
}

// console.log(generateHourglass(5))
console.log(printHourglass(5))

console.log("===================================")

// console.log(generateHourglass(4))
console.log(printHourglass(4))

console.log("===================================")

// console.log(generateHourglass(3))
console.log(printHourglass(3))

console.log("===================================")

// console.log(generateHourglass(1))
console.log(printHourglass(1))





