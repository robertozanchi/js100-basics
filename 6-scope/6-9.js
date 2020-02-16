const a = 1;

function myFunction() {
	a = 2;
}

myFunction(a); // passing a as argument has no effect.
console.log(a);
