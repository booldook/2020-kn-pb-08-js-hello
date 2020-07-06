/**************** image loaded *****************/
for(var i=0; i<$(".img-loader").length; i++) {
	$(".img-loader").eq(i)
	.css("position", "relative")
	.append('<i class="fa fa-spin fa-spinner fa-2x" style="position: absolute; top: calc(50% - 16px); left: calc(50% - 16px);"></i>');
}

$(".img-loader").each(function(){
	$(this).imagesLoaded(function() {
		$(this.elements[0]).find(".fa-spin").remove();
	});
})

