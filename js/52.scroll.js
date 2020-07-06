var pageOffset = [];
var idx = 0;

$(".logo").click(onNavClick).trigger("click");
$(".nav-link").click(onNavClick);
$(window).resize(onResize).trigger("resize");
$(window).scroll(onScroll).trigger("scroll");

function onResize() {
	for(var i=0; i<$(".page").length; i++) {
		pageOffset[i] = $(".page").eq(i).offset().top;
	}
}

function onScroll() {
	var sctop = $(this).scrollTop();
	for(var i=0; i<pageOffset.length; i++) {
		if(pageOffset[i] + $(".page").innerHeight() >= sctop) {
			idx = i;
			break;
		}
	}
	$(".nav-link").removeClass("active");
	$(".nav-link").eq(idx).addClass("active");
}

function onNavClick() {
	idx = $(this).index();
	$("html, body").stop().animate({"scrollTop": pageOffset[idx]+"px"}, 500);
	$(".nav-link").removeClass("active");
	$(".nav-link").eq(idx).addClass("active");
}
