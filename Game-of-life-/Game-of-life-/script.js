var socket = io();
side = 30
let a = 14
let matrix = []
let everything = []
function setup() {
	frameRate(8)
	createCanvas(14*side, 14*side);
	background('grey');

	
	// var gr = new Grass(4,5)
	// setInterval(() => {var tt = new Smth(0,0);smth.push(tt)},10000)
	// setInterval(() => {var ban = new GrassEater(0,0);eater.push(ban)},4000)
	// setInterval(() => {var nor = new Grass(0,0); grassArr.push(nor)},6000)
	// var eat = new GrassEater(0,2)
	

	// var tt1 = new Smth(0,0);smth.push(tt1)
	
	// $(`#pred`).click(() => {
	// 		var pred = new EaterEater(7,5)
	// 		eater2.push(pred)
	// 	}
	// )
	// $(`#eater`).click(() => {
	// 		var eat = new GrassEater(7,5)
	// 		eater.push(eat)
	// 	}
	// )
	// $(`html`).keypress((e) => {
	// 		let key = e.originalEvent.key
	// 		if(key == 'o'){
	// 			//var eat2 = new EaterEater(d,f)
	// 			//eater2.push(eat2)
	// 			//everything.push(eat2)
	// 		}else if(key == 'h'){
	// 			var eat1 = new GrassEater(1,0)
	// 			eater.push(eat1)
	// 			everything.push(eat1)
	// 		}else if(key == 'b'){
	// 			var smth1 = new Smth(0,0)
	// 			smth.push(smth1)	
	// 		}
	// 	}
	// )
	

	grassArr.push(gr)
	eater.push(eat)
	
	//smth.push(tt)
	//everything.push(gr)
	//everything.push(eat)
}
let grassArr = []
let eater = []
function nkarel(){
	for(let i in grassArr){
		grassArr[i].mul()
	}
	for(let i in eater){
		eater[i].move()
	}
	for(var y = 0; y < matrix.length; y++){
		for(var x = 0; x < matrix[y].length; x++){


			if(matrix[y][x] == 1){
				fill('green')
			}else if(matrix[y][x] == 0){
				fill('grey')
			}else if(matrix[y][x] == 2){
				fill('aqua')
			}else if(matrix[y][x] == 3){
				fill('red')
			}else if(matrix[y][x] == 4){
				fill('blue')
			}
			rect(x*side, y*side,side,side)

		}
	}
	let eater2 = []
	for(let i in eater2){
		eater2[i].move()
	}
	let smth = []
	for(let i in smth){
		if(smth.length >= 121){
			for(i in smth){
				smth[i].die()
			}
		}else{
			smth[i].mult()
		}
		//setInterval(some(smth),6000)
		some(smth)
	}
	
}

setInterval(
    function () {
    socket.on('send matrix', nkarel)
    },1000
)



// //Խոտակեր
// let eater = [] 
// //Խոտ
// let grassArr = []
// //Գիշատիչ
// let eater2 = []
// //??
// let smth = []
// //լլ
// let everything = []

// for(i = 0; i < a; i++){
// 	let arr = Array.from({length:a},() => 0)
// 	matrix.push(arr)
// }





// let b = a/2
// let c = b
// var side = 25

// let d = Math.round(Math.random() * matrix.length)

// let f = Math.round(Math.random() * matrix[0].length)



// //setInterval(() => {var eat = new GrassEater(d,f);eater.push(eat)},3000)


// function setup() {
// 	frameRate(8)
// 	createCanvas(matrix[0].length*side, matrix.length*side);
// 	background('grey');
// 	if(grassArr.lenght>50 ){
// 		var eat2 = new GrassEater(0,2)
// 		eater.push(eat2)
// 	}
	
// 	var gr = new Grass(4,5)
// 	setInterval(() => {var tt = new Smth(0,0);smth.push(tt)},10000)
// 	setInterval(() => {var ban = new GrassEater(0,0);eater.push(ban)},4000)
// 	setInterval(() => {var nor = new Grass(0,0); grassArr.push(nor)},6000)
// 	var eat = new GrassEater(0,2)
	

// 	var tt1 = new Smth(0,0);smth.push(tt1)
	
// 	$(`#pred`).click(() => {
// 			var pred = new EaterEater(7,5)
// 			eater2.push(pred)
// 		}
// 	)
// 	$(`#eater`).click(() => {
// 			var eat = new GrassEater(7,5)
// 			eater.push(eat)
// 		}
// 	)
// 	$(`html`).keypress((e) => {
// 			let key = e.originalEvent.key
// 			if(key == 'o'){
// 				//var eat2 = new EaterEater(d,f)
// 				//eater2.push(eat2)
// 				//everything.push(eat2)
// 			}else if(key == 'h'){
// 				var eat1 = new GrassEater(1,0)
// 				eater.push(eat1)
// 				everything.push(eat1)
// 			}else if(key == 'b'){
// 				var smth1 = new Smth(0,0)
// 				smth.push(smth1)	
// 			}
// 		}
// 	)
	

// 	grassArr.push(gr)
// 	eater.push(eat)
	
// 	//smth.push(tt)
// 	//everything.push(gr)
// 	//everything.push(eat)
// }

// function draw(){
// 	for(let i in grassArr){
// 		grassArr[i].mul()
// 	}
// 	for(let i in eater){
// 		eater[i].move()
// 	}
// 	for(var y = 0; y < matrix.length; y++){
// 		for(var x = 0; x < matrix[y].length; x++){


// 			if(matrix[y][x] == 1){
// 				fill('green')
// 			}else if(matrix[y][x] == 0){
// 				fill('grey')
// 			}else if(matrix[y][x] == 2){
// 				fill('aqua')
// 			}else if(matrix[y][x] == 3){
// 				fill('red')
// 			}else if(matrix[y][x] == 4){
// 				fill('blue')
// 			}
// 			rect(x*side, y*side,side,side)

// 		}
// 	}
	
// 	for(let i in eater2){
// 		eater2[i].move()
// 	}

// 	for(let i in smth){
// 		if(smth.length >= 121){
// 			for(i in smth){
// 				smth[i].die()
// 			}
// 		}else{
// 			smth[i].mult()
// 		}
// 		//setInterval(some(smth),6000)
// 		some(smth)
// 	}
	
// }

// let some = (smth) => {
// 	$(`html`).keypress((e) => {
// 		let key = e.originalEvent.key
// 		if(key == `e`){	
// 			for(let i in smth){
// 				smth[i].die()
// 			}
// 		}
// 	}
// 	)
// }

