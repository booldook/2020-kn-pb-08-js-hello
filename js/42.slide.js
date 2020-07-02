/* slide01 */
(function(){
	var now = 0;
	var tar = 0;
	var interval = setInterval(intervalFn, 4000);
	function intervalFn() {
		now = (now == 6) ? 0 : now + 1;
		tar = now * -720;
		$(".slide01 .slide-wrap").stop().animate({"left": tar+"px"}, 300);
	}
})();

/* slide02 */
(function(){
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
		$(".slide02 .slide-wrap").stop().animate({"left": tar+"px"}, 300);
	}
})();

