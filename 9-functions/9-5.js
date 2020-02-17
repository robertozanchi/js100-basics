function formatName(firstName, middleName, lastName) {
	return `${lastName}, ${firstName} ${middleName[0]}.`;
}

fullName = [ 'James', 'Tiberius', 'Kirk' ];

//console.log(formatName(fullName[0], fullName[1], fullName[2]));
console.log(formatName(...fullName));
// logs: Kirk, James T.
