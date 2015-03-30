

$('.play').on('click', function(){
$('.directions').addClass('hide');
//make the canvas
canvas = document.createElement('canvas');
	c = canvas.getContext("2d");
	canvas.width = $(window).width();
	canvas.height = $(window).height();
	
		
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
	this.maxLife = 100;
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
var grd = c.createRadialGradient(500,300,70,500,300,160);
grd.addColorStop(0,"rgba(255,215,0, 1)");
grd.addColorStop(1,"rgba(255,215,0,0.4)");


//make a circle (the sun)
var sun = {
	x: 500,
	y: 300,
	r: 160,
	makeSun: function(){
	c.beginPath();
	c.arc(this.x, this.y, this.r, Math.PI*2, false);
	c.fillStyle = grd;
	c.fill();	
	}
}

//make televistion
var tv = {
	x: 100,
	y: 100,
	w: 120,
	h: 100,
	imageObj: new Image(),
	paint: function(){
		this.imageObj.src = 'television.png';
		c.drawImage(this.imageObj, this.x, this.y, this.w, this.h);
	}
}
//make George
var george = {
	x: canvas.width - 300,
	y: canvas.height - 200,
	w: 180,
	h: 87,
	speed: 2,
	left: false,
	right: false,
	up: false,
	down: false,
	imageObj: new Image(),
	paint: function(){
		//c.fillStyle = "#ffffff";
		//c.fillRect(this.x, this.y, this.w, this.h);
		this.imageObj.src = 'george.png';
		c.drawImage(this.imageObj, this.x, this.y, this.w, this.h);

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

function tooClose(){
	if(george.y > (sun.y - sun.r) 
	&& george.y < (sun.y + sun.r) 
	&& george.x > (sun.x - sun.r)
	&& george.x < (sun.x + sun.r)){
		alert('You flew too close to the sun on wings of pastrami');
		window.location.reload();
	}else if((george.y + george.h) > (sun.y - sun.r) 
	&& (george.y + george.h) < (sun.y + sun.r)
	&& (george.x + george.w) > (sun.x - sun.r)
	&& (george.x + george.w) < (sun.x + sun.r)
	 ){
		alert('You flew too close to the sun on wings of pastrami');
		window.location.reload();
	}
	else if((george.y + george.h) > (sun.y - sun.r) 
	&& (george.y + george.h) < (sun.y + sun.r)
	&& george.x > (sun.x - sun.r)
	&& george.x < (sun.x + sun.r)
	){
		alert('You flew too close to the sun on wings of pastrami');
		window.location.reload();
	}
	else if(george.y > (sun.y - sun.r) 
	&& george.y < (sun.y + sun.r)
	&& (george.x + george.w) > (sun.x - sun.r)
	&& (george.x + george.w) < (sun.x + sun.r)
	){
		alert('You flew too close to the sun on wings of pastrami');
		
		window.location.reload();

	}
};

function youWin(){
	if(george.y > tv.y 
	&& george.y < (tv.y + tv.h)
	&& george.x > tv.x
	&& george.x < (tv.x + tv.w)){
		alert('You did it! You can have your cake and eat it too');
		window.location.reload();	
	}else if((george.y + george.h) > tv.y
	&& (george.y + george.h) < (tv.y + tv.h)
	&& (george.x + george.w) > tv.x
	&& (george.x + george.w) < (tv.x + tv.w)
	 ){
		alert('You did it! You can have your cake and eat it too');
		window.location.reload();
	}
	else if((george.y + george.h) > tv.y
	&& (george.y + george.h) < (tv.y + tv.h)
	&& george.x > tv.x
	&& george.x < (tv.x + tv.w)
	){
		alert('You did it! You can have your cake and eat it too');
		window.location.reload();
	}
	else if(george.y > tv.y 
	&& george.y < (tv.y + tv.h)
	&& (george.x + george.w) > tv.x
	&& (george.x + george.w) < (tv.x + tv.w)
	){
		alert('You did it! You can have your cake and eat it too');
		
		window.location.reload();

	}
};


function update(){
	c.fillStyle = "rgb(0, 0, 51)";
	c.fillRect(0, 0, canvas.width, canvas.height);
	makeStars();
	sun.makeSun();
	tv.paint();
	george.paint();
	keys.checkKeys();
	tooClose();
	youWin();
	requestAnimationFrame(update);
	
};

function init(){
	window.addEventListener('keydown', keys.keyDown);
	window.addEventListener('keyup', keys.keyUp);
	requestAnimationFrame(update);
};

init();


});


