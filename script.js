
window.onload = function(){
//make the canvas
var canvas = document.createElement('canvas');
	c = canvas.getContext("2d");
	canvas.width = $(window).width();
	canvas.height = $(window).height();
	
		
document.body.appendChild(canvas);
canvas.setAttribute('id', 'canvas');
c.fillStyle = "rgb(0, 0, 51)";
c.fillRect(0, 0, canvas.width, canvas.height);




// make a star prototype
var stars = {};
starIndex = 0;
starNum = 100;
function Star(){
	this.x = canvas.width / 2;
	this.y = canvas.height / 2;
	this.rx = Math.random()*(canvas.width);
	this.ry = Math.random()*(canvas.height);
	starIndex++;
	stars[starIndex]= this;
	this.id = starIndex;
};
Star.prototype.draw = function(){
	var merpx = 0;
	merpy = 0;
	merpx += this.rx;
	merpy += this.ry;
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
c.beginPath();
c.arc(120, 120, 100, Math.PI*2, false);
c.fillStyle = grd;
c.fill();

//make george
	$('<div class="george">').append('<img src="george.png">');
function George(){
	$('body').append($('.george'));
	console.log('merp');
}
George();

};
