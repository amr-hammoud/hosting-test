// ===================================
// ----------- Data Types ------------
// ===================================

// ------------- String --------------
// declare string using single or double quotes
// or backticks (template literals)
const name1 = `Alex`;
const name2 = 'hello "Alex"';
const name3 = "hello 'Alex'";

// concatination
const name6 = "hello" + " " + "Alex"; // hello Alex
const name7 = "hello" + " " + name1; // hello Alex
const name8 = "hello" + ` ${name1}`; // hello Alex
const name9 = `hello ${name1}`; // hello Alex (string interpolation)

// multiline string
const name5 = `hello
Alex
how are you`;

// ------------- Number --------------
const a = 1; // integer
const c = -5; // negative integer
const b = 1.001; // float
const d = -1.001; // negative float
const e = 5 / 2; // float (fraction)

const h = 5 + 2; // addition (7)
const i = 5 - 2; // subtraction (3)
const j = 5 * 2; // multiplication (10)
const k = 5 / 2; // division (2.5)
const l = 5 % 2; // modulus (1)
const m = 5 ** 2; // power (25)

// ------------- Boolean -------------
// true or false
const t = true;
const f = false;

// ------------- Undefined -----------
// in JS, undefined is a type
const u = undefined;

// ------------- Null ----------------
// null is an object type in JS
const n = null;

// ------------- Array ---------------
// array is a list of values
// array can contain different data types
// array can contain other arrays or objects
const array1 = [1, 2, 3, 4];
const array2 = [
	1,
	"Ali",
	true,
	[1, 2, 3, 4],
	{
		car: "Mercedes",
		color: "White",
	},
];

// array methods
const array4 = array1.slice(1, 3); // [2, 3]
const array5 = array1.splice(1, 2); // [2, 3] (removes 2 elements from index 1)
const array6 = array1.concat(array4); // [1, 2, 3, 4, 5, 2, 3]
const array7 = array1.join(" "); // "1 2 3 4 5"
const array8 = array1.reverse(); // [5, 4, 3, 2, 1]
const array9 = array1.sort(); // [1, 2, 3, 4, 5] (sorts the array in ascending order)

// ------------- Object --------------
// object is a key-value pair
// object can contain different data types
// object can contain other objects or arrays
// object can contain functions (methods)
const myObject = {
	car: "BMW",
	color: "Black",
	year: 2025,

	// object can contain arrays
	array: [1, 2, 3, 4],

	// object can contain other objects
	owner: {
		name: "Alex",
		age: 25,
	},

	// object can contain functions (methods)
	start: function () {
		console.log("Car started");
	},
};

// ===================================
// -------------- Loops --------------
// ===================================

// ----------- for loop --------------
// for (initial value; break statement; iterator) {
// 	code block to be executed
// }
for (let i = 0; i < 5; i++) {
	console.log(i);
}

// ---------- for in loop -----------
// for (key in object) {
// 	code block to be executed
// }
for (let key in myObject) {
	console.log(key, myObject[key]);
}
// ---------- for of loop -----------
// for (value of array) {
// 	code block to be executed
// }
for (let value of array1) {
	console.log(value);
}
// ---------- forEach loop ----------
// array.forEach(function (value, index) {
// 	code block to be executed
// });
array1.forEach(function (value, index) {
	console.log(value, index);
});
// ----------- while loop -----------
// while (condition) {
// 	code block to be executed
// }
let x = 0;
while (x < 5) {
	console.log(x);
	x = x + 1;
}
// ----------- do while loop -------
// do {
// 	code block to be executed
// } while (condition);
// do while loop will execute the code block at least once
let y = 0;
do {
	y = y + 1;
	console.log(y);
} while (y < 5);


// ===================================
// ------------ Conditions -----------
// ===================================

// ----------- if statement ---------
// if (condition) {
// 	code block to be executed if condition is true
// } else {
// 	code block to be executed if condition is false
// }
// if (condition1) {
// 	code block to be executed if condition1 is true
// } else if (condition2) {
// 	code block to be executed if condition2 is true
// } else {
// 	code block to be executed if condition1 and condition2 are false
// }

const num = 5;
if (num < 10) {
	console.log("small");
} else if (num > 10 && num < 20) {
	console.log("medium");
} else {
	console.log("large");
}

// x < 5 and x > 0 --py
// x < 5 && x > 0 --js

// x < 5 or x > 0 --py
// x < 5 || x > 0 --js

// not true = false --py
// !true = false --js

// console.log(1 == "1") // loose comparison
// console.log(1 === "1") // strict compare (compares type also)

// console.log(1 != "1") // loose comparison
// console.log(1 !== "1") // strict compare (compares type also)

// -------- switch statement ---------
// switch (expression) {
// 	case value1:
// 		code block to be executed if expression === value1
// 		break;
// 	case value2:
// 		code block to be executed if expression === value2
// 		break;
// 	default:
// 		code block to be executed if expression doesn't match any case
// 		break;
// }
// switch statement is used to execute one block of code among many alternatives
// switch statement is similar to if else statement but faster and used when you have multiple cases to check

const day = "wed";
switch (day) {
	case "sat":
		console.log("class");
		break;
	case "sun":
		console.log("class");
		break;
	default:
		console.log("no class");
		break;
}

// equivalent to the switch above
if (day === "sat") {
	console.log("class");
} else if (day === "sun") {
	console.log("class");
} else {
	console.log("no class");
}
