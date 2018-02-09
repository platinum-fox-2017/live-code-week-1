class cariNafkahPemerintah{
    constructor(){
        this.map = []
        this.hole = []
    }

    printHole(input){
        let length = input.length
        for(let i = 0; i < length;i++){
            let tmp = []
            for(let j = 0; j < input[i].length; j++){
                tmp.push(input[i][j])
            }
            this.map.push(tmp)
        }
        console.log(this.map)
        this.findBigHole()
        
        let hasil = this.findBiggest()
        
        return hasil
    }

    findBigHole(){
        for(let i = 0; i < this.map.length; i++){
            for(let j = 0; j < this.map[i].length;j++){
                if(this.map[i][j] === '0'){
                    this.checkLengthHole(i,j)
                }
            }
        }
    }

    findBiggest(){
        let count = this.hole[0]
        for(let i = 0; i < this.hole.length; i++){
            if(count < this.hole[i]){
                count = this.hole[i]
            }
        }

        return count
    }

    checkLengthHole(sumbuX,sumbuY){
        
        for(let i = 0; i < 4; i++){
            let xCordinat = sumbuX
            let yCordinat = sumbuY
            let count = 1
            // i ke - 0 bergerak ke kanan = xCordinat stay yCordinat ++
            if(i === 0){
                
                
                while(this.map[xCordinat][yCordinat] === '0'){
                
                    if(yCordinat < this.map[xCordinat].length - 1){
                    yCordinat++
                        if(this.map[xCordinat][yCordinat] === '0'){
                            count++
                        }
                    }else{
                        break;
                    }   
                }
            // i ke - 1 bergerak ke kiri = xCordinat stay yCordinat --
            }else if(i === 1){
                while(this.map[xCordinat][yCordinat] === '0'){
                    if(yCordinat > 0){
                        yCordinat--

                        if(this.map[xCordinat][yCordinat] === '0'){
                            count++
                        }
                    }else{
                        break;
                    }
                    
                }
            // i ke - 2 bergerak ke bawah = xCordinat ++ yCordinat stay
            }else if( i === 2){
                while(this.map[xCordinat][yCordinat] === '0'){

                    if(xCordinat > this.map.length - 1){
                    xCordinat++
                        if(this.map[xCordinat][yCordinat] === '0'){
                            count++
                        }
                    }else{
                        break;
                    }
                    
                }
            // i ke - 2 bergerak ke atas = xCordinat -- yCordinat stay
            }else if(i === 3){

                while(this.map[xCordinat][yCordinat] === '0'){
                    if(xCordinat > 0){
                        xCordinat--

                        if(this.map[xCordinat][yCordinat] === '0'){
                            count++
                        }
                    }  else{
                        break;
                    }                  
                }
            }

            if(count > 1){
                this.hole.push(count)
            }
        }
    }
}

let liveCode1 = new cariNafkahPemerintah()
let liveCode2 = new cariNafkahPemerintah()
let liveCode3 = new cariNafkahPemerintah()


console.log(liveCode1.printHole(["00111", "01101", "00100", "11110"])); // 3
console.log(liveCode2.printHole(["111", "111", "111", "100"])); // 2
console.log(liveCode3.printHole(["00111", "10011", "00111", "10010","00110",'10111'])); // 6