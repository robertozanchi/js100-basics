// Repeat

function repeat(times, text) {
	let s = '';
	for (i = 0; i < times; i += 1) {
		s += text;
	}
	return s;
}

repeat(3, 'ha'); // 'hahaha'
console.log(repeat(3, 'ha'));
