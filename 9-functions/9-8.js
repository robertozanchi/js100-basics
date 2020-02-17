// Remove Last Char

function removeLastChar(string) {
	string = string.slice(0, -1);
	console.log(string);
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'
