import CinemaZoom from '../../dist/cinemaZoom';

let images = document.querySelectorAll('.js-image');
images.forEach(image => {
	new CinemaZoom(image, {
		duration: 350
	});
});