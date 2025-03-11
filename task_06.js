// In the following code, make the properties private. (old method)

// class Employee {
// 	constructor(name, salary) {
// 		this.name = name;
// 		this.salary = salary;
// 	}
	
// 	getName() {
// 		return this.name;
// 	}
// 	getSalary() {
// 		return this.salary;
// 	}
// }

class Employee1 {
	constructor(name, salary) {
		this._name = name;
		this._salary = salary;
	}
	
	getName() {
		return this._name;
	}
	getSalary() {
		return this._salary;
	}
}


// Make it so that the setters of the Employee class can be called in a chain.


class Employee2 {
	#name;
	#surn;

	setName(name) {
		this.#name = name;
		return this;
	}
	setSurn(surn) {
		this.#surn = surn;
		return this;
	}
	
	getName() {
		return this.#name;
	}
	getSurn() {
		return this.#surn;
	}
}

let employee = new Employee2;

employee.setName('john').setSurn('smit');

console.log(employee.getName());
console.log(employee.getSurn());

