function generateParen(num){
    let hasil = []
    let x = 0
    while(x < 100){
        let zero = num
        let one = num
        let combine = []
        let totalValue = 0
        for(let i = 0; i < num*2; i++){
            let randomValue = Math.floor(Math.random() * 2)
            if(i === 0){
                combine.push("(")
                totalValue += 0
                zero--
            }else if(zero === num){
                combine.push("(")
                totalValue+=0
                zero--
            }
            else if(randomValue === 0 && zero <= num && zero > 0){
                combine.push("(")
                totalValue += 0
                zero--
            }else if(randomValue === 1 && zero < one){
                combine.push(')')
                totalValue += 1
                one--
            }
            
            if(i === (num*2) - 1 && totalValue !== num){
                i -=2
            }
        }
        
        // Check jika zero dan one balance
        if(zero === 0 && one === 0 && totalValue === num){
            let combineJoin = combine.join("")
            if(hasil.indexOf(combineJoin) ===-1){
                hasil.push(combineJoin)
            }
            
        }   
        x++
    }

    return hasil
    
}


console.log(generateParen(3))
console.log(generateParen(4))