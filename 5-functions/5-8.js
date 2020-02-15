// Internationalization 1

function greet(expression) {
	switch (expression) {
		case 'en':
			return 'Hi!';
		case 'fr':
			return 'Salut!';
		case 'pt':
			return 'Olá!';
		case 'de':
			return 'Hallo!';
		case 'sv':
			return 'Hej!';
		case 'af':
			return 'Haai!';
	}
}

console.log(greet('de'));
