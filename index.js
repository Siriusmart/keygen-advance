const upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
const lowerCase = 'qwertyuiopasdfghjklzxcvbnm'.split('');
const numbers = '1234567890'.split('');
const symbols = '@#£&*()\'"%-+=/;:,.€$¥_^[]{}§|~…\\<>!?'.split('');
var excluded = [];
var fullList = [];
var extra = [];
var filter = [];
var eFilter = true;
var aUpperCase = true;
var aLowerCase = true;
var aSymbols = true;
var aNumbers = true;
var logError = true;
genList();

function genList() {
	try {
		fullList = [];
		if (aUpperCase) {
			fullList = fullList.concat(upperCase);
		}
		if (aLowerCase) {
			fullList = fullList.concat(lowerCase);
		}
		if (aSymbols) {
			fullList = fullList.concat(symbols);
		}
		if (aNumbers) {
			fullList = fullList.concat(numbers);
		}
		extra.forEach(item => {
			if (!fullList.includes(item)) {
				fullList.push(item);
			}
		});
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
		if (Array.isArray(list)) {
			fullList = list;
		} else if (logError) {
			console.log('Err: setList(...) array expected');
		}
	} catch (err) {
		if (logError) {
			console.log(err);
		}
	}
}

function getExcluded() {
	try {
		return excluded;
	} catch (err) {
		if (logError) {
			console.log(err);
		}
	}
}

function setExcluded(list) {
	try {
		if (Array.isArray(list)) {
			excluded = list;
		} else if (logError) {
			console.log('Err: setExcluded(...) array expected');
		}
	} catch (err) {
		if (logError) {
			console.log(err);
		}
	}
}

function getExtra() {
	try {
		return extra;
	} catch (err) {
		if (logError) {
			console.log(err);
		}
	}
}

function setExtra(list) {
	try {
		if (Array.isArray(list)) {
			extra = list;
		} else if (logError) {
			console.log('Err: setExtra(...) array expected');
		}
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
		genList();
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
		genList();
	} catch (err) {
		console.log(err);
	}
}

function add(char) {
	try {
		if (typeof char === 'string') {
			char = [char];
		}
		char.forEach(item => {
			if (!extra.includes(item)) {
				extra.push(item);
			}
		});
		genList();
	} catch (err) {
		if (logError) {
			console.log(err);
		}
	}
}

function remove(char) {
	try {
		if (typeof char === 'string') {
			char = [char];
		}
		char.forEach(item => {
			var index = extra.indexOf(item);
			if (index != -1) {
				extra.splice(index, 1);
			}
		});
	} catch (err) {
		if (logError) {
			console.log(err);
		}
	}
}

function reset() {
	try {
		excluded = [];
		fullList = [];
		extra = [];
		aUpperCase = true;
		aLowerCase = true;
		aSymbols = true;
		aNumbers = true;
		logError = true;
		genList();
	} catch (err) {
		if (logError) {
			console.log(err);
		}
	}
}

function allowUpperCase(bool) {
	try {
		if (typeof bool == 'boolean') {
			aUpperCase = bool;
		} else if (logError) {
			console.log('Err: allowUpperCase(...) boolean expected');
		}
		genList();
	} catch (err) {
		if (logError) {
			console.log(err);
		}
	}
}

function allowLowerCase(bool) {
	try {
		if (typeof bool == 'boolean') {
			aLowerCase = bool;
		} else if (logError) {
			console.log('Err: allowLowerCase(...) boolean expected');
		}
		genList();
	} catch (err) {
		if (logError) {
			console.log(err);
		}
	}
}

function allowSymbols(bool) {
	try {
		if (typeof bool == 'boolean') {
			aSymbols = bool;
		} else if (logError) {
			console.log('Err: allowSymbols(...) boolean expected');
		}
		genList();
	} catch (err) {
		if (logError) {
			console.log(err);
		}
	}
}

function allowNumbers(bool) {
	try {
		if (typeof bool == 'boolean') {
			aNumbers = bool;
		} else if (logError) {
			console.log('Err: allowUpperCase(...) boolean expected');
		}
		genList();
	} catch (err) {
		if (logError) {
			console.log(err);
		}
	}
}

function logErrors(bool) {
	try {
		if (typeof bool == 'boolean') {
			logError = bool;
		} else if (logError) {
			console.log('Err: logErrors(...) boolean expected');
		}
		genList();
	} catch (err) {
		if (logError) {
			console.log(err);
		}
	}
}

function disableFilter(bool) {
	try {
		if (typeof bool == 'boolean') {
			eFilter = bool;
		} else if (logError) {
			console.log('Err: enableFilter(...) boolean expected');
		}
	} catch (err) {
		if (logError) {
			console.log(err);
		}
	}
}

function gen(length) {
	try {
		var out = '';
		for (var i = 0; i < length; i++) {
			out += fullList[Math.floor(Math.random() * fullList.length)];
		}
		if (eFilter) {
			filter.forEach(item => {
				if (out.includes(item)) {
					out = gen(length);
				}
			});
		}
		return out;
	} catch (err) {
		if (logError) {
			console.log(err);
		}
	}
}

module.exports.getList = getList;
module.exports.setList = setList;
module.exports.getExcluded = getExcluded;
module.exports.setExcluded = setExcluded;
module.exports.getExtra = getExtra;
module.exports.setExtra = setExtra;
module.exports.exclude = exclude;
module.exports.allow = allow;
module.exports.add = add;
module.exports.remove = remove;
module.exports.reset = reset;
module.exports.allowUpperCase = allowUpperCase;
module.exports.allowLowerCase = allowLowerCase;
module.exports.allowSymbols = allowSymbols;
module.exports.allowNumbers = allowNumbers;
module.exports.logErrors = logErrors;
module.exports.disableFilter = disableFilter;
module.exports.gen = gen;