/************** 전역선언 **************/
var cnt = 0;			// 선수 개수
var result = [];	// 결과가 담길 배열
var users = ["황은혜", "이금주", "유은서", "고태윤", "원아영", "김재혁", "서혜원", "윤여준", "김경아", "전예지", "백수정"];
//var users = ["조영래", "김일권", "임수비", "이다원", "최다솜", "이승주", "이보경"];


/************** 사용자함수 **************/



/************** 이벤트콜백 **************/
function onReady() {
	cnt = Number($(".bts").find("input[name='cnt']").val());
	$(".wrapper").empty();
	for(var i=0, html; i<cnt; i++) {
		html  = '<div class="man">';
		html += '<img src="../img/run.png" class="img">';
		html += '<div class="name">'+users[i]+'</div>';
		html += '</div>';
		$(html).appendTo(".wrapper").find("img").css("animation-play-state", "paused");
	}
	$(".bt-ready").hide();
	$(".bt-start").show();
}

function onStart() {
	result = [];
	$(".bt-start").hide();
	$(".bt-reset").hide();
	$(".man").each(function(){
		$(this).find("img").css("animation-play-state", "running");
		var speed = Math.random() * 300 + 3000;
		$(this).stop().animate({"left": "500px"}, speed, "linear", function(){
			var speed = Math.random() * 400 + 2000;
			$(this).stop().animate({"left": "1000px"}, speed, "linear", function(){
				var speed = Math.random() * 500 + 2000;
				$(this).stop().animate({"left": "1400px"}, speed, "linear", function(){
					result.push(	$(this).index()	);
					if(result.length == cnt) {
						$(".score-tb > tbody").empty();
						for(var i=0, html; i<result.length; i++) {
							html  = '<tr>';
							html += '<td class="score"><b>'+(i+1)+'</b>등</td>';
							html += '<td class="name">'+$(".man").eq(result[i]).find(".name").html()+'</td>';
							html += '</tr>';
							$(".score-tb > tbody").append(html);
						}
						$(".modal-wrap").stop().fadeIn(500);
						$(".bt-reset").show();
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

