let person = {
	title: 'Duke',
	name: 'Nukem',
	age: 33
};

let arr = [];
for (let key in person) {
	arr.push([ key, person[key] ]);
}

console.log(arr);
