/* Regra  */
const numericRuler = (e) => {
	let result = e.match(
		/([A-Z]|[a-z])|[!@#$%^&*_+\=[\]{};´`':"\|,.<>/?~¿Øø£¥☻®♥♦¼♣«♠»•α◘ß○π♂Σ♀Φ♪±♫≥☼≤►■◄†↑‡↓↔™¨]/g
	)
		? e.length--
		: e;
	return result;
};

const addCaracter = (element) => {
	let value = element.target.value;
	if (element.keyCode === 8) return value;
	if (value.length === 1) value = `(${value}`;
	if (value.length === 3) value = `${value}) `;
	if (value.length === 9) value = `${value}-`;
	return value;
};
export { numericRuler, addCaracter };
