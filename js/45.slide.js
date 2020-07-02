var now = 0;
var tar = 0;
$(".bt-prev").click(onPrev).hide();
$(".bt-next").click(onNext);
function onPrev() {
	now = now - 1;
	ani();
}
function onNext() {
	now = now + 1;
	ani();
}
function ani() {
	tar = now * -380;
	$(".bt").show();
	if(now == 0) $(".bt-prev").hide();
	if(now == 6) $(".bt-next").hide();
	$(".slide-wrap").stop().animate({"top": tar+"px"}, 300);
}

