let LivingCreature = require('./LivingCreature')
module.exports = class GrassEater extends LivingCreature { 	
	constructor(x,y){
		super(x,y)
        this.energy = 5
	
	}
	
    updateDirection(){
        this.directions = [
			[this.x - 1, this.y - 1],
			[this.x    , this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x - 1, this.y    ],
			[this.x + 1, this.y    ],
			[this.x - 1, this.y + 1],
			[this.x    , this.y + 1],
			[this.x + 1, this.y + 1]
        ];	
        
        }

        chooseCell(ch){
			this.updateDirection()
			var found = []
			for (var i in this.directions) {
	
				var x = this.directions[i][0]
				var y = this.directions[i][1]
	
				if (x >= 0 && y >= 0 && x <= matrix.length - 1 && y <= matrix.length - 1 && matrix[y][x] == ch) {
					found.push(this.directions[i])
				}
	
			}	 
			return found
		}
    
	mult(){
		
		let everything = []
		var a = this.chooseCell(0)
		var b = this.chooseCell(1)
		var newXY = a[Math.floor(Math.random() * a.length)]
		var rand = b[Math.floor(Math.random() * b.length)]
        if(this.energy >=50 && newXY){
            let x = newXY[0]
            let y = newXY[1]
            matrix[y][x] = 2
            var grEater = new GrassEater(x,y)
            everything.push(grEater)
            eater.push(grEater)
            this.energy -= 20
        }else if(this.energy >= 50 && rand){
        	let x = rand[0]
            let y = rand[1]
            matrix[y][x] = 2
            var grEater = new GrassEater(x,y)
            everything.push(grEater)
            eater.push(grEater)
            this.energy -= 20
        }
           
    }
    eat(){

		var a = this.chooseCell(1)

		var newXY = a[Math.floor(Math.random() * a.length)]

		let x = newXY[0]
		let y = newXY[1]
		
		matrix[y][x] = 2

		matrix[this.y][this.x] = 0

		this.energy +=  5 

		for (var i in grassArr) {
    		if (x == grassArr[i].x && y == grassArr[i].y) {
        		grassArr.splice(i, 1);
    
    		}
		}
		this.x = x
		this.y = y

    }

	move(){

		if(this.energy >= 25){
			this.mult()
		}


		let arr = this.chooseCell(1)

		if(arr.length > 0){
			this.eat()
		}else if(arr.length <= 0){
			let arr1 = this.chooseCell(0)
			let emptyCell = arr1[Math.floor(Math.random() * arr1.length)]
	
			if(this.energy > 0 && emptyCell){
				let x = emptyCell[0]
				let y = emptyCell[1]
				matrix[y][x] = 2
				matrix[this.y][this.x] = 0
				this.x = x
				this.y = y
				this.energy -= 1/2
			}
	
		}
	

		let eater2 = []

		if(this.energy <= 0){
			this.die()
			if(eater.length >= 10){
				let rand = matrix[Math.floor(Math.random() * matrix.length-1)]
				var eat3 = new EaterEater(rand,rand)
				eater2.push(eat3)
			}
		}

	}

	die(){
		for( let i in eater){
			if(this.x == eater[i].x && this.y == eater[i].y){
				eater.splice(i,1)
			}
		}
		let y = this.y
		let x = this.x
		matrix[y][x] = 0
	}

}
