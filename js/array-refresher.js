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

/**
 * Remove Duplicates from an Array
 * Create a function named removeDuplicates that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
 *
 * Examples
 * >> removeDuplicates([1, 0, 1, 0]) ➞ [1, 0]
 * >> removeDuplicates(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
 * >> removeDuplicates(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]
 *
 * Notes
 * Tests contain arrays with both strings and numbers. Tests are case sensitive. Each array item is unique.
 */

function removeDuplicates(items){
    var newArray = [];            //declare a new array
    for(var i = 0; i < items.length; i++){
        if(newArray.indexOf(items[i]) === -1){     //checking if the new Array has the old arrays items.
            newArray.push(items[i]);
        }
    }
    return newArray;    //return outside of the for loop or it will stop.
}
//indexOf() returns -1 if the item is not found.
console.log("--remove duplicates--");
console.log(removeDuplicates(["Mary", "Sarah", "Mary"]));
console.log(removeDuplicates([1, 0, 1, 0]));                 // [1, 0]
console.log(removeDuplicates(["The", "big", "cat"]));        //["The", "big", "cat"]
console.log(removeDuplicates(["John", "Taylor", "John"]));   //["John", "Taylor"]
console.log(removeDuplicates(["dog", "dog", "dog", "cat"]));  //["dog", "cat"]


//write a function that takes an array and returns the lower case letter: uppercase letter
/**
 * Lowercase and Uppercase Map
 * Create a function named mapping that creates an object with each (key, value) pair being the (lower case, upper case)
 * versions of a letter, respectively.
 *
 * Examples
 *
 * >> mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
 * >> mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
 * >> mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
*/
 function mapping (input){
     var myObj = {};
     for(var i = 0; i < input.length; i++) {
         var key = input[i];
         var value = key.toUpperCase();
         myObj = key + value;
     }
    return myObj;
}

console.log(mapping(["p", "s"]));
//key: value  arrays[arrays[i].toUpperCase()]

/**
 * Can You Spare a Square?
 * Try to imagine a world in which you might have to stay home for 14 days at any given time. Do you have enough TP to make it through?
 *
 * Although the number of squares per roll of TP varies significantly,
 * we'll assume each roll has 500 sheets, and the average person uses 57 sheets per day.
 *
 * Create a function named tpChecker that will receive an object with two key/values:
 *
 *   people — Number of people in the household.
 *   tp — Number of rolls.
 *
 * Return a statement telling the user if they need to buy more TP!
 *
 * Examples
 *
 * >> tpChecker({ people: 4, tp: 1 }) ➞ "Your TP will only last 2 days, buy more!"
 * >> tpChecker({ people: 3, tp: 20 }) ➞ "Your TP will last 58 days, no need to panic!"
 * >> tpChecker({ people: 4, tp: 12 }) ➞ "Your TP will last 26 days, no need to panic!"
 */
function tpChecker (object){
    // //one person uses 57 sheets/day. 500 sheets per roll
    // var usage = object.people * 57;
    // var rolls = object.tp * 500;

}

/**
 * Get Student Top Notes
 * Create a function named getStudentTopNotes that takes an array of students and returns an array of their top notes.
 * If the student does not have notes then let's assume their top note is equal to 0.
 *
 * Examples
 *
 * >> getStudentTopNotes([
 *      {
 *         id: 1,
 *         name: "Jacek",
 *         notes: [5, 3, 4, 2, 5, 5]
 *       },
 *      {
 *         id: 2,
 *         name: "Ewa",
 *         notes: [2, 3, 3, 3, 2, 5]
 *       },
 *      {
 *         id: 3,
 *         name: "Zygmunt",
 *         notes: [2, 2, 4, 4, 3, 3]
 *       }
 *    ]) ➞ [5, 5, 4]
 */

// Good news! I caught a bunch of FISH, and I got them in my truck:

var fish1 = { type: "channel catfish", sizeInches: 18, locationCaught: "Lions Park", color: "blue"};

var fish2 = { type: "channel catfish", sizeInches: 19, locationCaught: "Lions Park", color: "blue"};

var fish3 = { type: "redfish", sizeInches: 22, locationCaught: "Braunig Lake", color: "red"};

var fish4 = { type: "redfish", sizeInches: 29, locationCaught: "Braunig Lake", color: "red"};

var kensCatch = [fish1, fish2, fish3, fish4];


// Also, well, I caught these - don't ask me where:

var sewerFish1 = { type: "tropical and unknown", sizeInches: 6, locationCaught: "sewer", color: "green"};

var sewerFish2 = { type: "tropical and unknown", sizeInches: 3, locationCaught: "sewer", color: "blue"};

var strangeCatch = [sewerFish1, sewerFish2];

// Bad news - I need some help with knowing what all I caught!
// Write a function named fishingWeekend that takes in an array of fish objects.
// fishingWeekend() will alert me with three seperate alerts from that array of fish objects:
// 1. First, program an alert letting me know if I caught a red fish, blue fish, both, or neither in my catch [my array].
// 2. Second, an alert letting me know the average sizes of the total number of fish I caught [“That totals up to 4 fish with an average length of 22 inches.“];
// 3. An alert letting me know if I got any catfish [“You caught some catfish tonight!“]
// HINT: Do NOT try to do all of these in one go.
// Write your function out incrementally, one alert at a time, piece by piece to eventually combine into the larger function desired.
// Happy fishing!