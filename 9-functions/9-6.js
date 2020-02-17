// Calculate BMI

function calculateBMI(heightInCentimeters, weightInKilograms) {
	let heightInMeters = heightInCentimeters / 100;
	let bmi = weightInKilograms / heightInMeters ** 2;
	bmi = bmi.toFixed(2);
	//return bmi;
	console.log(bmi);
	console.log('hi');
}

// function calculateBMI(heightInCentimeters, weightInKilograms) {
// 	let heightInMeters = heightInCentimeters / 100;
// 	let bmi = weightInKilograms / heightInMeters ** 2;

// 	return bmi.toFixed(2);
// }

calculateBMI(180, 80); // "24.69"
