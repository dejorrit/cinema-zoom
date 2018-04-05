require('./../css/main.scss');
import Animation from './Animation';

const defaults = {
	duration: 350,
	animate: true,
	zoom: true,
	pinch: true,
	leaveOnScroll: true,
	backgroundOpacity: 0.75,
};

module.exports = class {

	constructor(element, options = {}) {
		this.original = element;
		this.image = null;

		this.options = Object.assign({}, defaults, options);

		this.prepareElements();

		// binds
		this._enter = this.enter.bind(this);
		this._leave = this.leave.bind(this);

		// eventListeners
		this.original.addEventListener('click',   this._enter, true);
		this.background.addEventListener('click', this._leave, true);
	}

	prepareElements() {
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

		let imageRatio = fromH / fromW;
		let windowRatio = windowHeight / windowWidth;
		let toX, toY, toW, toH;

		if (imageRatio > windowRatio) {
			toW = (windowHeight - 60) / imageRatio;
			toH = (windowHeight - 60);
			toX = (windowWidth - toW) / 2;
			toY = 30;
		} else {
			toW = (windowWidth - 60);
			toH = (windowWidth - 60) * imageRatio;
			toX = 30;
			toY = (windowHeight - toH) / 2;
		}

		new Animation(this.clone, 'left',   'px', fromX, window.scrollX + toX, this.options.duration, 'inOutSine');
		new Animation(this.clone, 'top',    'px', fromY, window.scrollY + toY, this.options.duration, 'inOutSine');
		new Animation(this.clone, 'width',  'px', fromW, toW, this.options.duration, 'inOutSine');
		new Animation(this.clone, 'height', 'px', fromH, toH, this.options.duration, 'inOutSine');

		// animate background opacity
		new Animation(this.background, 'opacity', '', 0, this.options.backgroundOpacity, this.options.duration / 2, 'inOutSine');
	}

	animateCloneToOriginalSize() {
		let clone    = getPositionAndDimensionsOfElement(this.clone);
		let original = getPositionAndDimensionsOfElement(this.original);

		new Animation(this.clone, 'left',   'px', clone.x,      original.x,      this.options.duration, 'inOutSine');
		new Animation(this.clone, 'top',    'px', clone.y,      original.y,      this.options.duration, 'inOutSine');
		new Animation(this.clone, 'width',  'px', clone.width,  original.width,  this.options.duration, 'inOutSine');
		new Animation(this.clone, 'height', 'px', clone.height, original.height, this.options.duration, 'inOutSine');

		// animate background opacity
		new Animation(this.background, 'opacity', '', this.options.backgroundOpacity, 0, this.options.duration, 'inOutSine');
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

function getPositionAndDimensionsOfElement(element) {
	let rect = element.getBoundingClientRect();

	return {
		x: rect.left + window.scrollX,
		y: rect.top  + window.scrollY,
		width:  element.offsetWidth,
		height: element.offsetHeight
	}
}

function getWindowHeight() {
	return window.innerHeight;
}

function getWindowWidth() {
	return window.innerWidth;
}