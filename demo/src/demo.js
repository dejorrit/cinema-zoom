import CinemaZoom from '../../dist/cinemaZoom';

let images = document.querySelectorAll('.js-image');
images.forEach(image => {
	new CinemaZoom(image, {
		largeImage: image.dataset.largeSrc,
		duration: 550
	});
});