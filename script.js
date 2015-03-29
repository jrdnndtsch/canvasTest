
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

//make a circle (the sun)
c.beginPath();
c.arc(100, 100, 50, Math.PI*2, false);
c.fillStyle = "yellow";
c.fill();

// make some stars


};
