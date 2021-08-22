let dailyIbus   = 3;
let dailyOthers = 2;
let progressbarStart = 0;
let startday = 20;
let currentday = Date().split(' ')[2];
let remainingdays = startday - currentday+7;
let maindiv = document.getElementById("centr");
let buttons = [];
let counter = 0;

document.getElementById("top").innerHTML = "Remaining days: " + remainingdays;

for (let i = 0; i < 5; i++) {
	
	
	let button = document.createElement("Button");	
	
	button.innerHTML = !((i +1) % 2) ? "cockeline" : "ibufen";

	button.setAttribute("class", "button");
	maindiv.appendChild(button);
	buttons.push(button);
}


for(let i = 0; i < buttons.length; i++){
	buttons[i].addEventListener("click", function(e){
		e.target.remove();
		counter++;

			if(counter==5){

						var travolta = document.createElement("img");                    
						travolta.src = "http://i.imgur.com/vYCRrc0.gif";                    
						document.body.appendChild(travolta);                    
						travolta.style.position = "fixed";                   
						travolta.style.top = "calc(100% - 476px)";                    
						travolta.style.left = "calc(50% - 245px)";                    
						travolta.style.zIndex = "200000000";                    
						travolta.style.pointerEv 
			}
	});

}

