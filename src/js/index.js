require('./../css/main.scss');
import Zoom from './Zoom.js';

const defaults = {
	duration: 450,
	padding: 20,
	backgroundOpacity: 0.75,
};

module.exports = class {

	constructor(element, options = {}) {
		this.callbacks = new Map();
		options = Object.assign({}, defaults, options);

		new Zoom(element, options, this);
	}

	// Register events
	on(event, callback) {
		this.callbacks.set(event, callback);
	}

	// Remove registered events
	off(event) {
		if (this.callbacks.has(event)) {
			this.callbacks.delete(event);
		}
	}

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