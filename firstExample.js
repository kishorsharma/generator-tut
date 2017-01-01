function* generator () {
	console.log('Hello from generator. Generator will pause now.');
	yield;
	console.log('welcome back! Generator resumed.');
}

const it = generator();
it.next();
console.log("back to caller");
setTimeout(function(){
	it.next();
}, 5000);
