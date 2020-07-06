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
	for(var i=pageOffset.length; i>=0; i--) {
		if(sctop >= pageOffset[i]) {
			idx = i;
			break;
		}
	}
	console.log(idx);
	$(".nav-link").removeClass("active");
	$(".nav-link").eq(idx).addClass("active");
}

function onNavClick() {
	idx = $(this).index();
	$("html, body").stop().animate({"scrollTop": (pageOffset[idx]+1) + "px"}, 500);
	$(".nav-link").removeClass("active");
	$(".nav-link").eq(idx).addClass("active");
}

var interval;
document.querySelector(".box").addEventListener("click", function(){
	clearInterval(interval);
	var obj = this;
	var tar = 0;
	interval = setInterval(function(){
		var left = Number(obj.style.left.replace("px", ""));
		tar += (1200 - left) * 0.05;
		console.log(tar);
		obj.style.left = tar + "px";
	}, 33);
});
