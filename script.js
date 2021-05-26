var css= document.querySelector("h3");
var co1= document.querySelector(".c1");
var co2= document.querySelector(".c2");
var body=document.querySelector("body");

function setGradient()
{
	body.style.background="linear-gradient(to right, "
		+ co1.value 
		+ ", " 
		+ co2.value 
		+ ")";
	
	css.textContent=body.style.background+ ";";
}

co1.addEventListener("input", setGradient);

co2.addEventListener("input", setGradient);