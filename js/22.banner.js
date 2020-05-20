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

init();

/******** 사용자정의 함수 ********/
function init() {
	for(var i=0, depth=1000; i<=last; i++) {
		idx[i] = depth;
		$(".ban").eq(i).css("z-index", depth--);
	}
}

/******** 이벤트 등록 ********/


/******** 이벤트 콜백함수 ********/