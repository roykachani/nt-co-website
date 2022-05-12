export const debounce = (fn, wait) => {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			timer = null;
			fn(...args);
		}, wait);
	};
};
