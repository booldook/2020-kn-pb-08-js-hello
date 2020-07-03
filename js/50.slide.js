var now = 0;
var root = $(".gum-fade");
var el = $(".slide", root);
var last = el.length - 1;

for(var i=0; i<el.length; i++) $(".pager-wrap", root).append('<i class="pager fa-circle"></i> ');
$(".bt-prev", root).click(onPrev);
$(".bt-next", root).click(onNext);
$(".pager", root).click(onPager);

init();

function init() {
	$(".slide", root).remove();
	$(el[now]).clone().appendTo($(".slide-stage", root));
	$(".pager", root).removeClass("fa").addClass("far");
	$(".pager", root).eq(now).removeClass("far").addClass("fa");
}

function onPrev() {
	now = (now == 0) ? last : now - 1;
	ani();
}

function onNext() {
	now = (now == last) ? 0 : now + 1;
	ani();
}

function onPager() {
	now = $(".pager", root).index();
	ani();
}