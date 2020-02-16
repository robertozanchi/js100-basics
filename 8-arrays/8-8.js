// Type

function isArray(input) {
	// Is input an array?
	console.log(typeof input);
	return typeof input === Array;
}

let someValue1 = [ 0, 1, 0, 0, 1 ];
let someValue2 = 'I leave you my Kingdom, take good care of it.';

console.log(Array.isArray(someValue1)); // true
console.log(Array.isArray(someValue2)); // false
