/* jQuery */
function onTurnOn() {
	// $(".lamp").attr("src", "../img/pic_bulbon.gif");
	// $(".lamp-on").css("display", "inline-block");
	// $(".lamp-off").css("display", "none");
	$(".lamp-on").stop().fadeIn(500);
	$(".lamp-off").stop().fadeOut(500);
}

function onTurnOff() {
	// $(".lamp").attr("src", "../img/pic_bulboff.gif");
	// $(".lamp-on").css("display", "none");
	// $(".lamp-off").css("display", "inline-block");
	$(".lamp-on").stop().fadeOut(500);
	$(".lamp-off").stop().fadeIn(500);
}

function onTurn() {
	/* if(	$(".lamp").attr("src") == "../img/pic_bulboff.gif"	) {
		$(".lamp").attr("src", "../img/pic_bulbon.gif");
	}
	else {
		$(".lamp").attr("src", "../img/pic_bulboff.gif");
	} */

	$(".lamp").attr("src") == "../img/pic_bulboff.gif" 
	? $(".lamp").attr("src", "../img/pic_bulbon.gif") 
	: $(".lamp").attr("src", "../img/pic_bulboff.gif");

}

// $(".bt-on").click(onTurn);
// $(".bt-off").click(onTurn);




/* Javascript ES5 */
/*
function onLampOn() {
	document.getElementsByClassName("lamp")[0].src = "../img/pic_bulbon.gif";
}

function onLampOff() {
	document.getElementsByClassName("lamp")[0].src = "../img/pic_bulboff.gif";
}

document.getElementById("btOn").addEventListener("click", onLampOn);
document.getElementById("btOff").addEventListener("click", onLampOff);
*/


/* Javascript ES6 */
var onLampOn = () => {
	document.querySelector(".lamp").src = "../img/pic_bulbon.gif";
}

var onLampOff = () => {
	document.querySelector(".lamp").src = "../img/pic_bulboff.gif";
}

document.querySelector(".bt-on").addEventListener("click", onLampOn);
document.querySelector(".bt-off").addEventListener("click", onLampOff);