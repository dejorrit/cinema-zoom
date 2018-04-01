export default class Pinch {

	constructor(element) {
		this.el = element;
		this.touches = [];

		this.el.addEventListener('touchmove', event => {
			event.preventDefault();

			let fingers = event.targetTouches.length;
			if (fingers === 1) {
				this.pan(event);
			} else if (fingers === 2) {
				this.zoom(event);
			}
		}, false);

		this.el.addEventListener('touchend', () => {
			this.touches = [];
		});

		this.el.addEventListener('touchstart', () => {
			this.touches = [];
		});
	}

	pan(event) {
		this.touches.push(event);
		console.log('panning', event);
	}

	zoom(event) {
		console.log('zooming', event)
	}

}