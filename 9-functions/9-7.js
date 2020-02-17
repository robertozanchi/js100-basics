// Calculate Cat Age

function catAge(age) {
	if (age === 1) {
		console.log(15);
		//return 15;
	} else if (age === 2) {
		console.log(15 + 9);
		//return 15 + 9;
	} else {
		console.log(15 + 9 + (age - 2) * 4);
		//return 15 + 9 + (age - 2) * 4;
	}
}

// function catAge(humanYears) {
// 	switch (humanYears) {
// 		case 1:
// 			return 15;
// 		case 2:
// 			return 24;
// 		default:
// 			return 24 + (humanYears - 2) * 4;
// 	}
// }

catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32
