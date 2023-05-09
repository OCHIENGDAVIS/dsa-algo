export function naiveStringSearch(string, pattern) {
	let stringLength = string.length;
	const patternLength = pattern.length;
	let start = 0;
	let end = pattern.length;
	let count = 0;
	while (stringLength >= patternLength) {
		let substring = string.substr(start, end);
		if (substring.trim() === pattern.trim()) {
			count = count + 1;
		}
		start++;
		stringLength--;
	}
	return count > 0 ? count : -1;
}
