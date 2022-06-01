export const usePrintText = (string, on, id) => {
	console.log(string);

	let arrayOfStrg = string.split('');

	console.log(arrayOfStrg);

	let i = 0;

	let printStr = () => {
		if (arrayOfStrg[i] === ' ') {
			document.getElementById(id).innerHTML += arrayOfStrg[i];
			document.getElementById(id).innerHTML += arrayOfStrg[i + 1];
			i += 2;
		} else if (arrayOfStrg[i]) {
			document.getElementById(id).innerHTML += arrayOfStrg[i];
			i++;
		}

		if (i === arrayOfStrg.length) {
			clearTimeout(printStr);
		}
		const speed = Math.random() * (300 - 270) + 100;
		setTimeout(printStr, speed);
	};
	printStr();

	return [printStr];
};
