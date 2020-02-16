//Last Element

function last(arr) {
	//return arr[-1]; //this doesn't work in JS
	return arr[arr.length - 1];
}

let a = last([ 'Earth', 'Moon', 'Mars' ]); // 'Mars'
console.log(a);
