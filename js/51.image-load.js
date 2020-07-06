/*
function onResize(){
	$(".wrapper").innerHeight(	$(".wrapper img").innerHeight()	);
}
$(window).resize(onResize).trigger("resize");
$(".wrapper").imagesLoaded(onResize);
*/

/* $("img").each(function(i){
	$(this).parent().append('<i class="fa fa-spin fa-spinner fa-2x"></i>');
}); */



// callback
function hap(x, y, fn) {
	fn(x + y);
}
hap(10, 20, function(hap){
	console.log(hap);
});