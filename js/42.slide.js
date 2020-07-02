var now = 0;
var tar = 0;
var interval = setInterval(intervalFn, 4000);
function intervalFn() {
	now = (now == 6) ? 0 : now + 1;
	tar = now * -720;
	$(".slide01 .slide-wrap").stop().animate({"left": tar+"px"}, 300);
}