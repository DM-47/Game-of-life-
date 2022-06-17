var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require("fs");


app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

let a = 14
let matrix = []
	
for(i = 0; i < a; i++){
	let arr = Array.from({length:a},() => 0)
	matrix.push(arr)
} 

Grass = require("./Grass")
GrassEater = require("./GrassEater")
EaterEater = require("./EaterEater")
Smth = require("./Smth")

var gr = new Grass(4,5)
	setInterval(() => {var tt = new Smth(0,0);smth.push(tt)},10000)
	setInterval(() => {var ban = new GrassEater(0,0);eater.push(ban)},4000)
	setInterval(() => {var nor = new Grass(0,0); grassArr.push(nor)},6000)
	var eat = new GrassEater(0,2)
	

	var tt1 = new Smth(0,0);smth.push(tt1)
	
	$(`#pred`).click(() => {
			var pred = new EaterEater(7,5)
			eater2.push(pred)
		}
	)
	$(`#eater`).click(() => {
			var eat = new GrassEater(7,5)
			eater.push(eat)
		}
	)
	$(`html`).keypress((e) => {
			let key = e.originalEvent.key
			if(key == 'o'){
				//var eat2 = new EaterEater(d,f)
				//eater2.push(eat2)
				//everything.push(eat2)
			}else if(key == 'h'){
				var eat1 = new GrassEater(1,0)
				eater.push(eat1)
				everything.push(eat1)
			}else if(key == 'b'){
				var smth1 = new Smth(0,0)
				smth.push(smth1)	
			}
		}
	)

grassArr = []
eater = []



function createObject(matrix) {
    for(var y = 0; y < matrix.length; y++){
		for(var x = 0; x < matrix[y].length; x++){
			if (matrix[y][x] == 1) {
				var gr = new Grass(x, y, 1);
				grassArr.push(gr)
			}
			else if (matrix[y][x] == 2) {
				var grEater = new GrassEater(x, y);
				grassEaterArr.push(grEater)

			}

		}
	}
    io.sockets.emit('send matrix', matrix)
}


function game(){
    for(let i in grassArr){
		grassArr[i].mul()
	}
	for(let i in eater){
		eater[i].move()
	}
    io.sockets.emit("send matrix", matrix);
}
setInterval(game, 1000)

io.on('connection', function (socket) {
    createObject(matrix)
})