
window.onload = function(){

//make the canvas
canvas = document.createElement('canvas');
	c = canvas.getContext("2d");
	canvas.width = 1200;
	canvas.height = 600;
	
		
document.body.appendChild(canvas);
canvas.setAttribute('id', 'canvas');
// c.fillStyle = "rgb(0, 0, 51)";
// c.fillRect(0, 0, canvas.width, canvas.height);



// make a star prototype
var stars = {};
starIndex = 0;
starNum = 1;
function Star(){
	this.x = canvas.width / 2;
	this.y = canvas.height / 2;
	this.rx = Math.random()*(canvas.width);
	this.ry = Math.random()*(canvas.height);
	starIndex++;
	stars[starIndex]= this;
	this.id = starIndex;
	this.life = 0;
	this.maxLife = 400;
};
Star.prototype.draw = function(){
	var merpx = 0;
	merpy = 0;
	merpx += this.rx;
	merpy += this.ry;
	this.life++;
	if (this.life >= this.maxLife){
		delete stars[this.id];
	}
	c.beginPath();
	c.arc(merpx, merpy, 2, Math.PI*2, false);
	c.fillStyle = "rgba(255,255,255,0.6)";
	c.fill();
};

var s = new Star();

function makeStars(){
	for(var i = 0; i < starNum; i++){
		new Star();
	};
	for(var i in stars){
		stars[i].draw();
	};
};
makeStars();

//radial gradient
var grd = c.createRadialGradient(120,120,70,120,120,100);
grd.addColorStop(0,"rgba(255,215,0, 1)");
grd.addColorStop(1,"rgba(255,215,0,0.4)");


//make a circle (the sun)
function makeSun(){
c.beginPath();
c.arc(120, 120, 100, Math.PI*2, false);
c.fillStyle = grd;
c.fill();
	
};

//make George
var george = {
	x: canvas.width - 300,
	y: canvas.height - 200,
	w: 200,
	h: 100,
	speed: 5,
	left: false,
	right: false,
	up: false,
	down: false,
	imageObj: new Image(),
	paint: function(){
		c.fillStyle = "#ffffff";
		c.fillRect(this.x, this.y, this.w, this.h);
		// var imageObj = new Image();
		// 	var x = canvas.width - 400;
		// 		y = canvas.height - 300;
		//     imageObj.onload = function() {
		//         c.drawImage(imageObj, x, y);
		//     };
		//     imageObj.src = 'george.png';
	}
}

var keys = {
	keyDown: function(e){
		//left
		if(e.keyCode === 37){
			george.left = true;
			george.x -= george.speed;
		}
		//up
		if(e.keyCode === 38){
			george.up = true;
			george.y -= george.speed;
		}
		//right
		if(e.keyCode === 39){
			george.right = true;
			george.x += george.speed;
		}
		//down
		if(e.keyCode === 40){
			george.down = true;
			george.y += george.speed;
		}
	},
	keyUp: function(e){
		if(e.keyCode === 37){
			george.left = false;
		}
		if(e.keyCode === 38){
			george.up = false;
		}
		if(e.keyCode === 39){
			george.right = false;
		}
		if(e.keyCode === 40){
			george.down = false;
		}
	},
	checkKeys: function(){
		if(george.left === true){
			george.x -= george.speed;
		}
		if(george.up === true){
			george.y -= george.speed;
		}
		if(george.right === true){
			george.x += george.speed;
		}
		if(george.down === true){
			george.y += george.speed;
		}
	}
}

function update(){
	c.fillStyle = "rgb(0, 0, 51)";
	c.fillRect(0, 0, canvas.width, canvas.height);
	makeStars();
	makeSun();
	george.paint();
	keys.checkKeys();
	requestAnimationFrame(update);
	
};

function init(){
	window.addEventListener('keydown', keys.keyDown);
	window.addEventListener('keyup', keys.keyUp);
	requestAnimationFrame(update());
};

init();


};


