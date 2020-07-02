var log = console.log;
/*
log(	$('<div>A</div>')	);
$('<div>A</div>').appendTo('body');

log(	$(".header")[0]	);
log(	$(document.getElementsByClassName("header")[0])	);
log(	document.getElementsByClassName("header")[0]	);
log(	document.getElementsByTagName("header")[0]	);

log(	document.getElementById("wrapper")	);
log(	document.getElementsByClassName("navi")	);
*/



log(	document.querySelector("header")	);
log(	document.querySelector(".header")	);
log(	document.querySelector(".navi")	);
log(	document.querySelectorAll(".navis > .navi")	);
log(	document.querySelector(".navis").childNodes	);
log(	document.querySelector(".navis").children	);
log(	document.querySelector(".navis").parentNode.querySelector(".navis")	);

document.querySelector("header").style.backgroundColor = "red";
log(	document.querySelector("header").style.backgroundColor	);

log(	document.querySelector("header").clientWidth	);

$(".header")[0].style.backgroundColor = "blue";

log(	$(".navis").html("hi")	);
log(	$(".navis")[0].innerHTML = "!!!!!!!!!!!!!!"	);