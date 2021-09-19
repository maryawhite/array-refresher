"use strict"
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
console.log(sequence.pop()); //returns 5 bc it returns what you popped off

var shapes = ['square', 'rectangle', 'circle', 'triangle'];

// loop through the array and log the values
for (var i = 0; i < shapes.length; i++) {
    console.log('The shape at index ' + i + ' is: ' + shapes[i]);
}

var shapes = ['square', 'rectangle', 'circle', 'triangle'];

// loop through the array and log the values
shapes.forEach(function(shape) {
    console.log('Here is a lovely shape: ' + shape + '.');
});

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
console.log(fruits.join(":)"));

var planets = ["Mercury", "Venus", "Earth"];
planets.push("Mars");
console.log(planets);
planets[planets.length] = "Jupiter";
console.log(planets);
planets.unshift("Saturn");
console.log(planets);

const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a, b){return a - b}));

var fruitsBbb = ["Banana", "Orange", "Apple", "Mango"];
let removed = fruitsBbb.splice(2 , 2, "lemon", "kiwi");
console.log(removed);
//The splice() method adds new elements to an array,
// and returns an array with the deleted elements (if any)
//the first parameter is the index where the new items will be added
//the second parameter is how many items will be removed
//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.