// Travel

let destinations = [
	'Prague',
	'London',
	'Sydney',
	'Belfast',
	'Rome',
	'Aruba',
	'Paris',
	'Bora Bora',
	'Barcelona',
	'Rio de Janeiro',
	'Marrakesh',
	'New York City'
];

function contains(string, destinations) {
	//return destinations.includes(string);
	for (let i = 0; i < destinations.length; i += 1) {
		if (destinations[i] === string) {
			return true;
		}
	}
	return false;
}

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false
