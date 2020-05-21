# jQuery 정리
## 1. 사용하기 위한 준비
```html
<html>
<head>
	<!-- head안에서 선언 -->
	<script src='../js/jquery-3.5.1.min.js'></script>
</head>
<body>
	.
	.
	.
	<!-- body가 닫히기 전에 사용자의 js 위치 -->
	<script src='../js/my.js'></script>
</body>
</html>
```

## 2. 선택자
- $("css선택자")
```js
$("#id")
$(".class")
$("body")

$("body > div") == $("body").children("div") //자식선택자
$(".header .navi-wrap") == $(".header").find(".navi-wrap"); //자손선택자
$(".navi-wrap > :nth-child(1)")
```

```html
<header class="header">
	<div class="logo">LOGO</div>
	<div class="navi-wrap">
		<div class="navi">Menu1</div>
		<div class="navi">Menu2</div>
		<div class="navi">Menu3</div>
	</div>
</header>
<div class="lt-wrap">
	<div class="navi">Left Menu1</div>
	<div class="navi">Left Menu2</div>
	<div class="navi">Left Menu3</div>
</div>

<script>
$(".navi").eq(0) // <div class="navi">Menu1</div>
$(".navi").eq(1) // <div class="navi">Menu2</div>
$(".navi").eq(2) // <div class="navi">Menu3</div>
$(".navi").eq(3) // <div class="navi">Left Menu1</div>
$(".navi").eq(4) // <div class="navi">Left Menu2</div>
$(".navi").eq(5) // <div class="navi">Left Menu3</div>

$(".navi-wrap").find(".navi").eq(0)
$(".navi-wrap").find(".navi").eq(1)
$(".navi-wrap").find(".navi").eq(2)
$(".lt-wrap").find(".navi").eq(0)
$(".lt-wrap").find(".navi").eq(1)
$(".lt-wrap").find(".navi").eq(2)

$(".box").click(function(){
	var idx = $(this).index();	// .box중 click이벤트가 일어난 대상이 몇번째 eq인지 index값을 리턴한다. 
});
</script>
```

## 3. 이벤트

- **click**
```js
$("선택자").click(function(){
	
});
```

- **hover**
```js
$("선택자").hover(function(){
	// mouseover
}, function(){
	// mouseleave
});
```

- **mouseover**
```js
$("선택자").mouseover(function(){
	// mouseover
});
```

- **mouseleave**
```js
$("선택자").mouseleave(function(){
	// mouseleave
});
```

- **scroll**
```js
$("선택자").scroll(function(){
	// scroll이 일어나면...
});
```

- **resize**
```js
$("선택자").resize(function(){
	// 브라우저 창의 크기가 변하면...
});
```

- 이벤트를 실행하고 싶을 때
```js
$("선택자").click(function(){

});
$("선택자").trigger("click");
```

## 4. Animation
- **show(), hide(), toggle()** : width, height 늘렸다, 줄였다.
- **fadeIn(), fadeOut(), fadeToggle()** : opacity
- **slideUp(), slideDown(), slideToggle()** : height
- **사용예**
```js
$("선택자").stop().fadeIn(); // "slow"를 넣어주는 애니메이션
$("선택자").stop().fadeIn("fast"); // 빠르게
$("선택자").stop().fadeIn("slow"); // 느리게
$("선택자").stop().fadeIn(1000); // 1000ms(1s)
$("선택자").stop().fadeIn(1000, function(){
	// 애니메이션이 완료되면 실행되는 함수
});
```
- **$("선택자").stop().animate({css명령}, 속도(ms), "linear or swing", function(){})**
	* [사용가능CSS](https://www.w3schools.com/jquery/eff_animate.asp)

## 5. css()
- **$("선택자").css("color")**
- **$("선택자").css("color", "red")**
- **사용예**
```js
$(".box").css("color", "red"); 			// .box의 글씨 색상을 red로 지정
var color = $(".box").css("color");	// 변수 color에 "red"문자열이 대입(값을 가져옴)
$(".box").css({
	"color": "blue",
	"background-color": "yellow"
}); // 여러개의 css속성을 한번에 줄때
```

## 6. method와 function의 차이
```js
// function
function sum() {

}
var sub = function() {

}

// method - 객체가 가지고 있는 함수
var util = {}; 	// util Object(객체)
var util = []; 	// util2 Array(배열)
var util = {
	zeroPlus: function(n) {
		if(n < 10) {
			return "0"+n;
		}
		else {
			return n;
		}
	}
}
util.zeroPlus(8);			// 08
util.zeroPlus(11);		// 11
```

## 7. class 관련 메서드
- **$("선택자").addClass("클래스명")**		: 객체에 클래스를 추가한다.
- **$("선택자").removeClass("클래스명")**	: 객체에 클래스를 삭제한다.
- **$("선택자").toggleClass("클래스명")**	: 클래스가 있으면 삭제, 없으면 추가
- **$("선택자").hasClass("클래스명")**    : 객체가 클래스를 가지고 있는지 평가
- **$("선택자").addClass("클래스명1 클래스명2 클래스명3 ...")**    
	: 여러개의 클래스를 한번에 지정할수도 있다.

```html
<div class="box active">

</div>
<script>
if($(".box").hasClass("active")) {
	// .box가 active class를 가지고 있으므로 true가 반환되어, 여기가 실행된다.
}
else {
	// .box가 active class를 가지고 있지 않으면 false가 반환된다.
}
</script>
```

## 8. Getter/Setter가 존재하는 메서드들

### 1. css()
- var color = css("color");	Getter(return값이 있는 메서드)
- css("color", "red");	Setter
- css({"color": "red", border: "1px solid blue"});	Setter

### 2. attr()
- var id = $(".result").attr("id");
- $(".result").attr("id", "wrapper");