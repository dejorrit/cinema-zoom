/*
* https://github.com/component/ease
**/

export function linear(n) {
	return n;
}

export function inQuad(n) {
	return n * n;
}

export function outQuad(n) {
	return n * (2 - n);
}

export function inOutQuad(n) {
	n *= 2;
	if (n < 1) return 0.5 * n * n;
	return -0.5 * (--n * (n - 2) - 1);
}

export function inCube(n) {
	return n * n * n;
}

export function outCube(n) {
	return --n * n * n + 1;
}

export function inOutCube(n) {
	n *= 2;
	if (n < 1) return 0.5 * n * n * n;
	return 0.5 * ((n -= 2) * n * n + 2);
}

export function inQuart(n) {
	return n * n * n * n;
}

export function outQuart(n) {
	return 1 - (--n * n * n * n);
}

export function inOutQuart(n) {
	n *= 2;
	if (n < 1) return 0.5 * n * n * n * n;
	return -0.5 * ((n -= 2) * n * n * n - 2);
}

export function inQuint(n) {
	return n * n * n * n * n;
}

export function outQuint(n) {
	return --n * n * n * n * n + 1;
}

export function inOutQuint(n) {
	n *= 2;
	if (n < 1) return 0.5 * n * n * n * n * n;
	return 0.5 * ((n -= 2) * n * n * n * n + 2);
}

export function inSine(n) {
	return 1 - Math.cos(n * Math.PI / 2);
}

export function outSine(n) {
	return Math.sin(n * Math.PI / 2);
}

export function inOutSine(n) {
	return .5 * (1 - Math.cos(Math.PI * n));
}

export function inExpo(n) {
	return 0 === n ? 0 : Math.pow(1024, n - 1);
}

export function outExpo(n) {
	return 1 === n ? n : 1 - Math.pow(2, -10 * n);
}

export function inOutExpo(n) {
	if (0 === n) return 0;
	if (1 === n) return 1;
	if ((n *= 2) < 1) return .5 * Math.pow(1024, n - 1);
	return .5 * (-Math.pow(2, -10 * (n - 1)) + 2);
}

export function inCirc(n) {
	return 1 - Math.sqrt(1 - n * n);
}

export function outCirc(n) {
	return Math.sqrt(1 - (--n * n));
}

export function inOutCirc(n) {
	n *= 2;
	if (n < 1) return -0.5 * (Math.sqrt(1 - n * n) - 1);
	return 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
}

export function inBack(n) {
	let s = 1.70158;
	return n * n * ((s + 1) * n - s);
}

export function outBack(n) {
	let s = 1.70158;
	return --n * n * ((s + 1) * n + s) + 1;
}

export function inOutBack(n) {
	let s = 1.70158 * 1.525;
	if ((n *= 2) < 1) return 0.5 * (n * n * ((s + 1) * n - s));
	return 0.5 * ((n -= 2) * n * ((s + 1) * n + s) + 2);
}

export function inBounce(n) {
	return 1 - outBounce(1 - n);
}

export function outBounce(n) {
	if (n < (1 / 2.75)) {
		return 7.5625 * n * n;
	} else if (n < (2 / 2.75)) {
		return 7.5625 * (n -= (1.5 / 2.75)) * n + 0.75;
	} else if (n < (2.5 / 2.75)) {
		return 7.5625 * (n -= (2.25 / 2.75)) * n + 0.9375;
	} else {
		return 7.5625 * (n -= (2.625 / 2.75)) * n + 0.984375;
	}
}

export function inOutBounce(n) {
	if (n < .5) return inBounce(n * 2) * .5;
	return outBounce(n * 2 - 1) * .5 + .5;
}

export function inElastic(n) {
	let s, a = 0.1, p = 0.4;
	if (n === 0) return 0;
	if (n === 1) return 1;
	if (!a || a < 1) {
		a = 1;
		s = p / 4;
	}
	else s = p * Math.asin(1 / a) / (2 * Math.PI);
	return -(a * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - s) * (2 * Math.PI) / p));
}

export function outElastic(n) {
	let s, a = 0.1, p = 0.4;
	if (n === 0) return 0;
	if (n === 1) return 1;
	if (!a || a < 1) {
		a = 1;
		s = p / 4;
	}
	else s = p * Math.asin(1 / a) / (2 * Math.PI);
	return (a * Math.pow(2, -10 * n) * Math.sin((n - s) * (2 * Math.PI) / p) + 1);
}

export function inOutElastic(n) {
	let s, a = 0.1, p = 0.4;
	if (n === 0) return 0;
	if (n === 1) return 1;
	if (!a || a < 1) {
		a = 1;
		s = p / 4;
	}
	else s = p * Math.asin(1 / a) / (2 * Math.PI);
	if ((n *= 2) < 1) return -0.5 * (a * Math.pow(2, 10 * (n -= 1)) * Math.sin((n - s) * (2 * Math.PI) / p));
	return a * Math.pow(2, -10 * (n -= 1)) * Math.sin((n - s) * (2 * Math.PI) / p) * 0.5 + 1;
}