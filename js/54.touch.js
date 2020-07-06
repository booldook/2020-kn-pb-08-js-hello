var el = $(".wrapper")[0];

el.addEventListener("touchstart", handleStart, false);
el.addEventListener("touchend", handleEnd, false);
el.addEventListener("touchcancel", handleCancel, false);
el.addEventListener("touchmove", handleMove, false);

function handleStart() {
	console.log("handleStart");	
}

function handleEnd() {
	console.log("handleEnd");	
}

function handleCancel() {
	console.log("handleCancel");	
}

function handleMove() {
	console.log("handleMove");	
}