/*
 value receving
*/

function* generator () {
	yield 1;
	yield 2;
	yield 3;
}

const it = generator();
console.log("First Output" ,it.next());
console.log("Second Output" ,it.next());
console.log("Third Output" ,it.next());	
// Generator is not done yet it is paused on third yield
console.log("Final Output" ,it.next());


