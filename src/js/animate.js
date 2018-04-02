import {inOutSine} from './easing';

let starttime;

export default function animate(element, property, from, to, duration) {
	requestAnimationFrame(timestamp => {
		starttime = timestamp;

		animateToValue(timestamp, element, property, from, to, duration);
	});
}

function animateToValue(timestamp, element, property, from, to, duration) {
	timestamp = timestamp || new Date().getTime();

	let runtime, progress, value;

	runtime = timestamp - starttime;
	progress = Math.min(runtime / duration, 1);

	if (property === 'opacity') {
		value = from + ((to - from) * progress);
		element.style[property] = value;
	} else {
		value = from + ((to - from) * inOutSine(progress)); // easing
		element.style[property] = value + 'px';
	}

	if (runtime < duration) {
		requestAnimationFrame((timestamp) => {
			animateToValue(timestamp, element, property, from, to, duration);
		});
	}
}