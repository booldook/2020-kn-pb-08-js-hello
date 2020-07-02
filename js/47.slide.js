var now = 6;
var depth = 11;
$(".bt-prev").click(onPrev);
$(".bt-next").click(onNext);
function onPrev() {
	now = (now == 0) ? 6 : now - 1;
	ani();
}
function onNext() {
	now = (now == 6) ? 0 : now + 1;
	ani();
}
function ani() {
	$(".slide").eq(now).css({"opacity": 0, "z-index": depth++}).stop().animate({"opacity": 1}, 300);
}