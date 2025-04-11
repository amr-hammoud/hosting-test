// class Animal:
// 	def __init__(self, type):
// 		self.type = type
// def speak():
// 		print("Sound")

class Animal {
	// constructor() {}

	constructor(name) {
		this.name = name;
	}

	speak() {
		console.log("Sound");
	}
}

// const dog = new Animal("dog");
// console.log(dog);

// Inheritance
// class Dog extends Animal {
// 	speak() {
// 		console.log("Bark");
// 	}
// }

// const d = new Dog("Max");
// console.log(d);
// d.speak();

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

// console.log(car)

car.color = "Blue";
car.year = 1999;

// console.log(car)

delete car.year
console.log(car.year)
delete car.start
console.log(car)

car.any = "akdjsf";
console.log(car)


