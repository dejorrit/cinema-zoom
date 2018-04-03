import Zinch from '../../dist/zinch';

let images = document.querySelectorAll('.js-image');
images.forEach(image => {
	new Zinch(image, {});
});