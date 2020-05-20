/******** 사전지식 ********/
var arr = [1000, 999, 998, 997];
// 1. 배열의 맨 뒤의 값을 꺼내기
var temp = arr.pop();
console.log(arr, temp);

// 2. 배열의 맨 뒤의 값을 넣기
arr.push(997);
console.log(arr);

// 3. 배열의 맨 앞에서 값을 꺼내기
temp = arr.shift();
console.log(arr, temp); 

// 3. 배열의 맨 앞에서 값을 넣기
arr.unshift(1000);
console.log(arr); 



/*
- bt-next click
1. opacity: 1 -> 0
2. 애니메이션이 끝나면 z-index를 내려준다.

- bt-prev click
1. opacity: 0, z-index를 높여준다.
2. opacity: 0 -> 1
*/

var now = 0;
var last = $(".ban").length - 1;
var idx = [];
var speed = 500;
var gap = 3000;
var interval;
init();
pagerMaker();

/******** 사용자정의 함수 ********/
function init() {
	for(var i=0, depth=1000; i<=last; i++) {
		idx[i] = depth;
		$(".ban").eq(i).css("z-index", depth--);
	}
}

function pagerMaker() {
	for(var i=0, html; i<=last; i++) {
		if(now == i) html = '<span class="pager fas fa-circle"></span>';
		else html = '<span class="pager far fa-circle"></span>';
		$(".pagers").append(html);
	}
	$(".pager").click(onPagerClick);
}

function pagerChg() {
	$(".pager").removeClass("fas").addClass("far");
	$(".pager").eq(now).removeClass("far").addClass("fas");
}

/******** 이벤트 등록 ********/
$(".bt-prev").click(onPrev);
$(".bt-next").click(onNext);
$(".wrapper").hover(onHover, onLeave);
interval = setInterval(onNext, gap);

/******** 이벤트 콜백함수 ********/
function onPagerClick() {
	now = $(this).index();
	pagerChg();
	idx.pop();
	idx.unshift(idx[0] + 1);
	$(".ban").eq(now).css({
		"opacity": 0,
		"z-index": idx[0]
	});
	$(".ban").eq(now).stop().animate({"opacity": 1}, speed);
}

function onHover(){
	clearInterval(interval);
}

function onLeave(){
	interval = setInterval(onNext, gap);
}

function onPrev() {
	now = (now == 0) ? last : now - 1;
	pagerChg();
	idx.pop();
	idx.unshift(idx[0] + 1);
	$(".ban").eq(now).css({
		"opacity": 0,
		"z-index": idx[0]
	});
	$(".ban").eq(now).stop().animate({"opacity": 1}, speed);
}

function onNext() {
	var old = now;
	now = (now == last) ? 0 : now + 1;
	pagerChg();
	$(".ban").eq(old).stop().animate({"opacity": 0}, speed, function(){
		idx.shift(); // 4 -> 3 (0, 1, 2)
		idx.push(idx[last - 1] - 1);
		$(this).css({
			"opacity": 1,
			"z-index": idx[last]
		});
	});
}