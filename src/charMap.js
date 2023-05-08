export const charMap = (str) => {
	const result = {};
	// @TODO check if character is alphanumeric
	for (let char of [...str.toLowerCase()]) {
		if (char.trim() && result[char]) {
			result[char]++;
		} else {
			result[char] = 1;
		}
	}
	return result;
};

export const same = (arr1, arr2) => {
	if (arr1.length === arr2.length) {
		for (let el of arr1) {
			if (el * el in arr2) {
				return true;
			}
		}
	} else {
		return false;
	}
};

export const isAnagrams = (str1, str2) => {
	if (str1.length !== str2.length) {
		return false;
	}
	const str1Map = buildFrequency({}, str1);
	console.log(str1Map);
	for (let char of str2) {
		if (!str1Map[char]) {
			return false;
		} else {
			str1Map[char] -= 1;
		}
	}
	return true;
};

export const buildFrequency = (obj, str) => {
	for (let element in str) {
		if (obj[str[element]]) {
			obj[str[element]]++;
		} else {
			obj[str[element]] = 1;
		}
	}
	return obj;
};

export const sumZero = (arr) => {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			arr[right]--;
		} else if (sum < 0) {
			arr[left]++;
		}
	}
};

export const contUniquevalues = (arr) => {
	const valuesMap = {};
	const uniqList = new Set();
	for (let element of arr) {
		if (valuesMap[element]) {
			valuesMap[element]++;
		} else {
			valuesMap[element] = 1;
		}
	}

	for (let key of Object.keys(valuesMap)) {
		if (!uniqList.has(key) || valuesMap[key] === 1) {
			uniqList.add(key);
		}
	}
	return [...uniqList].length;
};

// sumZero([-3, -2, -1, 0, 1, 2, 3]);
