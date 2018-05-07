require('./../css/main.scss');
import AnimateElement from 'animate-element';
import {createElement, getPositionAndDimensionsOfElement, getWindowHeight, getWindowWidth} from './Utils.js'

const defaults = {
	duration: 450,
	padding: 20,
	backgroundOpacity: 0.95,
	largeImage: false,
};

module.exports = class {

	constructor(element, options = {}) {
		this.original  = element;
		this.image     = null;
		this.callbacks = new Map();
		this.options   = Object.assign({}, defaults, options);

		this.createElements();

		this._onClickOriginal   = this.onClickOriginal.bind(this);
		this._onClickBackground = this.onClickBackground.bind(this);

		this.original.addEventListener('click',   this._onClickOriginal,  true);
		this.background.addEventListener('click', this._onClickBackground, true);
	}

	createElements() {
		this.background = createElement('div', 'cinema-zoom__background');
		this.clone      = createElement('div', 'cinema-zoom__clone');

		this.original.classList.add('cinema-zoom__original');
	}

	onClickOriginal() {
		if (!this.image) {
			this.createAndLoadImage().then(() => {
				this.clone.append(this.image);
				this.zoomIn();
			}).catch(() => {
				throw new Error('Error loading large version of image');
			});
		} else {
			this.zoomIn();
		}
	}

	onClickBackground() {
		this.zoomOut();
	}

	hideOriginal() {
		this.original.style.visibility = 'hidden';
	}

	showOriginal() {
		this.original.style.visibility = 'visible';
	}

	createAndLoadImage() {
		this.runCallback('imageLoadStart');

		return new Promise((resolve, reject) => {
			this.image = new Image();
			this.image.className = 'cinema-zoom__image';

			this.image.onload = () => {
				this.runCallback('imageLoadComplete');
				resolve();
			};

			this.image.onerror = () => {
				this.runCallback('imageLoadError');
				reject();
			};

			this.image.src = this.options.largeImage;
		});
	}

	zoomIn() {
		this.runCallback('zoomInStart');

		this.hideOriginal();

		this.addBackgroundToDocument();
		this.animateBackgroundToVisible();

		this.addCloneToDocument();
		this.positionCloneOverOriginal();
		this.animateCloneToCinemaModeSize();

		setTimeout(() => {
			this.runCallback('zoomInComplete');

			// cleanup event listeners
			window.addEventListener('scroll', this._onClickBackground, true);
			window.addEventListener('resize', this._onClickBackground, true);
		}, this.options.duration);
	}

	zoomOut() {
		this.runCallback('zoomOutStart');
		this.animateBackgroundToInvisible();
		this.animateCloneToOriginalSize();

		setTimeout(() => {
			this.showOriginal();
			this.removeBackgroundFromDocument();
			this.removeCloneFromDocument();

			this.runCallback('zoomOutComplete');
		}, this.options.duration);

		// cleanup event listeners
		window.removeEventListener('resize', this._onClickBackground, true);
		window.removeEventListener('scroll', this._onClickBackground, true);
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
	}

	animateBackgroundToVisible() {
		new AnimateElement(this.background, {
			opacity: this.options.backgroundOpacity,
		}, {
			duration: this.options.duration,
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
			easing: false,
			duration: this.options.duration,
		});
	}

	animateBackgroundToInvisible() {
		new AnimateElement(this.background, {
			opacity: 0,
		}, {
			duration: this.options.duration,
		});
	}

	getDestinationPositionAndCoordinates() {
		let width  = this.image.naturalWidth;
		let height = this.image.naturalHeight;
		let imageRatio = height / width;
		let padding = this.options.padding * 2;

		// scale down if the image is wider than the window
		if (width > getWindowWidth() - padding) {
			width  = getWindowWidth() - padding;
			height = width * imageRatio;
		}

		// scale down if the image is higher than the window
		if (height > getWindowHeight() - padding) {
			height = getWindowHeight() - padding;
			width  = height / imageRatio;
		}

		// center coordinates
		let left = (getWindowWidth()  - width)  / 2;
		let top  = (getWindowHeight() - height) / 2;

		return {
			top:  window.scrollY + top,
			left: window.scrollX + left,
			width,
			height,
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

	// register events
	on(event, callback) {
		this.callbacks.set(event, callback);
	}

	// remove registered events
	off(event) {
		if (this.callbacks.has(event)) {
			this.callbacks.delete(event);
		}
	}

	// running callbacks
	runCallback(eventName, delay = 0) {
		if (this.callbacks.has(eventName) && typeof this.callbacks.get(eventName) === 'function') {
			if (delay > 0) {
				setTimeout(() => {
					this.callbacks.get(eventName)();
				}, delay);
			} else {
				this.callbacks.get(eventName)();
			}
		}
	}

};