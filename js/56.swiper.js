var mySwiper = new Swiper('.swiper-container', {
	speed: 500,
	autoHeight: true,
	/*
	effect: "fade",
	fadeEffect: {
    crossFade: true
	},
	*/
	autoplay: {
		delay: 2000, 
	},
	loop: true,
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	on: {
		slideChange: function(obj){
			console.log(obj.realIndex);
			// console.log(obj);
		}
	}
});

$(".swiper-container").hover(function(){
	mySwiper.autoplay.stop();
}, function(){
	mySwiper.autoplay.start();
});