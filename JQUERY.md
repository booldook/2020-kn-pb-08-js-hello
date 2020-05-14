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

<script>
$(".navi").eq(0) // <div class="navi">Menu1</div>
$(".navi").eq(1) // <div class="navi">Menu2</div>
$(".navi").eq(2) // <div class="navi">Menu3</div>
</script>
```