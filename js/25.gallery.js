/* <div class="thumb">
	<img src="../img/p1.jpg" alt="썸네일" class="img thumb-img">
</div> */

/*************** 사전지식 ***************/
// $(html).appendTo(".thumbs") 	// return $(".thumb")
// $(".thumbs").append(html)		// return $(".thumbs")


/*************** 전역변수 ***************/
var data = [
	{src: "../img/p1.jpg", title: "그림1"},
	{src: "../img/p2.jpg", title: "그림2"},
	{src: "../img/p3.jpg", title: "그림3"},
	{src: "../img/p4.jpg", title: "그림4"},
	{src: "../img/p5.jpg", title: "그림5"},
	{src: "../img/p6.jpg", title: "그림6"},
	{src: "../img/p7.jpg", title: "그림7"},
	{src: "../img/p8.jpg", title: "그림8"},
];
var last = data.length;
var thumbWidth = 100/last - 1 + "%"; // 11.5%
init();

/*************** 사용자 지정 ***************/
function init() {
	for(var i=0, html; i<last; i++) {
		html  = '<div class="thumb" style="width: '+thumbWidth+';">';
		html += '<img src="'+data[i].src+'" class="img thumb-img">';
		html += '</div>';
		$(html).appendTo(".thumbs").click(onThumbClick);
	}
	$(".thumb").eq(0).trigger("click");
}

/*************** 이벤트 콜백 ***************/
function onThumbClick() {
	var $thumb = $(this);	// 클릭된 .thumb
	$(".thumb").removeClass("active");
	$thumb.addClass("active");
	$(".big-img").stop().fadeOut(200, function() {
		$(this).attr("src", $thumb.find("img").attr("src")).fadeIn(400);
	});
}

function onBigClick() {
	$(".modal-img").attr("src", $(this).attr("src"));
	$(".modal-wrap").stop().fadeIn(300);
}

function onModalClose() {
	$(".modal-wrap").stop().fadeOut(300);
}


/*************** 이벤트 등록 ***************/
$(".big-img").click(onBigClick);
$(".bt-close").click(onModalClose);