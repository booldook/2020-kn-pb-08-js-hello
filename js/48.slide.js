var now = 0;
var el = $(".slide");
var last = el.length - 1;	// 마지막 슬라이드 index
var slideMaxLen = 6; // 화면에 나올 최대 슬라이드갯수 + 2
var arr = [];
var lt = 0;
var tar = 0;

for(var i=0; i<el.length; i++) {
	$(".pager-wrap").append('<i class="pager fa-circle"></i> ');
}

$(window).resize(onResize).trigger("resize");
$(".bt-prev").click(onPrev);
$(".bt-next").click(onNext);
$(".pager").click(onPager);

function init() {
	$(".slide-wrap").css("left", -lt+"%");
	$(".slide").remove();
	arr = [];
	arr[1] = now;
	arr[0] = (now == 0) ? last : now - 1;
	for(var i=2; i<slideMaxLen; i++) {
		arr[i] = (arr[i-1] == last) ? 0 : arr[i-1] + 1;
	}
	for(var i in arr) {
		$(el[arr[i]]).clone().appendTo(".slide-wrap");
	}
	$(".pager").removeClass("fa").addClass("far");
	$(".pager").eq(now).removeClass("far").addClass("fa");
}

function onPrev() {
	now = (now == 0) ? last : now - 1;
	tar = 0;
	ani();
}

function onNext() {
	now = (now == last) ? 0 : now + 1;
	tar = -lt*2+"%";
	ani();
}

function onPager() {

}

function ani() {
	$(".slide-wrap").stop().animate({"left": tar}, 300, init);
}

function onResize() {
	var wid = $(this).innerWidth();
	if(wid > 991) {	// ~ 992
		lt = 25;
	}
	else if(wid > 767) {	// 991 ~ 768
		lt = 33.3333;
	}
	else if(wid > 575) {	// 767 ~ 575
		lt = 50;
	}
	else {	// 575 ~ 0
		lt = 100;
	}
	init();
}

