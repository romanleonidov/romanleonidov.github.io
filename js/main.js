$(document).ready(function(){

	$('.next').click(function(){
		var currentImage = $('.img.curry');
		var currentImageIndex = $('.img.curry').index();
		var nextImageIndex = currentImageIndex + 1;
		var nextImage = $('.img').eq(nextImageIndex);
		currentImage.fadeOut(3000);
		currentImage.removeClass('curry');

		if(nextImageIndex == ($('.img:last').index()+1)){
			$('.img').eq(0).fadeIn(3000);
			$('.img').eq(0).addClass('curry');
		} else{
			nextImage.fadeIn(3000);
			nextImage.addClass('curry');
		}
	});

	$('.prev').click(function(){
		var currentImage = $('.img.curry');
		var currentImageIndex = $('.img.curry').index();
		var prevImageIndex = currentImageIndex - 1;
		var prevImage = $('.img').eq(prevImageIndex);

		currentImage.fadeOut(3000);
		currentImage.removeClass('curry');
		prevImage.fadeIn(3000);
		prevImage.addClass('curry');
	});

});