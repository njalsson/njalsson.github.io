function setup(){
	createCanvas(500,500);
	translate(250,250);
	rotate(PI);
}

let x;
let y;
let equation;
let newequation;
let zoom = 1;
$('#button').click(function() { 



	let  equation = $('#equation').val();
	console.log(equation);


	smooth();
	noFill();
	beginShape();
	for(x = -250; x < 250; x+=10){
		newequation = equation;
		newequation = newequation.replace("-x", "\(x\)");
		newequation = newequation.replace("x",  "\(x\)");
		newequation = newequation.replace("x",x);
		newequation = newequation.replace("^", "**");
		console.log(newequation);
		console.log(x, eval(newequation));
			// draw, gotta have old x, y, to new x, y
		y = eval(newequation);		
		curveVertex(x,y);			
	}
	endShape();
	
});


$('#clearbutton').click(function(){
let canvas = document.getElementById("myCanvas");
	clear();

});

$('#zoomin').click(function(){
	console.log('zoooom');
	zoom += 1;
	scale(zoom);
});
