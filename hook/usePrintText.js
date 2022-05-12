export const usePrintText = (string, on) => {
	console.log(string);
	let arrayOfStrg = string.split('');
	let i = 0;

	let printStr = () => {
		if (arrayOfStrg[i] === ' ') {
			document.getElementById('text').innerHTML += arrayOfStrg[i];
			document.getElementById('text').innerHTML += arrayOfStrg[i + 1];
			i += 2;
		} else if (arrayOfStrg[i]) {
			document.getElementById('text').innerHTML += arrayOfStrg[i];
			i++;
		}

		if (i === arrayOfStrg.length) {
			clearTimeout(printStr);
		}
		const speed = Math.random() * (300 - 200) + 100;
		setTimeout(printStr, speed);
	};
	printStr();

	return [printStr];
};
