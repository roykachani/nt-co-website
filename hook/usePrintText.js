export const usePrintText = (string, on, ref, ms = 270) => {
  // console.log(string);

  let arrayOfStrg = string.split('');

  // console.log(arrayOfStrg);

  let i = 0;

  let printStr = () => {
    if (arrayOfStrg[i] === ' ') {
      ref.current.innerHTML += arrayOfStrg[i];
      ref.current.innerHTML += arrayOfStrg[i + 1];
      i += 2;
    } else if (arrayOfStrg[i]) {
      ref.current.innerHTML += arrayOfStrg[i];
      i++;
    }

    if (i === arrayOfStrg.length) {
      clearTimeout(printStr);
    }
    const speed = Math.random() * (300 - ms) + 100;
    setTimeout(printStr, speed);
  };
  printStr();

  return [printStr];
};
