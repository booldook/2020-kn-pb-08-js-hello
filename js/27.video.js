function onResize() {
	var movHei = $(".youtube-wrap").width() * 0.5625;
	$(".youtube-wrap").height(movHei);
}
$(window).resize(onResize).trigger("resize");

$('#background').YTPlayer();