// class Grass{
// 	constructor(x,y){
// 		this.x = x
// 		this.y = y
//         this.multiply = 10
        
// 		this.directions = [
// 			[this.x - 1, this.y - 1],
// 			[this.x    , this.y - 1],
// 			[this.x + 1, this.y - 1],
// 			[this.x - 1, this.y    ],
// 			[this.x + 1, this.y    ],
// 			[this.x - 1, this.y + 1],
// 			[this.x    , this.y + 1],
// 			[this.x + 1, this.y + 1]
//         ];	
        
// 	}

// 	chooseCell(character){
// 		var found = []
// 		for (var i in this.directions) {

// 			var x = this.directions[i][0]
// 			var y = this.directions[i][1]

// 			if (x >= 0 && y >= 0 && x <= matrix.length - 1 && y <= matrix.length - 1 && matrix[y][x] == character) {
// 				found.push(this.directions[i])
// 			}

// 		}	 
// 		return found
// 	}

// 	mul(){
//         this.multiply++

//         let arr = this.chooseCell(0) 
//         let emptyCell = random(arr)
// 		if(this.multiply >= 4 && emptyCell){

//             let x = emptyCell[0]
//             let y = emptyCell[1]
//             matrix[y][x] = 1
//             var gr = new Grass(x,y)
//             grassArr.push(gr)
//             everything.push(gr)
//             this.multiply = 0 
            
// 		}
// 	}
// }


// class GrassEater{ 	
// 	constructor(x,y){
// 		this.x = x
// 		this.y = y
//         this.energy = 5
        
// 		this.directions = []	
        
// 	}

//     updateDirection(){
//         this.directions = [
// 			[this.x - 1, this.y - 1],
// 			[this.x    , this.y - 1],
// 			[this.x + 1, this.y - 1],
// 			[this.x - 1, this.y    ],
// 			[this.x + 1, this.y    ],
// 			[this.x - 1, this.y + 1],
// 			[this.x    , this.y + 1],
// 			[this.x + 1, this.y + 1]
//         ];	
        
//     }

// 	chooseCell(character){
//         this.updateDirection()
// 		var found = []
// 		for (var i in this.directions) {

// 			var x = this.directions[i][0]
// 			var y = this.directions[i][1]

// 			if (x >= 0 && y >= 0 && x <= matrix.length - 1 && y <= matrix.length - 1 && matrix[y][x] == character) {
// 				found.push(this.directions[i])
// 			}

// 		}	 
// 		return found
// 	}

// 	mult(){
		

// 		var a = this.chooseCell(0)
// 		var b = this.chooseCell(1)
// 		var newXY = random(a)
// 		var rand = random(b)
//         if(this.energy >=50 && newXY){
//             let x = newXY[0]
//             let y = newXY[1]
//             matrix[y][x] = 2
//             var grEater = new GrassEater(x,y)
//             everything.push(grEater)
//             eater.push(grEater)
//             this.energy -= 20
//         }else if(this.energy >= 50 && rand){
//         	let x = rand[0]
//             let y = rand[1]
//             matrix[y][x] = 2
//             var grEater = new GrassEater(x,y)
//             everything.push(grEater)
//             eater.push(grEater)
//             this.energy -= 20
//         }
           
//     }
//     eat(){

// 		var a = this.chooseCell(1)

// 		var newXY = random(a)

// 		let x = newXY[0]
// 		let y = newXY[1]
		
// 		matrix[y][x] = 2

// 		matrix[this.y][this.x] = 0

// 		this.energy +=  5 

// 		for (var i in grassArr) {
//     		if (x == grassArr[i].x && y == grassArr[i].y) {
//         		grassArr.splice(i, 1);
    
//     		}
// 		}
// 		this.x = x
// 		this.y = y

//     }

// 	move(){

// 		if(this.energy >= 25){
// 			this.mult()
// 		}


// 		let arr = this.chooseCell(1)

// 		if(arr.length > 0){
// 			this.eat()
// 		}else if(arr.length <= 0){
// 			let arr1 = this.chooseCell(0)
// 			let emptyCell = random(arr1)
	
// 			if(this.energy > 0 && emptyCell){
// 				let x = emptyCell[0]
// 				let y = emptyCell[1]
// 				matrix[y][x] = 2
// 				matrix[this.y][this.x] = 0
// 				this.x = x
// 				this.y = y
// 				this.energy -= 1/2
// 			}
	
// 		}
	

		

// 		if(this.energy <= 0){
// 			this.die()
// 			if(eater.length >= 10){
// 				let rand = Math.round(Math.random() * (matrix.length-1))
// 				var eat3 = new EaterEater(rand,rand)
// 				eater2.push(eat3)
// 			}
// 		}

// 	}

// 	die(){
// 		for( let i in eater){
// 			if(this.x == eater[i].x && this.y == eater[i].y){
// 				eater.splice(i,1)
// 			}
// 		}
// 		let y = this.y
// 		let x = this.x
// 		matrix[y][x] = 0
// 	}

// }


class EaterEater{
	constructor(x,y){
		this.x = x
		this.y = y
        this.energy = 10
        
		this.directions = []	
        
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
		

		var a = this.chooseCell(0)
		var b = this.chooseCell(1)
		var newXY = random(a)
		var newYX = random(b)
        if(newXY){
            let x = newXY[0]
            let y = newXY[1]
            matrix[y][x] = 3
            var eatEater = new EaterEater(x,y)
            eater2.push(eatEater)
            everything.push(eatEater)
            this.energy -= 20
        }//else if(newYX){
		// 	let x = newYX[0]
        //     let y = newYX[1]
        //     matrix[y][x] = 3
        //     var eatEater = new EaterEater(x,y)
        //     eater2.push(eatEater)
        //     everything.push(eatEater)
        //     this.energy -= 20
		// }
    }
   eat(){
		
		var a = this.chooseCell(2)

		var newXY = random(a)

		let x = newXY[0];
		let y = newXY[1];
		
		matrix[y][x] = 3;

		matrix[this.y][this.x] = 0;

		this.energy +=  5 ;

		this.x = x;
		this.y = y;

		for (var i in eater) {
    		if (x == eater[i].x && y == eater[i].y) {
        		eater.splice(i, 1);
        		break;
    		}
		}

    }

	move(){

		if(this.energy >= 70){
			this.mult()
		}


		let arr = this.chooseCell(2)

		if(arr.length > 0){
			this.eat()
		
		}else if(arr.length <= 0 ){
			let arr1 = this.chooseCell(0)
			let arr2 = this.chooseCell(1)
			let emptyCell = random(arr1)
			let emptyCell2 = random(arr2)
	
			if(this.energy > 0 && emptyCell){
				let x = emptyCell[0]
				let y = emptyCell[1]
				matrix[y][x] = 3
				matrix[this.y][this.x] = 0
				this.x = x
				this.y = y
				this.energy -= 1
			}else if(this.energy > 0 && emptyCell2){
				let x = emptyCell2[0]
				let y = emptyCell2[1]
				matrix[y][x] = 3
				matrix[this.y][this.x] = 0
				this.x = x
				this.y = y
				this.energy -= 1
				for (var i in grassArr) {
					if (x == grassArr[i].x && y == grassArr[i].y && grassArr.length !== 0) {
						grassArr.splice(i, 1);
						break;
					}
				}
		
			}
	
		}
	


		if(this.energy <= 0 || eater.length == 0){
			this.die()
		}

	}

	die(){
		for( let i in eater2){
			if(this.x == eater2[i].x && this.y == eater2[i].y){
				eater2.splice(i,1)
			}
		}
		let y = this.y
		let x = this.x
		matrix[y][x] = 0
		// var newGR = new Grass(x,y)
		// grassArr.push(newGR)
	
	}

}


class Smth{
	constructor(x,y){
		this.y = y
		this.x = x
		 this.directions = [
			[this.x    , this.y + 2],
			[this.x + 4, this.y    ],
			[this.x - 4, this.y    ],
			[this.x    , this.y - 2]
        ];	
        
	}



chooseCell(){
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

