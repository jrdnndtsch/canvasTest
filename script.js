
window.onload = function(){
//make the canvas
var canvas = document.createElement('canvas');
	c = canvas.getContext("2d");
canvas.height = 600;
canvas.width = 600;
document.body.appendChild(canvas);
canvas.setAttribute('id', 'canvas');
c.fillStyle = "black";
c.fillRect(0, 0, canvas.width, canvas.height);

//radial gradient
var grd = c.createRadialGradient(120,120,70,120,120,100);
grd.addColorStop(0,"rgba(255,215,0, 1)");
grd.addColorStop(1,"rgba(255,215,0,0.4)");


//make a circle (the sun)
c.beginPath();
c.arc(120, 120, 100, Math.PI*2, false);
c.fillStyle = grd;
c.fill();



// make some stars


};
