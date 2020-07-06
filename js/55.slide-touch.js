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
	tar = now * -720;
	$(".bt").show();
	if(now == 0) $(".bt-prev").hide();
	if(now == 6) $(".bt-next").hide();
	$(".slide-wrap").stop().animate({"left": tar+"px"}, 300);
}

$(".slide-wrap").swipe({
	swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
		if(direction == "left" && distance > 100 && now < 6) onNext();
		if(direction == "right" && distance > 100 && now > 0) onPrev();  
	}
});




/*
var el = $(".slide-wrap")[0];
var touchStart, touchEnd, touchMove, touchGap, touchDirection
el.addEventListener("touchstart", handleStart, false);
el.addEventListener("touchend", handleEnd, false);
el.addEventListener("touchcancel", handleCancel, false);
el.addEventListener("touchmove", handleMove, false);

function handleStart() {
	touchStart = event.changedTouches[0].pageX;	
}

function handleEnd() {
	touchEnd = event.changedTouches[0].pageX;
	touchGap = Math.abs(touchStart - touchEnd);
	if(touchStart - touchEnd > 0)	touchDirection = "L";
	else touchDirection = "R";
	if(touchGap > 100) {
		if(touchDirection == "L" && now < 6) onNext();
		else if(touchDirection == "R" && now > 0) onPrev();
	}
}

function handleMove() {
	touchMove = event.changedTouches[0].pageX;	
}

function handleCancel() {
	console.log(event);	
}
*/

