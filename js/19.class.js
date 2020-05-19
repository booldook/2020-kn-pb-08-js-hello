$(".navi").click(function(){
	$(".navi").removeClass("active");
	$(this).addClass("active");
});

$(".info-menus > .menu").click(function(){
	$(".info-menus > .menu").removeClass("active");
	$(this).addClass("active");
	$(".info-conts > table").hide();
	$(".info-conts > table").eq($(this).index()).show();
	/*
	if(	$(this).index() == 0	) {
		$(".notice-tb").show();
		$(".qna-tb").hide();
	}
	else {
		$(".notice-tb").hide();
		$(".qna-tb").show();
	}
	*/
});
$(".info-menus > .menu").eq(0).trigger("click");
