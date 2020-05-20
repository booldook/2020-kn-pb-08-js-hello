/************* 사전지식 *************/
// $(자바스크립트 객체) -> jQuery객체
// $(제이쿼리)[0] 			-> Javascript객체
/*
console.log(document.getElementById("bt"));
console.log($("#bt"));

console.log(	$(document.getElementById("bt"))	);
console.log(	$("#bt")	);

document.getElementById("bt").addEventListener("click", function(){
	console.log("hi~");
});
$("#bt").click(function(){
	console.log("hi~");
});
*/

/************* 초기값 *************/
var now = 0;
var $ban = $(".ban");
console.log($($ban[0]))
var last = $ban.length - 1;
init();

/************* 사용자 지정 *************/
function init() {
	$(".ban-wrap").empty();
	//console.log($ban[now]);
}



/************* 이벤트 등록 *************/




/************* 이벤트 콜백 *************/