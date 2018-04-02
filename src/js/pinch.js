export default class Pinch {

	constructor(image) {
		this.image = image;

		this.image.addEventListener('touchstart', this.onTouchStart.bind(this));
		this.image.addEventListener('touchend',   this.onTouchEnd.bind(this));
		this.image.addEventListener('touchmove',  this.onTouchMove.bind(this));
	}

	setCurrentTransformValues() {
		this.imagePosition = {
			x: getElementTransformTranslate(this.image).x,
			y: getElementTransformTranslate(this.image).y,
		};

		this.imageScale = getElementTransformScale(this.image);
	}

	onTouchStart(event) {
		event.preventDefault();
		this.setCurrentTransformValues();

		this.touchStartTime = event.timeStamp;
		let touch = event.targetTouches[0];

		this.startPosition = {
			x: touch.clientX,
			y: touch.clientY,
		};
	}

	onTouchEnd(event) {
		if (event.timeStamp - this.touchStartTime < 250) {
			this.zoomIn(event.changedTouches[0]);
			return false;
		}

		this.setCurrentTransformValues();
	}

	onTouchMove(event) {
		event.preventDefault();

		if (event.targetTouches.length === 1) {
			this.pan(event.targetTouches[0]);
		} if (event.targetTouches.length === 2) {
			// this.zoomByTouch(event.targetTouches[0], event.targetTouches[0]);
		}
	}

	pan(touch) {
		let diffX = touch.clientX - this.startPosition.x;
		let diffY = touch.clientY - this.startPosition.y;
		let newX  = this.imagePosition.x + diffX;
		let newY  = this.imagePosition.y + diffY;

		this.image.style.transform = `translate(${newX}px, ${newY}px) scale(${this.imageScale})`;
	}

	zoomIn(touch) {
		let scaleFactor = 1.25;
		let touchX = touch.clientX;
		let touchY = touch.clientY;

		let from = {
			x: this.imagePosition.x,
			y: this.imagePosition.y,
			scale: this.imageScale,
		};

		let to = {
			x: -(touchX / 2), // @todo take boundaries into account
			y: -(touchY / 2), // @todo take boundaries into account
			scale: this.imageScale * scaleFactor,
		};

		animate(this.image, from, to, 100);
	}

	reset() {
		this.setCurrentTransformValues();

		let from = {x: this.imagePosition.x, y: this.imagePosition.y, scale: this.imageScale};
		let to   = {x: 0, y: 0, scale: 1};

		animate(this.image, from, to, 250);
	}

}

function getElementTransformTranslate(element) {
	let x = 0;
	let y = 0;

	if (window.getComputedStyle) {
		let style = window.getComputedStyle(element);
		let calculatedTransformation = style.transform || style.webkitTransform || style.mozTransform;

		let transformationMatrix3D = calculatedTransformation.match(/^matrix3d\((.+)\)$/);
		if (transformationMatrix3D) {
			x = parseFloat(transformationMatrix3D[1].split(', ')[13]);
			y = parseFloat(transformationMatrix3D[1].split(', ')[14]);
		}

		let transformationMatrix = calculatedTransformation.match(/^matrix\((.+)\)$/);
		if (transformationMatrix) {
			x = parseFloat(transformationMatrix[1].split(', ')[4]);
			y = parseFloat(transformationMatrix[1].split(', ')[5]);
		}
	}

	return {
		x,
		y,
	};
}

function getElementTransformScale(element) {
	return element.getBoundingClientRect().width / element.offsetWidth;
}

let starttime;
function animate(element, from, to, duration) {
	requestAnimationFrame(timestamp => {
		starttime = timestamp;

		animateTransform(timestamp, element, from, to, duration);
	});
}

function animateTransform(timestamp, element, from, to, duration) {
	timestamp = timestamp || new Date().getTime();

	let runtime = timestamp - starttime;
	let progress = Math.min(runtime / duration, 1);

	let translateXValue = from.x     + ((to.x     - from.x)     * progress);
	let translateYValue = from.y     + ((to.y     - from.y)     * progress);
	let scaleValue      = from.scale + ((to.scale - from.scale) * progress);

	element.style.transform = `translate(${translateXValue}px, ${translateYValue}px) scale(${scaleValue})`;

	if (runtime < duration) {
		requestAnimationFrame((timestamp) => {
			animateTransform(timestamp, element, from, to, duration);
		});
	}
}