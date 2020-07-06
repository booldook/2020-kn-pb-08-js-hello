window.addEventListener('wheel', onWheel, {passive: false});

function onWheel() {
	event.preventDefault();
	var direction = event.deltaY;
	var pageY = event.pageY;
	var last = $(".page").length - 1;
	var offsetY = [];
	var now = 0;
	for(var i=0; i<=last; i++) {
		offsetY[i] = $(".page").eq(i).offset().top;
	}
	for(var i=last; i>=0; i--) {
		if(offsetY[i] < pageY) {
			now = i;
			break;
		}
	}
	if(direction < 0 && now > 0) {	// 휠 위로 prev
		now = now - 1;
		ani();
	}
	else if(direction > 0 && now < last) {	// 휠 아래로 next
		now = now + 1;
		ani();
	}
	
	function ani() {
		$("html, body").stop().animate({"scrollTop": offsetY[now]+"px"}, 500);
	} 
}