let text = 'launch school tech & talk';

text = text.split(' ').map((s) => s[0].toUpperCase() + s.substring(1)).join(' ');
console.log(text);

// let string = 'launch school tech & talk';
// let words = string.split(' ');
// let capitalizedWords = [];
// let i;

// for (i = 0; i < words.length; i++) {
// 	let word = words[i];

// 	capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
// }

// capitalizedWords.join(' '); // 'Launch School Tech & Talk'
