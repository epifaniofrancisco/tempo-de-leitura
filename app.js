const countChars = (text) => {
	return text.trim().length;
};

const countWords = (text) => {
	if (text.length == 0) return 0;
	return text.trim().split(/\s+/).length;
};

const readTime = (text) => {
	const words = countWords(text);
	const averageWordsPerMinute = 230;
	const minutes = Math.floor(words / averageWordsPerMinute);

	return minutes;
};

const calculate = (text) => {
	const minutes = readTime(text);
	const words = countWords(text);
	const chars = countChars(text);

	return {
		minutes,
		words,
		chars,
	};
};

const myText = document.getElementById("text");

myText.onkeyup = (e) => {
	let { minutes, words, chars } = calculate(myText.value);

	if (minutes == 0) minutes = "menos de 1 minuto";
	else if (minutes == 1) minutes = "1 minuto";
	else minutes = minutes + " minutos";

	words = words == 1 ? "1 palavra" : words + " palavras";
	chars = chars == 1 ? "1 carácter" : chars + " caracteres";

	document.querySelector(".minutes").innerHTML = minutes;
	document.querySelector(".words").innerHTML = words;
	document.querySelector(".chars").innerHTML = chars;
};
