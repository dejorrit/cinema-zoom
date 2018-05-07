import AnimateElement from 'animate-element';
import {createElement, getPositionAndDimensionsOfElement, getWindowHeight, getWindowWidth} from './Utils.js'

module.exports = class {

	constructor(element, options, initiator) {
		this.original  = element;
		this.options   = options;
		this.initiator = initiator;
		this.image     = null;

		this.prepareElements();

		this._zoomIn  = this.zoomIn.bind(this);
		this._zoomOut = this.zoomOut.bind(this);

		this.original.addEventListener('click',   this._zoomIn, true);
		this.background.addEventListener('click', this._zoomOut, true);
	}

	prepareElements() {
		this.original.classList.add('cinema-zoom__original');
		this.background = createElement('div', 'cinema-zoom__background');
		this.clone = createElement('div', 'cinema-zoom__clone');
		this.image = createElement('img', 'cinema-zoom__image');
		this.clone.append(this.image);
	}

	hideOriginal() {
		this.original.style.visibility = 'hidden';
	}

	showOriginal() {
		this.original.style.visibility = 'visible';
	}

	zoomIn() {
		this.insertImageIntoClone();
		this.addBackgroundToDocument();
		this.addCloneToDocument();
		this.positionCloneOverOriginal();
		this.animateCloneToCinemaModeSize();
		this.hideOriginal();

		window.addEventListener('scroll', this._zoomOut, true);
		window.addEventListener('resize', this._zoomOut, true);

		// callbacks
		this.initiator.runCallback('zoomInStart');
		this.initiator.runCallback('zoomInComplete', this.options.duration);
	}

	zoomOut() {
		window.removeEventListener('resize', this._zoomOut, true);
		window.removeEventListener('scroll', this._zoomOut, true);
		this.animateCloneToOriginalSize();

		setTimeout(() => {
			this.showOriginal();
			this.removeBackgroundFromDocument();
			this.removeCloneFromDocument();
		}, this.options.duration);

		// callbacks
		this.initiator.runCallback('zoomOutStart');
		this.initiator.runCallback('zoomOutComplete', this.options.duration);
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
		new AnimateElement(this.clone, this.getDestinationPositionAndCoordinates(), {
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

	getDestinationPositionAndCoordinates() {
		let toW = this.original.naturalWidth,
				toH = this.original.naturalHeight,
				imageRatio = toH / toW,
				padding = this.options.padding * 2;

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

		return {
			top:    window.scrollY + toY,
			left:   window.scrollX + toX,
			width:  toW,
			height: toH,
		}
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