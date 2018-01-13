var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

//forul asta inlocuieste butoanele comentate mai jos 
for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;  //asta inlocuieste if-ul urmator care e comentat
		/*if(this.textContent === "Easy"){
			numSquares = 3;
		} else {
			numSquares = 6;
		}*/

        reset();
	});
}
function reset(){
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //chang color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change coolors of squares
    for( var i = 0; i < squares.length; i++){
    	if(colors[i]){
    	squares[i].style.display = "block";	
    	squares[i].style.background = colors[i];
    } else {
    	squares[i].style.display = "none";
    }
    }
   h1.style.background = "steelblue";
}



/*easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
}
}); */

resetButton.addEventListener("click", function()
{
	reset();
})

colorDisplay.textContent = pickedColor;

 for (var i = 0; i < squares.length; i++){
 	//initial colors
 	squares[i].style.background = colors[i];

 	//add click listener to squares
 	squares[i].addEventListener("click", function(){
 		//grab color of clicked square
     var clickedColor = this.style.background;
     //compared color to picked color
     if (clickedColor === pickedColor) {
     	messageDisplay.textContent = "Correct!";
     	resetButton.textContent = "Play Again?"
     	changeColors(clickedColor);
     	h1.style.background = clickedColor;
     }
     	else{
     		this.style.background = "#232323";
     		messageDisplay.textContent = "Try Again!"
     	}
   });
 }
 function changeColors(color){
 	for (var i = 0; i < squares.length; i++){
 		squares[i].style.background = color;
 	} 
 }

 function pickColor(){
 	var random = Math.floor(Math.random() * colors.length);
 	return colors[random];
 }

 function generateRandomColors(num){
 	//make an array
 	var arr = [];
 	// repeat num times
 	for(var i = 0; i < num; i++){
 		arr.push(randomColor())
 		//get random color and push in array
 	}
 	return arr;
 }

 function randomColor(){
 	var r = Math.floor(Math.random() * 256);  //red color
 	var g = Math.floor(Math.random() * 256);  // green color
 	var b = Math.floor(Math.random() * 256);  // blue color
 	return "rgb(" + r + ", " + g + ", " + b + ")";
 }