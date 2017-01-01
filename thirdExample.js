/*
 Passing argument to generator
*/

function* generator () {
	console.log(" yield 1: ",(yield 1));
	console.log(" yield 2: ",yield 2);
	console.log(" yield 3: ",yield 3);
	return 4;
}

const it = generator();
console.log("First Output" ,it.next());
console.log("Second Output" ,it.next(2));
console.log("Third Output" ,it.next(3));	
// Generator is not done yet it is paused on third yield
console.log("Final Output" ,it.next(4));

