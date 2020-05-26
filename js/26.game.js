/************** 전역선언 **************/
var cnt = 0;			// 선수 개수
var result = [];	// 결과가 담길 배열


/************** 사용자함수 **************/



/************** 이벤트콜백 **************/
function onReady() {
	cnt = Number($(".bts").find("input[name='cnt']").val());
	$(".wrapper").empty();
	for(var i=0, html; i<cnt; i++) {
		html  = '<div class="man">';
		html += '<img src="../img/run.png" class="img">';
		html += '<div class="name">홍길동</div>';
		html += '</div>';
		$(html).appendTo(".wrapper").find("img").css("animation-play-state", "paused");
	}
	$(".bt-ready").hide();
	$(".bt-start").show();
}

function onStart() {
	$(".man").each(function(){
		var speed = Math.random() * 300 + 3000;
		$(this).stop().animate({"left": "500px"}, speed, "linear", function(){
			var speed = Math.random() * 400 + 2000;
			$(this).stop().animate({"left": "1000px"}, speed, "linear", function(){
				var speed = Math.random() * 500 + 2000;
				$(this).stop().animate({"left": "1400px"}, speed, "linear", function(){
					result.push(	$(this).index()	);
					if(result.length == cnt) {
						$(".modal-wrap").stop().fadeIn(500);
					}
				});
			});
		});
	});
}

function onReset() {
	$(".wrapper").empty();
	$(".bts").find("input[name='cnt']").val('4');
	$(".bt-ready").show();
	$(".bt-start").hide();
}

function onClose() {
	$(".modal-wrap").hide();
	onReset();
}


/************** 이벤트선언 **************/
$(".bt-ready").click(onReady);
$(".bt-start").click(onStart);
$(".bt-reset").click(onReset);
$(".bt-close").click(onClose);

