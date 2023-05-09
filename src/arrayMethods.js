// reduce method
export function reducer(arr) {
	const sum = arr.reduce((accumulator, ele) => {
		return (accumulator += ele);
	}, 0);
	return sum;
}

export function addUsingSplice(arr, additionalElements) {
	arr.splice(1, 0, additionalElements);
	return arr;
}
