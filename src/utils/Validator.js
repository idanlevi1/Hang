
export const validateByLength = (text, len) => {
	return text && text.length >= len;
};

export const isNumbers = value => {
	return /^\d+$/.test(value);
};

export const validateEmail = value => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(value).toLowerCase());
};

export const isValidIsraeliID = id => /\d{9}/.test(id) && Array.from(id, Number).reduce((counter, digit, i) => {
	const step = digit * ((i % 2) + 1);
	return counter + (step > 9 ? step - 9 : step);
}) % 10 === 0;
