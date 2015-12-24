var monet = require("monet");

var m1 = monet.Maybe.Some(5);
console.log("m1.some(): ", m1.some());
console.log("m1.map.some():", m1.map(function(x){ return x + 1; }).some());

var e1 = monet.Either.Right(5);
console.log("e1.right():", e1.right());
console.log("e1.map.right():", e1.map(function(x){ return x + 1; }).right());

var e2 = monet.Either.Left("An error occurred");
console.log("e2.left():", e2.left());
console.log("e2.map.left():", e2.map(function(x){ return x + 1; }).left());
