var now = 0;
var tar = 0;
var el = $(".slide");
var last = el.length - 1;
var arr = [];

for(var i=0; i<el.length; i++) {
	$(".pager-wrap").append('<i class="pager fa-circle"></i> ');
}

$(".bt-prev").click(onPrev);
$(".bt-next").click(onNext);
$(".pager").click(onPager);

init();

function init() {
	$(".slide-wrap").css("left", "-20%");
	$(".slide").remove();
	arr = [];
	arr[1] = now;
	arr[0] = (now == 0) ? last : now - 1;
	for(var i=2; i<el.length; i++) {
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
	tar = "-40%";
	ani();
}

function onPager() {

}

function ani() {
	$(".slide-wrap").stop().animate({"left": tar}, 300, init);
}
