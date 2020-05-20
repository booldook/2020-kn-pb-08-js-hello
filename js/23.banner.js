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

css("color")
css("color", "red")
*/

/************* 초기값 *************/
var now = 0;
var $ban = $(".ban");
var last = $ban.length - 1;
init();

/************* 사용자 지정 *************/
function init() {
	$(".ban-wrap").empty();
	html = '<img src="'+$($ban[now]).children("img").attr("src")+'" class="img">';
	$(".ban-wrap").append(html);
}

function ani() {
	// console.log(	$(".ban-wrap").prepend($ban[now])	);
	// console.log(	$($ban[now]).prependTo($(".ban-wrap"))	);
}

/************* 이벤트 등록 *************/
$(".bt-prev").click(onPrev);
$(".bt-next").click(onNext);

/************* 이벤트 콜백 *************/
function onPrev() {
	now = (now == 0) ? last : now - 1;
	ani();
}

function onNext() {
	now = (now == last) ? 0 : now + 1;
	ani();
}