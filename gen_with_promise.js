const Q = require('q');


const someAsyncTask = function (taskName) {
	const defer = Q.defer();
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;
	console.log('Making request for:', taskName);
	setTimeout(function () {
		defer.resolve('This task: ' +taskName+ ' completed after delay', randomDelay);
	}, randomDelay)
	return defer.promise;
};

function output(text) {
	console.log(text);
}

/*
 Passing argument to generator
*/
Q.spawn(function* generator () {

	const p1 = someAsyncTask("First task");
	const p2 = someAsyncTask("Second task");
	const p3 = someAsyncTask("Third task");
	console.log(" yield 1: ",yield p1);
	console.log(" yield 2: ",yield p2);
	console.log(" yield 3: ",yield p3);
	console.log("Final Output");
	return 4;
})

