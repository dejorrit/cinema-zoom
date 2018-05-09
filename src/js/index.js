require('./../css/main.scss');
import AnimateElement from './../../../animate-element/dist/animate-element';
import {
	createElement,
	getPositionAndDimensionsOfElement,
	getWindowHeight,
	getWindowWidth,
	getScrollX,
	getScrollY
} from './Utils.js'

const defaults = {
	duration: 250,
	padding: 60,
	backgroundOpacity: 0.95,
	zoomOutOnScroll: true,
};

module.exports = class {

	constructor(element, options = {}) {
		this.original  = element;
		this.image     = null;
		this.callbacks = new Map();
		this.options   = Object.assign({}, defaults, options);

		this.createElements();

		this._onClickOriginal   = this.onClickOriginal.bind(this);
		this._zoomOut = this.zoomOut.bind(this);

		this.original.addEventListener('click',   this._onClickOriginal,  true);
		this.background.addEventListener('click', this._zoomOut, true);
	}

	createElements() {
		this.background = createElement('div', 'cinema-zoom__background');
		this.clone      = createElement('div', 'cinema-zoom__clone');
		this.caption    = createElement('div', 'cinema-zoom__caption');
		this.caption.innerHTML = this.original.getAttribute('title');

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

			this.image.src = this.original.dataset.cinemaZoom;
		});
	}

	async zoomIn() {
		this.runCallback('zoomInStart');
		this.addElementsToDocumentBody();
		this.positionCloneOnOriginal();
		this.hideOriginal();

		await Promise.all([
			this.animateBackgroundIn(),
			this.animateCloneIn(),
			this.animateCaptionIn(),
		]).then(() => {
			this.runCallback('zoomInComplete');
			window.addEventListener('scroll', this._zoomOut, true);
			window.addEventListener('resize', this._zoomOut, true);
		});
	}

	async zoomOut() {
		this.runCallback('zoomOutStart');

		// cleanup event listeners
		window.removeEventListener('resize', this._zoomOut, true);
		window.removeEventListener('scroll', this._zoomOut, true);

		await Promise.all([
			this.animateBackgroundOut(),
			this.animateCloneOut(),
			this.animateCaptionOut(),
		]).then(() => {
			this.runCallback('zoomOutComplete');
			this.removeElementsFromDocumentBody();
			this.showOriginal();
		});
	}

	positionCloneOnOriginal() {
		let original = getPositionAndDimensionsOfElement(this.original);

		this.clone.style.left   = `${original.x}px`;
		this.clone.style.top    = `${original.y}px`;
		this.clone.style.width  = `${original.width}px`;
		this.clone.style.height = `${original.height}px`;
	}

	animateCloneIn() {
		return new AnimateElement(this.clone, this.getDestinationPositionAndCoordinates(), {
			easing: true,
			duration: this.options.duration,
		});
	}

	animateCloneOut() {
		let original = getPositionAndDimensionsOfElement(this.original);

		return new AnimateElement(this.clone, {
			top:    original.y,
			left:   original.x,
			width:  original.width,
			height: original.height,
		}, {
			easing: true,
			duration: this.options.duration,
		});
	}

	animateBackgroundIn() {
		return new AnimateElement(this.background, {
			opacity: this.options.backgroundOpacity,
		}, {
			duration: this.options.duration,
		});
	}

	animateBackgroundOut() {
		return new AnimateElement(this.background, {
			opacity: 0,
		}, {
			duration: this.options.duration,
		});
	}

	animateCaptionIn() {
		return new AnimateElement(this.caption, {
			bottom: 0,
		}, {
			easing: true,
			duration: this.options.duration,
		});
	}

	animateCaptionOut() {
		return new AnimateElement(this.caption, {
			bottom: -this.caption.offsetHeight,
		}, {
			easing: true,
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
			top:    Math.round(getScrollY() + top,  10),
			left:   Math.round(getScrollX() + left, 10),
			width:  Math.round(width, 10),
			height: Math.round(height, 10),
		}
	}

	addElementsToDocumentBody() {
		document.body.append(this.background);
		document.body.append(this.caption);
		document.body.append(this.clone);

		this.caption.style.bottom = `-${this.caption.offsetHeight}px`;
	}

	removeElementsFromDocumentBody() {
		this.background.parentNode.removeChild(this.background);
		this.caption.parentNode.removeChild(this.caption);
		this.clone.parentNode.removeChild(this.clone);
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