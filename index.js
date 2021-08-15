const upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
const lowerCase = 'qwertyuiopasdfghjklzxcvbnm'.split('');
const numbers = '1234567890'.split('');
const symbols = '@#£&*()\'"%-+=/;:,.€$¥_^[]{}§|~…\\<>!?'.split('');
var excluded = [];
var fullList = [];
var allowUpperCase = true;
var allowLowerCase = true;
var allowSymbols = true;
var allowNumbers = true;
var logError = true;
genList();

function genList() {
	try {
		if (allowUpperCase) {
			fullList = fullList.concat(upperCase);
		}
		if (allowLowerCase) {
			fullList = fullList.concat(lowerCase);
		}
		if (allowSymbols) {
			fullList = fullList.concat(symbols);
		}
		if (allowNumbers) {
			fullList = fullList.concat(numbers);
		}
		excluded.forEach(item => {
			const index = fullList.indexOf(item);
			if (index != -1) {
				fullList.splice(index, 1);
			}
		});
	} catch (err) {
		if (logError) {
			console.log(err);
		}
	}
}

function getList() {
	try {
		return fullList;
	} catch (err) {
		if (logError) {
			console.log(err);
		}
	}
}

function setList(list) {
	try {
		fullList = list;
	} catch (err) {
		if (logError) {
			console.log(err);
		}
	}
}

function exclude(chars) {
	try {
		if (typeof chars === 'string') {
			chars = [chars];
		}
		chars.forEach(item => {
			if (!excluded.includes(item)) {
				excluded.push(item);
			}
		});
	} catch (err) {
		if (logError) {
			console.log(err);
		}
	}
}

function allow(chars) {
	try {
		if (typeof chars === 'string') {
			chars = [chars];
		}
		chars.forEach(item => {
			const index = excluded.indexOf(item);
			if (index != -1) {
				excluded.splice(index, 1);
			}
		});
	} catch (err) {
		console.log(err);
	}
}
