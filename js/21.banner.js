/*
if(ban[1] == 0) ban[0] = last;
else ban[0] = ban[0] - 1;
ban[0] = ban[1] == 0 ? last : ban[0] - 1;
*/

/* 초기화 */
var $ban = $(".ban");
var last = $ban.length - 1;
var now = 0;
var ban = []; // [3, 0, 1] / [0, 1, 2] / [1, 2, 3] / [2, 3, 0]

init();

/* 이벤트 */
$(".bt-prev").click(onPrev);
$(".bt-next").click(onNext);

/* 이벤트 콜백 */
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

// animate
function ani(tar) {
	$(".ban-wrap").stop().animate({"left": tar}, 300, function(){
		init();
		$(this).css("left", "-100%");
	});
}


