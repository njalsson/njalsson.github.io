var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


// check if button was pressed, to the event thing, shiiiet
ctx.beginPath();
ctx.moveTo(0,250);
ctx.lineTo(500,250);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 0);
ctx.lineTo(250, 500);
ctx.stroke();
let maxnum;
let minnum;
ctx.translate(250,250);

$('#button').click(function() { 



	let  equation = $('#equation').val();
	console.log(equation);


	let x;
	let newx;
	let y;
	let newy;
	let newequation = equation;
	newequation = newequation.replace("^","**");
	for(let i = -250; i < 250; i += 0.1){
		x = i;
		newequation = equation.replace("x", x);
		newequation = equation.replace("^", "**");
		console.log(x, eval(newequation));
			y = eval(newequation);
			// draw, gotta have old x, y, to new x, y
			newx = x+1;
			newequation = equation.replace("x", newx);
			newequation = equation.replace("^", "**");
			newy = eval(newequation);
			ctx.beginPath();

			ctx.moveTo(x, y);
			ctx.lineTo(newx, newy);
			ctx.stroke();		
		if (i == -249) { minnum = x }
		if (i ==  249) { maxnum = x }
					
	}
	let max = document.getElementById("max");
	let min = document.getElementById("min");
	
});


$('#clearbutton').click(function(){
let canvas = document.getElementById("myCanvas");
	ctx.translate(-250,-250);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
ctx.moveTo(0,250);
ctx.lineTo(500,250);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 0);
ctx.lineTo(250, 500);
ctx.stroke();
	ctx.translate(250,250);


});