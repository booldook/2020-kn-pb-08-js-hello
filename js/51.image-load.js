/*
function onResize(){
	$(".wrapper").innerHeight(	$(".wrapper img").innerHeight()	);
}
$(window).resize(onResize).trigger("resize");
$(".wrapper").imagesLoaded(onResize);
*/

$("img").each(function(){
	$(this).parent().append('<i class="fa fa-spin fa-spinner fa-2x"></i>');
});

for(var i=0; i<$("img").length; i++) {
	$("img").eq(i).parent().append('<i class="fa fa-spin fa-spinner fa-2x"></i>');
}

$(".wrapper > div").imagesLoaded(onImagesLoaded);
function onImagesLoaded() {
	$(this).find(".fa-spin").hide();
}