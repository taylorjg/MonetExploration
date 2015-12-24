(function() {

    "use strict";

    var m1 = Maybe.Some(5);
    console.log("m1:", m1);
    console.log("m1.some():", m1.some());
    console.log("m1.map:", m1.map(function(x) { return x.toString(); }));
    console.log("m1.map.some():", m1.map(function(x) { return x.toString(); }).some());
}());
