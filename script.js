

var clickButton1 = document.querySelector(".switch");

clickButton1.addEventListener("click", function(){
  document.body.classList.toggle("darkmode");  
})

$(".switch").click( function() {
		$(".container").toggleClass("darkmode");
	})


$(function(){

	$(".draggable").draggable({
		stack: ".draggable", 
		containment: ".container"
	})

})


var clickClose1 = document.querySelector(".close1");
var clickClose2 = document.querySelector(".close2");
var clickClose3 = document.querySelector(".close3");
var clickClose4 = document.querySelector(".close4");
var clickClose5 = document.querySelector(".close5");
var clickClose6 = document.querySelector(".close6");
var clickClose7 = document.querySelector(".close7");
var clickClose8 = document.querySelector(".close8");
var clickClose9 = document.querySelector(".close9");
var info = document.querySelector(".info");
var info2 = document.querySelector(".info2");
var info3 = document.querySelector(".info3");
var info4 = document.querySelector(".info4");
var info5 = document.querySelector(".info5");
var info6 = document.querySelector(".info6");
var info7 = document.querySelector(".info7");
var info8 = document.querySelector(".info8");
var info9 = document.querySelector(".info9");

clickClose1.addEventListener("click", function(){
  info.classList.toggle("disappear");
})

clickClose2.addEventListener("click", function(){
  info2.classList.toggle("disappear");
})

clickClose3.addEventListener("click", function(){
  info3.classList.toggle("disappear");
})

clickClose4.addEventListener("click", function(){
  info4.classList.toggle("disappear");
})

clickClose5.addEventListener("click", function(){
  info5.classList.toggle("disappear");
})

clickClose6.addEventListener("click", function(){
  info6.classList.toggle("disappear");
})

clickClose7.addEventListener("click", function(){
  info7.classList.toggle("disappear");
})

clickClose8.addEventListener("click", function(){
  info8.classList.toggle("disappear");
})

clickClose9.addEventListener("click", function(){
  info9.classList.toggle("disappear");
})















