/************* 사전지식 *************/
var a = 10;
var b = a;
b = 20;
console.log(a, b);

var arr = [1, 2, 3, 4, 5];
var arr2 = arr;
arr2.push(6); // arr2 [1, 2, 3, 4, 5, 6], arr [1, 2, 3, 4, 5, 6]
console.log(arr, arr2);



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

console.log(	$(".ban-wrap").prepend($ban[now])	); -> return $(".ban-wrap")
console.log(	$($ban[now]).prependTo($(".ban-wrap"))	); -> return $($ban[now])
*/

/************* 초기값 *************/
var now = 0;
var $ban = $(".ban");
var last = $ban.length - 1;
var speed = 500;
init();

/************* 사용자 지정 *************/
function init() {
	$(".ban-wrap").empty();
	//html = '<img src="'+$($ban[now]).children("img").attr("src")+'" class="img">';
	$($ban[now]).appendTo($(".ban-wrap")).removeClass("ban");
}

function ani() {
	$($ban[now]).prependTo($(".ban-wrap")).css("opacity", 0).addClass("ban").animate({"opacity": 1}, speed, init);
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

