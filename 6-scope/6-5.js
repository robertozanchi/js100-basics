// function myFunction1() {
// 	let a = 1;

// 	if (true) {
// 		console.log(a);
// 		a = 2;
// 		console.log(a);
// 	}
// }

// myFunction1();
// the above runs and logs 1 and 2 because a is *reassigned* inside the if {}

function myFunction() {
	let a = 1;

	if (true) {
		console.log(a);
		let a = 2;
		console.log(a);
	}
}

myFunction();
// the above
