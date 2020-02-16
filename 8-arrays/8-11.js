let groceryList = [ 'paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus' ];

// Your code.

// for (let i = 0; i < groceryList.length; i += 1) {
// 	console.log(groceryList.length);
// 	console.log(groceryList.pop);
// }
// The above doesn't work because the array gets modified

while (groceryList.length > 0) {
	console.log(groceryList.pop());
}

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

groceryList; // []
