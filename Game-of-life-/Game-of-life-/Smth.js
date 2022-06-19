let LivingCreature = require('./LivingCreature')
module.exports = class Smth extends LivingCreature{
	constructor(x,y){
	super(x,y)
    }
    updateDirection(){
		 this.directions = [
			[this.x    , this.y + 2],
			[this.x + 4, this.y    ],
			[this.x - 4, this.y    ],
			[this.x    , this.y - 2]
        ];	
     }



	
    chooseCell(){
        this.updateDirection()
		var found = []
		for (var i in this.directions) {

			var x = this.directions[i][0]
			var y = this.directions[i][1]

			if (x >= 0 && y >= 0 && x <= matrix.length - 1 && y <= matrix.length - 1 && matrix[y][x] !== 4 ) {
				found.push(this.directions[i])
			}

		}	 
		return found
	}

	mult(){
		
		var a = this.chooseCell()
		var newXY = random(a)
        if(newXY){
            let x = newXY[0]
			let y = newXY[1]
			// for(let y = 0; y < matrix.length; y++){
			// 	for(let x = 0; x < matrix[y].length; x++){
			// 		if(matrix[y][x] % 5 !== 0){
			// 			matrix[y][x] = 4
			// 		}
			// 	}
			// }
            matrix[y][x] = 4

            var smth1 = new Smth(x,y)
            smth.push(smth1)
			for (var i in eater) {
	    		if (x == eater[i].x && y == eater[i].y && eater.length !== 0) {
	        		eater.splice(i, 1);
	        		break;
				}
	    	}for(i in eater2){
	    		if(x == eater2[i].x && y == eater2[i].y && eater2.length !== 0){
					eater2.splice(i, 1);
	        		break;
	    		}

       		}for(i in grassArr){
       			if(x == grassArr[i].x && y == grassArr[i].y && grassArr.length !== 0){
					grassArr.splice(i, 1);
	        		break;
       			}
    		}
    }
}


	die(){
		for(let i in smth){
			if(this.x == smth[i].x && this.y == smth[i].y){
				smth.splice(i,1)
			}
		}
		let y = this.y
		let x = this.x
		matrix[y][x] = 0
	}

}
