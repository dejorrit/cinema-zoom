require('./../css/main.scss');
import {
	linear,
	inQuad,
	outQuad,
	inOutQuad,
	inCube,
	outCube,
	inOutCube,
	inQuart,
	outQuart,
	inOutQuart,
	inQuint,
	outQuint,
	inOutQuint,
	inSine,
	outSine,
	inOutSine,
	inExpo,
	outExpo,
	inOutExpo,
	inCirc,
	outCirc,
	inOutCirc,
	inBack,
	outBack,
	inOutBack,
	inBounce,
	outBounce,
	inOutBounce,
	inElastic,
	outElastic,
	inOutElastic,
} from './easing';

const defaults = {
	duration: 350,
	animate: true,
	zoom: true,
	pinch: true,
	leaveOnScroll: true,
};

module.exports = class {

	constructor(element, options) {
		this.original = element;

		this.options = Object.assign({}, defaults, options);

		// add Zinch class to original
		this.original.classList.add('zinch__original');

		// prepare background element
		this.background = document.createElement('div');
		this.background.className = 'zinch__background';

		// prepare clone container
		this.clone = document.createElement('div');
		this.clone.className = 'zinch__clone';

		// prepare empty image tag
		this.image = document.createElement('img');
		this.image.className = 'zinch__image';
		this.clone.append(this.image);

		// binds
		this._enter = this.enter.bind(this);
		this._leave = this.leave.bind(this);

		// eventListeners
		this.original.addEventListener('click',   this._enter, true);
		this.background.addEventListener('click', this._leave, true);
	}

	hideOriginal() {
		this.original.style.visibility = 'hidden';
	}

	showOriginal() {
		this.original.style.visibility = 'visible';
	}

	enter() {
		this.addBackgroundToDocument();
		this.insertImageIntoClone();
		this.addCloneToDocument();
		this.positionCloneOverOriginal();
		this.animateCloneToCinemaModeSize();
		this.hideOriginal();

		setTimeout(() => {
			window.addEventListener('scroll', this._leave, true);
		}, this.options.duration);
	}

	leave() {
		window.removeEventListener('scroll', this._leave, true);
		this.animateCloneToOriginalSize();

		setTimeout(() => {
			this.showOriginal();
			this.removeBackgroundFromDocument();
			this.removeCloneFromDocument();
		}, this.options.duration);
	}

	insertImageIntoClone() {
		this.image.setAttribute('src', this.original.getAttribute('src'));
	}

	positionCloneOverOriginal() {
		let original = getPositionAndDimensionsOfElement(this.original);

		this.clone.style.left   = `${original.x}px`;
		this.clone.style.top    = `${original.y}px`;
		this.clone.style.width  = `${original.width}px`;
		this.clone.style.height = `${original.height}px`;
	}

	animateCloneToCinemaModeSize() {
		let clone = getPositionAndDimensionsOfElement(this.clone);
		let fromX = clone.x;
		let fromY = clone.y;
		let fromW = clone.width;
		let fromH = clone.height;

		let windowHeight = getWindowHeight();
		let windowWidth  = getWindowWidth();

		let ratio = fromH / fromW;
		let windowRatio = windowHeight / windowWidth;
		let toX, toY, toW, toH;

		if (ratio > windowRatio) {
			toW = (windowHeight - 60) / ratio;
			toH = (windowHeight - 60);
			toX = (windowWidth - toW) / 2;
			toY = 30;
		} else {
			toW = (windowWidth - 60);
			toH = (windowWidth - 60) * ratio;
			toX = 30;
			toY = (windowHeight - toH) / 2;
		}

		requestAnimationFrame(timestamp => {
			starttime = timestamp;
			animateToValue(timestamp, this.clone, 'left',   fromX, window.scrollX + toX, this.options.duration);
			animateToValue(timestamp, this.clone, 'top',    fromY, window.scrollY + toY, this.options.duration);
			animateToValue(timestamp, this.clone, 'width',  fromW, toW, this.options.duration);
			animateToValue(timestamp, this.clone, 'height', fromH, toH, this.options.duration);

			// animate background opacity
			animateToValue(timestamp, this.background, 'opacity', 0, .75, this.options.duration / 2);
		});
	}

	animateCloneToOriginalSize() {
		let clone = getPositionAndDimensionsOfElement(this.clone);
		let original = getPositionAndDimensionsOfElement(this.original);

		requestAnimationFrame(timestamp => {
			starttime = timestamp;
			animateToValue(timestamp, this.clone, 'left',   clone.x,      original.x,      this.options.duration);
			animateToValue(timestamp, this.clone, 'top',    clone.y,      original.y,      this.options.duration);
			animateToValue(timestamp, this.clone, 'width',  clone.width,  original.width,  this.options.duration);
			animateToValue(timestamp, this.clone, 'height', clone.height, original.height, this.options.duration);

			// animate background opacity
			animateToValue(timestamp, this.background, 'opacity', .75, 0, this.options.duration / 2);
		});
	}

	addCloneToDocument() {
		document.body.append(this.clone);
	}

	removeCloneFromDocument() {
		this.clone.parentNode.removeChild(this.clone);
	}

	addBackgroundToDocument() {
		document.body.append(this.background);
	}

	removeBackgroundFromDocument() {
		this.background.parentNode.removeChild(this.background);
	}

};

let starttime;
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

function getPositionAndDimensionsOfElement(element) {
	let rect = element.getBoundingClientRect();

	return {
		x: rect.left  + window.scrollX,
		y: rect.top + window.scrollY,
		width: element.offsetWidth,
		height: element.offsetHeight
	}
}

function getWindowHeight() {
	return window.innerHeight;
}

function getWindowWidth() {
	return window.innerWidth;
}