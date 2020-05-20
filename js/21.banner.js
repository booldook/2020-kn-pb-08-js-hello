/* 사전지식 */
// setInterval(함수, 간격);
var i = 0;
var interval;
$(".interval-start").click(function(){
	interval = setInterval(function(){
		console.log(i++);
	}, 1000);
});
$(".interval-end").click(function(){
	clearInterval(interval);
});


/*
if(ban[1] == 0) ban[0] = last;
else ban[0] = ban[0] - 1;
ban[0] = ban[1] == 0 ? last : ban[0] - 1;
*/

/* 초기화 */
var $ban = $(".ban"); 				// 배열
var last = $ban.length - 1; 	// 3
var now = 0;									// 가운데 그림(실제 보이고 있는 그림)
var ban = []; // [3, 0, 1] / [0, 1, 2] / [1, 2, 3] / [2, 3, 0]
var interval;

init();
pagerMaker();

/* 이벤트 */
$(".bt-prev").click(onPrev);
$(".bt-next").click(onNext);
$(".wrapper").mouseover(onOver);
$(".wrapper").mouseleave(onLeave);
interval = setInterval(onInterval, 3000);

/* 이벤트 콜백 */
function onPagerClick() {
	var old = now;
	now = $(this).index();
	if(old > now) {
		// prev
		$(".ban").eq(0).remove();
		$(".ban-wrap").prepend($($ban[now]).clone());
		ani(0);
	}
	if(old < now) {
		// next
		$(".ban").eq(2).remove();
		$(".ban-wrap").append($($ban[now]).clone());
		ani("-200%");
	}
}

function onOver() {
	clearInterval(interval);
}

function onLeave() {
	interval = setInterval(onInterval, 3000);
}

function onInterval() {
	$(".bt-next").trigger("click");
}

function onPrev() {
	now = (now == 0) ? last : now - 1;
	ani(0);
}

function onNext() {
	now = (now == last) ? 0 : now + 1;
	ani("-200%");
}

/* 함수 */
// 배너생성
function init() {
	$(".ban").remove();
	ban[1] = now;
	ban[0] = (ban[1] == 0) ? last : ban[1] - 1;
	ban[2] = (ban[1] == last) ? 0 : ban[1] + 1;
	for(var i=0; i<3; i++) {
		$(".ban-wrap").append($ban[ban[i]]);
	}
}

// pagerMaker
function pagerMaker() {
	for(var i=0, html; i<=last; i++) {
		if(now == i) html = '<span class="pager fas fa-circle"></span>';
		else html = '<span class="pager far fa-circle"></span>';
		$(".pagers").append(html);
	}
	$(".pager").click(onPagerClick);
}

// animate
function ani(tar) {
	$(".pager").removeClass("fas").addClass("far");
	$(".pager").eq(now).removeClass("far").addClass("fas");
	$(".ban-wrap").stop().animate({"left": tar}, 300, function(){
		init();
		$(this).css("left", "-100%");
	});
}


