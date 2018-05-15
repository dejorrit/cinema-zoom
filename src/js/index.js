require('./../css/main.scss');

import AnimateElement from './animate-element';
import {
	createElement,
	getPositionAndDimensionsOfElement,
	getWindowHeight,
	getWindowWidth,
	getScrollX,
	getScrollY
} from './utils.js';

const PADDING = 10;
const TRANSITION_DURATION = 300;
const BACKGROUND_OPACITY  = 1;

class CinemaZoom {

	constructor(element) {
		this.original  = element;
		this.image     = null;

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
		this.image      = createElement('img', 'cinema-zoom__image');

		this.clone.appendChild(this.image);

		if (this.original.getAttribute('title')) {
			this.caption.innerHTML = this.original.getAttribute('title');
		}

		this.original.classList.add('cinema-zoom__original');
	}

	onClickOriginal() {
		this.loadLargeImage().then(() => {
			this.zoomIn();
		}).catch(() => {
			throw new Error('Error loading large version of image');
		});
	}

	hideOriginal() {
		this.original.style.visibility = 'hidden';
	}

	showOriginal() {
		this.original.style.visibility = 'visible';
	}

	loadLargeImage() {
		return new Promise((resolve, reject) => {
			if (this.image.src) {
				resolve();
				return;
			}

			this.image.onload = () => {
				resolve();
			};

			this.image.onerror = () => {
				reject();
			};

			this.image.src = this.original.getAttribute('data-cz-zoom');
		});
	}

	async zoomIn() {
		this.addElementsToDocumentBody();
		this.positionCloneOnOriginal();
		this.hideOriginal();

		await Promise.all([
			this.animateBackgroundIn(),
			this.animateCloneIn(),
			this.animateCaptionIn(),
		]).then(() => {
			window.addEventListener('resize', this._zoomOut, true);
			window.addEventListener('scroll', this._zoomOut, true);
		});
	}

	async zoomOut() {
		// cleanup event listeners
		window.removeEventListener('resize', this._zoomOut, true);
		window.removeEventListener('scroll', this._zoomOut, true);

		await Promise.all([
			this.animateBackgroundOut(),
			this.animateCloneOut(),
			this.animateCaptionOut(),
		]).then(() => {
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
			duration: TRANSITION_DURATION,
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
			duration: TRANSITION_DURATION,
		});
	}

	animateBackgroundIn() {
		return new AnimateElement(this.background, {
			opacity: BACKGROUND_OPACITY,
		}, {
			duration: TRANSITION_DURATION,
		});
	}

	animateBackgroundOut() {
		return new AnimateElement(this.background, {
			opacity: 0,
		}, {
			duration: TRANSITION_DURATION,
		});
	}

	animateCaptionIn() {
		return new AnimateElement(this.caption, {
			bottom: 0,
		}, {
			duration: TRANSITION_DURATION,
		});
	}

	animateCaptionOut() {
		return new AnimateElement(this.caption, {
			bottom: -this.caption.offsetHeight,
		}, {
			duration: TRANSITION_DURATION,
		});
	}

	getDestinationPositionAndCoordinates() {
		let width  = this.image.naturalWidth;
		let height = this.image.naturalHeight;
		let imageRatio = height / width;
		let padding = PADDING * 2;
		let captionHeight = this.caption.offsetHeight;

		// scale down if the image is wider than the window
		if (width > getWindowWidth() - padding) {
			width  = getWindowWidth() - padding;
			height = width * imageRatio;
		}

		// scale down if the image is higher than the window
		if (height > getWindowHeight() - padding - (captionHeight + padding)) {
			height = getWindowHeight() - padding - (captionHeight + padding);
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
		document.body.appendChild(this.background);
		document.body.appendChild(this.caption);
		document.body.appendChild(this.clone);

		this.caption.style.bottom = `-${this.caption.offsetHeight}px`;
	}

	removeElementsFromDocumentBody() {
		this.background.parentNode.removeChild(this.background);
		this.caption.parentNode.removeChild(this.caption);
		this.clone.parentNode.removeChild(this.clone);
	}

}

(function () {
	let images = document.querySelectorAll('[data-cz-zoom]');
	images.forEach(image => {
		if (image.nodeName !== 'IMG') {
			return false;
		}

		new CinemaZoom(image);
	});
})();