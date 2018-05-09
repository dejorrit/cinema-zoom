export function createElement(type, className) {
	let element = document.createElement(type);
	element.className = className;

	return element;
}

export function getPositionAndDimensionsOfElement(element) {
	let rect = element.getBoundingClientRect();

	return {
		x: rect.left + getScrollX(),
		y: rect.top  + getScrollY(),
		width:  element.offsetWidth,
		height: element.offsetHeight
	}
}

export function getWindowHeight() {
	return window.innerHeight;
}

export function getWindowWidth() {
	return window.innerWidth;
}

export function getScrollX() {
	return (window.pageXOffset !== undefined)
			? window.pageXOffset
			: (document.documentElement || document.body.parentNode || document.body).scrollLeft;
}

export function getScrollY() {
	return (window.pageYOffset !== undefined)
			? window.pageYOffset
			: (document.documentElement || document.body.parentNode || document.body).scrollTop;
}