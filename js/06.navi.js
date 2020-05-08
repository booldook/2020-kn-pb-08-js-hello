$(".navi").hover(function(){
	$(this).find(".subs").stop().slideDown(300);
}, function(){
	$(this).find(".subs").stop().slideUp(300);
});