/* 사전지식 */
// Math.random() => 0 ~ 1보다 작은 실수 0.2314532153245
// Math.round(4.4) => 4	반올림
// Math.round(4.6) => 5
// Math.ceil(4.2) => 5 올림
// Math.floor(4.7) => 4 버림
// 문제 (0 ~ 255)사이의 정수를 랜덤하게 만드시오.
// 1. Math.random() * 255 => 0 ~ 254.234789239084
// 2. Math.ceil(Math.random() * 255) => 0 ~ 255
var r, g, b;
/* for(var i=0; i<$(".box").length; i++) {
	r = Math.ceil(Math.random() * 255);
	g = Math.ceil(Math.random() * 255);
	b = Math.ceil(Math.random() * 255);
	$(".box").eq(i).css('background-color', 'rgb('+r+','+g+','+b+')');
} */

$(".box").each(function(){
	r = Math.ceil(Math.random() * 255);
	g = Math.ceil(Math.random() * 255);
	b = Math.ceil(Math.random() * 255);
	$(this).css('background-color', 'rgb('+r+','+g+','+b+')');
});

$("#bt1").click(function(){
	$("#box1").hide();
});
$("#bt2").click(function(){
	$("#box1").show();
});
$("#bt3").click(function(){
	$("#box1").toggle();
});

$("#bt4").click(function(){
	$("#box2").stop().hide(1000);
});
$("#bt5").click(function(){
	$("#box2").stop().show(1000);
});
$("#bt6").click(function(){
	$("#box2").stop().toggle(1000);
});

$("#bt7").click(function(){
	$("#box3").stop().fadeOut("slow");
});
$("#bt8").click(function(){
	$("#box3").stop().fadeIn("fast");
});
$("#bt9").click(function(){
	$("#box3").stop().fadeToggle(2000);
});

$("#bt10").click(function(){
	$("#box4").stop().slideUp("slow");
});
$("#bt11").click(function(){
	$("#box4").stop().slideDown("fast");
});
$("#bt12").click(function(){
	$("#box4").stop().slideToggle(2000);
});

/*
$("#box5").stop().animate({css});
$("#box5").stop().animate({css}, speed);
$("#box5").stop().animate({css}, speed, function(){});
$("#box5").stop().animate({css}, speed, easing, function(){});
*/
$("#bt13").click(function(){
	$("#box5").stop().animate({"left": "1200px"}, 2000);
});
$("#bt14").click(function(){
	$("#box5").stop().animate({"left": "0"}, 500);
});

$("#bt15").click(function(){
	$("#box6").stop().animate({"left": "1200px", "top": "100px"}, 2000);
});
$("#bt16").click(function(){
	$("#box6").stop().animate({"left": 0, "top": 0}, 500);
});

$("#bt17").click(function(){
	$("#box7").stop().animate({"left": "1200px"}, 1000);
	$("#box8").stop().animate({"left": "1200px"}, 1000, "swing");
	$("#box9").stop().animate({"left": "1200px"}, 1000, "linear");
});
$("#bt18").click(function(){
	$("#box7").stop().animate({"left": 0}, 500);
	$("#box8").stop().animate({"left": 0}, 500);
	$("#box9").stop().animate({"left": 0}, 500);
});

// border-width: 1px; border-style: "solid"; border-color: red;
$("#bt19").click(function(){
	$("#box10").stop().animate({"left": "1200px", "border-width": "20px"}, 2000, function(){
		$(this).stop().animate({"top": "400px", "border-width": "2px"}, 1000, function(){
			$(this).stop().animate({"left": 0, "border-width": "30px"}, 2000, function(){
				$(this).stop().animate({"top": 0, "border-width": "10px"}, 1000);
			});
		});
	});
});

$("#bt20").click(function(){
	$("#box10").stop().animate({"left": 0, "top": 0}, 500);
});

// https://www.w3schools.com/jquery/eff_animate.asp  <== animation 가능 css