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
</script>
```