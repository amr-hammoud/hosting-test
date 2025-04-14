// Object Oriented Programming
// Object Oriented Programming (OOP) is a programming paradigm that uses objects to represent data and methods to manipulate that data.
// OOP is based on the concept of objects, which are instances of classes. A class is a blueprint for creating objects. A class defines the properties and methods of an object. An object is an instance of a class. An object can have properties and methods. Properties are variables that belong to an object. Methods are functions that belong to an object.


// Example of OOP in JavaScript
// In JavaScript, we can create classes using the class keyword. A class can have a constructor, which is a special method that is called when an object is created from the class. The constructor can take parameters, which are used to initialize the properties of the object. A class can also have methods, which are functions that belong to the class.
class Animal {
	constructor() {}

	constructor(name) {
		this.name = name;
	}

	speak() {
		console.log("Sound");
	}
}

const animal = new Animal("Max");
animal.speak()

// Inheritance
// Inheritance is a way to create a new class that is based on an existing class. The new class is called a subclass, and the existing class is called a superclass. The subclass inherits the properties and methods of the superclass. In JavaScript, we can create a subclass using the extends keyword.
// The subclass can override the methods of the superclass by defining a method with the same name in the subclass. The subclass can also add new properties and methods.
// The subclass can also call the constructor of the superclass using the super keyword. The super keyword is used to call the constructor of the superclass and to access the properties and methods of the superclass.
class Dog extends Animal {

	constructor(name) {
		super(name); // call the constructor of the superclass
		this.name = name;
	}

	speak() {
		console.log("Bark");
	}
}

const dog = new Dog("Max");
d.speak();


// Example 2
class Vehicle {
	constructor(model, year, color) {
		this.model = model;
		this.year = year;
		this.color = color;

		this.nbOfSeats = 4;
		this.start = function () {
			console.log("Started");
		};
	}
}

class Car extends Vehicle {}

const car = new Car("Honda", 2025, "Black");
car.start()


// you can update properties of the object after it has been created
car.color = "Blue";
car.year = 1999;


// you can also delete properties of the object after it has been created
delete car.year
console.log(car.year)
delete car.start
console.log(car)

// you can also add new properties to the object after it has been created
car.any = "akdjsf";
console.log(car)


