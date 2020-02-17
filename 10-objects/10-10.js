function clone(obj) {
	// TODO
	return Object.assign({}, obj);
}

let person = {
	title: 'Duke',
	name: 'Nukem',
	age: 33
};

let clonedPerson = clone(person);
//person.age = 34;

console.log(person.age); // 34
console.log(clonedPerson.age); // 33
console.log(person === clonedPerson); //proving that the clone is a new object not just a copy of the reference
