const upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
const lowerCase = 'qwertyuiopasdfghjklzxcvbnm'.split('');
const numbers = '1234567890'.split('');
const symbols = '@#£&*()\'"%-+=/;:,.€$¥_^[]{}§|~…\\<>!?'.split('');
const twoto256 = 1.15792089237e76;

var short = 11;
var medium = 22;
var long = 33;
var def = 11;

var excluded = [];
var fullList = [];
var extra = [];
var filter = [];
var disFilter = true;
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

function fixDefault() {
	try {
		if (typeof def != 'number') {
			def = 11;
			throw new Error('setDefault(...) number expected, found ' + typeof def);
		}
	} catch (err) {
		if (logError) {
			console.log(err);
		}
	}
}

function setDefault(value) {
	try {
		if (typeof value === 'number') {
			def = value;
		} else if (logError) {
			throw new Error('setDefault(...) number expected, found ' + typeof value);
		}
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
			throw new Error('setList(...) array expected, found ' + typeof list);
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
			throw new Error('setExcluded(...) array expected, found ' + typeof list);
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
			throw new Error('setExtra(...) array expected, found ' + typeof list);
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
			throw new Error(
				'allowUpperCase(...) boolean expected, found ' + typeof bool
			);
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
			throw new Error(
				'allowLowerCase(...) boolean expected, found ' + typeof bool
			);
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
			throw new Error(
				'allowSymbols(...) boolean expected, found ' + typeof bool
			);
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
			throw new Error(
				'allowNumbers(...) boolean expected, found ' + typeof bool
			);
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
			throw new Error('lowErrors(...) boolean expected, found ' + typeof bool);
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
			disFilter = bool;
		} else if (logError) {
			throw new Error(
				'disableFilter(...) boolean expected, found ' + typeof bool
			);
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
		if (!length) {
			fixDefault();
			length = def;
		}
		for (var i = 0; i < length; i++) {
			out += fullList[Math.floor(Math.random() * fullList.length)];
		}
		if (!disFilter) {
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

function url(length) {
	try {
		var out = '';
		if (!length) {
			fixDefault();
			length = def;
		}
		var original = aSymbols;
		if (aSymbols) {
			allowSymbols(false);
		}
		for (var i = 0; i < length; i++) {
			out += fullList[Math.floor(Math.random() * fullList.length)];
		}
		if (!disFilter) {
			filter.forEach(item => {
				if (out.includes(item)) {
					out = url(length);
				}
			});
		}
		if (aSymbols != original) {
			allowSymbols(original);
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
module.exports.setDefault = setDefault;
module.exports.default = def;