// Create an array of Employee class objects.

// Iterate over the created array using a loop and display the names and salaries of each employee.

class Employee {
	#name;
	#salary;
	
	constructor(name, salary) {
		this.#name = name;
		this.#salary = salary;
	}
	getName() {
		return this.#name;
	}
	getSalary() {
		return this.#salary;
	}
}

let employee = [
	new Employee('john', 1000),
	new Employee('eric', 2000),
	new Employee('kyle', 3000),
];

for (let user of employee) {
	console.log(`${user.getName()} --- ${user.getSalary()}$`);
	
}