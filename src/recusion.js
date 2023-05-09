export function coutDown(num) {
	if (num <= 0) {
		console.log('All done');
		return;
	}
	console.log(num);
	num--;
	coutDown(num);
}

export function someRange(num) {
	if (num === 1) {
		return 1;
	} else {
		console.log(` num => ${num}`);
		return num + someRange(num - 1);
	}
}

export function factorial(num) {
	let result = 0;
	for (let i = num; i > 0; num--) {
		result = result * i;
	}
	return result;
}

export function recursiveFactorial(num) {
	if (num === 1) {
		return i;
	} else {
		return factorial(num - 1);
	}
}
