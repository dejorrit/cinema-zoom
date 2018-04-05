import {inOutSine} from './easing';

export default class Animation {

	constructor(element, property, unit, from, to, duration, easing) {
		this.starttime = null;
		this.element   = element;
		this.property  = property;
		this.unit      = unit;
		this.from      = from;
		this.to        = to;
		this.easing    = easing;
		this.duration  = duration;

		requestAnimationFrame(timestamp => {
			this.starttime = timestamp || new Date().getTime();
			this.animate(timestamp);
		});
	}

	animate(timestamp) {
		timestamp = timestamp || new Date().getTime();

		let runtime  = timestamp - this.starttime;
		let progress = Math.min(runtime / this.duration, 1);

		let value = this.from + ((this.to - this.from) * inOutSine(progress));

		this.element.style[this.property] = value + this.unit;

		if (runtime < this.duration) {
			requestAnimationFrame(timestamp => {
				this.animate(timestamp);
			});
		}
	}

}