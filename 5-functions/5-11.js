function localGreet(expression) {
	switch (extractLanguage(expression)) {
		case 'en':
			//return 'Hi!';
			switch (extractRegion(expression)) {
				case 'US':
					return 'Hey!';
				case 'UK':
					return 'Hello!';
				case 'AU':
					return 'Howdy!';
			}
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

function extractLanguage(locale) {
	return locale.substring(0, 2);
}
//extractLanguage('en_US.UTF-8'); // 'en'

function extractRegion(locale) {
	return locale.split('_')[1].split('.')[0];
}
//extractRegion('en_US.UTF-8'); // 'US'

console.log(localGreet('en_AU.UTF-8'));

// SOLUTION
// function localGreet(locale) {
//   let language = extractLanguage(locale);
//   let region = extractRegion(locale);

//   switch (region) {
//     case 'US': return 'Hey!';
//     case 'GB': return 'Hello!';
//     case 'AU': return 'Howdy!';
//     default: return greet(language);
//   }
// }
