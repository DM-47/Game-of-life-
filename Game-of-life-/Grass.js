let LivingCreature = require('./LivingCreature')

module.exports = class Grass extends LivingCreature {
	constructor(x,y){
	super(x,y)
        this.multiply = 10
        
		
        
	}

	

	mul(){
        this.multiply++

        let arr = this.chooseCell(0) 
        let emptyCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
		if(this.multiply >= 4 && emptyCell){

            let x = emptyCell[0]
            let y = emptyCell[1]
            matrix[y][x] = 1
            var gr = new Grass(x,y)
            grassArr.push(gr)
            everything.push(gr)
            this.multiply = 0 
            
		}
	}
}
