export function search(arr, value) {
	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i] === value) {
	// 		return i;
	// 	}
	// }
	// return -1;
	for (let element of arr) {
		if (element === value) {
			return arr.indexOf(element);
		}
	}
	return -1;
}
