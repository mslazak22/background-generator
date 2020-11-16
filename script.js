var css = document.querySelector("h3");
var random = document.querySelector("button");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var slider = document.getElementById("myRange");
var output = document.getElementById("sliderAmount");
var sliderVal = 180 ;


output.innerHTML = slider.value + " Degrees";

css.textContent = "linear-gradient(rgb(13, 56, 80), rgb(232, 178, 66));";

function setGradient() {
	body.style.background = 
	"linear-gradient("+ sliderVal + "deg, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomHex() {
	color1.value = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
	color2.value = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
	setGradient();
}

function setDeg(){
	sliderVal = this.value;
	output.innerHTML = this.value + " Degrees";
	setGradient();
}

slider.addEventListener("input", setDeg);

random.addEventListener("click", randomHex);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);



