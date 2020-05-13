/*
<div class="list">
	<img src="../img/p1.jpg" alt="p1.jpg" class="photo img">
	<div class="photo-desc">그림 설명</div>
</div>
*/
var lists = [];
lists[0] = {
	title: "그림1",
	img: '../img/p1.jpg'
}
lists[1] = {
	title: "그림2",
	img: '../img/p2.jpg'
}
lists[2] = {
	title: "그림3",
	img: '../img/p3.jpg'
}
lists[3] = {
	title: "그림4",
	img: '../img/p4.jpg'
}
lists[4] = {
	title: "그림5",
	img: '../img/p5.jpg'
}
lists[5] = {
	title: "그림6",
	img: '../img/p6.jpg'
}
lists[6] = {
	title: "그림7",
	img: '../img/p7.jpg'
}
lists[7] = {
	title: "그림8",
	img: '../img/p8.jpg'
}

$("#btMake").click(function(){
	for(var i=0; i<lists.length; i++) {
		insertData(lists[i]);
	}
});

$("#btRemove").click(function(){
	$(".lists").empty();
});

function insertData(data) {
	var html = '';
	html += '<div class="list">';
	html += '	<img src="'+data.img+'" alt="그림" class="photo img">';
	html += '	<div class="photo-desc">'+data.title+'</div>';
	html += '</div>';
	$(".lists").append(html);
}