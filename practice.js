// var counter =  function(arr) {
//     return "There are" + arr.length + "in this element";
    
// }

// console.log(counter(["yo","2", "3"]))

// var adder =  function (a,b) {
//     return `the sum of the 2 is ${a+b}`
// };

// module.exports.counter = counter;
// module.exports.adder =  adder;
var events = require ('events');
var myEmitter =  new events.EventEmitter();
myEmitter.on("someEvent", function(mssg) {
    console.log(mssg);
});
myEmitter.emit("someEvent", "THE EVENT WAS EMMITTED")