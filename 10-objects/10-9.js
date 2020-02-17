let nestedArray = [ [ 'title', 'Duke' ], [ 'name', 'Nukem' ], [ 'age', 33 ] ];

let obj = {};
for (let i of nestedArray) {
	obj[i[0]] = i[1];
}

console.log(obj);
