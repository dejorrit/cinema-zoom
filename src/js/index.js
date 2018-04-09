require('./../css/main.scss');
import AnimateElement from 'animate-element';

const defaults = {
	duration: 450,
	padding: 20,
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
		this.insertImageIntoClone();
		this.addBackgroundToDocument();
		this.addCloneToDocument();
		this.positionCloneOverOriginal();
		this.animateCloneToCinemaModeSize();
		this.hideOriginal();

		window.addEventListener('scroll', this._leave, true);
		window.addEventListener('resize', this._leave, true);
	}

	leave() {
		window.removeEventListener('resize', this._leave, true);
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
		let toW = this.original.naturalWidth,
				toH = this.original.naturalHeight,
				imageRatio = toH / toW,
				padding = (this.options.padding * 2);

		// scale down if the image is wider than the window
		if (toW > getWindowWidth() - padding) {
			toW = getWindowWidth() - padding;
			toH = toW * imageRatio;
		}

		// scale down if the image is higher than the window
		if (toH > getWindowHeight() - padding) {
			toH = getWindowHeight() - padding;
			toW = toH / imageRatio;
		}

		// center coordinates
		let toX = (getWindowWidth()  - toW) / 2,
				toY = (getWindowHeight() - toH) / 2;

		new AnimateElement(this.clone, {
			top:    window.scrollY + toY,
			left:   window.scrollX + toX,
			width:  toW,
			height: toH,
		}, {
			easing: true,
			duration: this.options.duration,
		});

		new AnimateElement(this.background, {
			opacity: this.options.backgroundOpacity,
		}, {
			duration: this.options.duration / 2,
		});
	}

	animateCloneToOriginalSize() {
		let original = getPositionAndDimensionsOfElement(this.original);

		new AnimateElement(this.clone, {
			top:    original.y,
			left:   original.x,
			width:  original.width,
			height: original.height,
		}, {
			easing: true,
			duration: this.options.duration,
		});

		new AnimateElement(this.background, {
			opacity: 0,
		}, {
			duration: this.options.duration,
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