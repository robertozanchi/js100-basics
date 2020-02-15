// Locale Part 2

function extractRegion(locale) {
	console.log(locale.split('_')[1].split('.')[0]);
}

extractRegion('en_US.UTF-8'); // 'US'
extractRegion('en_GB.UTF-8'); // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'
