export function createElement(type, className) {
	let element = document.createElement(type);
	element.className = className;

	return element;
}

export function getPositionAndDimensionsOfElement(element) {
	let rect = element.getBoundingClientRect();

	return {
		x: rect.left + window.scrollX,
		y: rect.top  + window.scrollY,
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