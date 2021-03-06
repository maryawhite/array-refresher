"use strict"
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
// console.log(sequence);
// console.log(sequence.pop()); //returns 5 bc it returns what you popped off

var shapes = ['square', 'rectangle', 'circle', 'triangle'];

// loop through the array and log the values
for (var i = 0; i < shapes.length; i++) {
	console.log('The shape at index ' + i + ' is: ' + shapes[i]);
}

// var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// // loop through the array and log the values
// shapes.forEach(function(shape) {
// 	console.log('Here is a lovely shape: ' + shape + '.');
// });

var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());
// console.log(fruits.join(":)"));

// var planets = ["Mercury", "Venus", "Earth"];
// planets.push("Mars");
// console.log(planets);
// planets[planets.length] = "Jupiter";
// console.log(planets);
// planets.unshift("Saturn");
// console.log(planets);

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
 function mapping (array){
	 var myObj = {};
	 for(var i = 0; i < array.length; i++) {
		 // var key = array[i];
		 // var value = array[i].toUpperCase();
		 // myObj = key + value;
		 myObj[array[i]] = array[i].toUpperCase();
	 }
	return myObj;
}

console.log(mapping(["p", "s"]));
console.log(mapping(["a", "b", "c"]));
console.log(mapping(["a", "v", "y", "z"]));


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
function fishingWeekend (array){
	if (array.color === "blue"){
		alert("you got a blue fish");
	}
	if(array.color === "red"){
		alert("you got a red fish");
	}
	if (array.color !== "blue" && array.color !== "red"){
		alert("the fish is neither red nor blue");
	}
}
// console.log(fishingWeekend(fish1));
// console.log(fishingWeekend(fish2));
// console.log(fishingWeekend(fish3));
// console.log(fishingWeekend(fish4));

//youtube Dave Gray Arrays in Javascript
// const myArray = [];
// myArray[0] = "Dave";
// myArray[1] = 1001;
// myArray[2] = "ford";
// console.log(myArray);

//last element in an array
// console.log(myArray[myArray.length -1]); //this prints the thing that is the last item, which is false in this example.
// console.log(myArray.length - 1); //this prints the length...2
// myArray.push("school");
// console.log(myArray);
// myArray.pop();
// console.log(myArray);
// var popped = myArray.pop();
// console.log(popped + " is removed");
// console.log(myArray);
// myArray.unshift("Mary", "Sarah");
// console.log(myArray);
// myArray.splice(0, 1, "Maria"); //splice can be used to delete and insert items
// console.log(myArray);

// var abcArray = ["A", "B", "C", "D", "E", "F"];
// var newAbc = abcArray.slice(2);  //slice returns a new array
// console.log(newAbc);
// // console.log(abcArray.reverse());
// console.log(abcArray.join(",")); //join turns the array into a string separated by commas or the delimiter of your choice
// var newString = abcArray.join(",");
// console.log(newString);
// var anotherArray = newString.split(",");
// console.log(anotherArray);
//
// var namesArray = ["dog", "cat", "bird", "horse", "mouse"];
// var namesString = namesArray.join(" ");
// console.log(namesString);
// var namesArrayB = namesString.split(" "); //split turns a string into an array
// console.log(namesArrayB);

var myArrayA = ["A", "B", "C"];
var myArrayB = ["X", "Y", "Z"];

var newArray = myArrayA.concat(myArrayB);
console.log(newArray);
var spreadOper = [...myArrayA, ...myArrayB]; //the spread operator is a newer way to concatenate 2 arrays
console.log(spreadOper);

//nested Arrays
var equipShelfA = ["baseball", "football", "volleyball"];
var equipShelfB = ["basketballs", "golf balls", "tennis balls"];

var clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
var clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

var equipDept = [equipShelfA, equipShelfB];
var clothesDept = [clothesShelfA, clothesShelfB];

var sportsStore = [equipDept, clothesDept];

console.log(sportsStore[0][0][1]); //this will find index 0 of sportsStore, then index 0 of the equipDept, then index 1 of equipShelfA, which football.
console.log(sportsStore[1][1][0]);

let arr = [{
	firstName: "Steven",
	lastName: "Hancock",
	score: 90
}, {
	firstName: "Lynette",
	lastName: "Jorgensen",
	score: 100
}, {
	firstName: "Andrew",
	lastName: "Wilson",
	score: 71
}, {
	firstName: "Ann",
	lastName: "Turner",
	score: 82
}];

//sort the array of objects by lastName using a callback function -1, 1, or 0
// arr.sort(function(a, b) {
// 	if (a.lastName.toLowerCase() < b.lastName.toLowerCase()  //this is a shortened version of the if statement. no curly braces if there's only 1 if statement
// 	) return -1;  //if the first should come before the second, return a neg numb
// 	if (a.lastName.toLowerCase() > b.lastName.toLowerCase()
// 	) return 1;
// 	return 0;  //you don't have to type out the full statement...
// });
// console.log(arr);

//now sort by score, lowest score to highest score
arr.sort(function(a, b) {
	return a.score - b.score  //if b is larger than a it will return a neg num.
});
console.log(arr);

//create an object with new
var obj1 = new Object();   //new is a keyword
console.log(obj1);

//create an object literal
var obj2 = {};

//create an object Object.create
var obj3 = Object.create(null);  //null is no prototype?

//define a property using . dot notation
obj3.firstName = "Mary";
console.log(obj3);

var user1 = {
	firstName: "James",
	lastName: "Heywood",
	levelsComplete: [1,2,3],
	fullName: function(){
		return this.firstName + " " + this.lastName;
	},
	startDate: new Date("January 1, 2017")
};

//access arrays on an object
console.log(user1.levelsComplete[0]);  //will log 1 because 1 is the thing at index 0

//add to the array
user1.levelsComplete.push(4); //this will add the number 4 to the end of the array in the object

//access the function that's in the object
console.log(user1.fullName());

//use bracket notation instead of dot notation, remember to use "" in the bracket
console.log(user1["firstName"]);
console.log(user1["levelsComplete"]);
console.log(user1["first" + "Name"]);
var fName = "fullName";
//invoke the fullname method...the variable is an expression
console.log(user1[fName]());












