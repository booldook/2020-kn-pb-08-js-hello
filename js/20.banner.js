var now = 0;

$(".bt-prev").click(onPrev);
$(".bt-next").click(onNext);


function onPrev() {
	$(".ban-wrap").stop().animate({"left": 0}, 300);
}

function onNext() {
	$(".ban-wrap").stop().animate({"left": "-100%"}, 300);
}
