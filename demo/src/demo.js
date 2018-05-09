import CinemaZoom from '../../dist/cinemaZoom';

let images = document.querySelectorAll('[data-cinema-zoom]');
images.forEach(image => {
	let zoom = new CinemaZoom(image);

	// zoom.on('imageLoadStart',    () => console.log('imageLoadStart'));
	// zoom.on('imageLoadComplete', () => console.log('imageLoadComplete'));
	// zoom.on('zoomInStart',       () => console.log('zoomInStart'));
	// zoom.on('zoomOutStart',      () => console.log('zoomOutStart'));
	// zoom.on('zoomInComplete',    () => console.log('zoomInComplete'));
	// zoom.on('zoomOutComplete',   () => console.log('zoomOutComplete'));
});