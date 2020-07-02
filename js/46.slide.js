var now = 0;
var depth = 11;
var interval = setInterval(intervalFn, 3000);
function intervalFn() {
	now = (now == 6) ? 0 : now + 1;
	$(".slide").eq(now).css({"opacity": 0, "z-index": depth++}).stop().animate({"opacity": 1}, 300);
}