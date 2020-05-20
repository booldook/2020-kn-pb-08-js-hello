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

init();

/******** 사용자정의 함수 ********/
function init() {
	for(var i=0, depth=1000; i<=last; i++) {
		idx[i] = depth;
		$(".ban").eq(i).css("z-index", depth--);
	}
	console.log(idx);
}

/******** 이벤트 등록 ********/


/******** 이벤트 콜백함수 ********/