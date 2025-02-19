// Add getters and setters for the properties in your Employee class.

class Employee1 {
  #name;
	#surname;
	#salary;

  setName(name) {
		this.#name = name;
	}
	setSurname(surname) {
		this.#surname = surname;
	}
	setSalary(salary) {
		this.#salary = salary;
	}

  getName() {
		return this.#name;
	}
	getSurname() {
		return this.#surname;
	}
	getSalary() {
		return this.#salary;
	}
}

let employee1 = new Employee1()

employee1.setName("Alex");
employee1.setSurname("Orlow");
employee1.setSalary("1200$");

console.log(employee1.getName());
console.log(employee1.getSurname());
console.log(employee1.getSalary());


// In the Employee class, in the setter for age, add a check to ensure that the age is between 0 and 120.
// In the Employee class, in the getter for salary, make it so that when reading the salary, a dollar sign is added at the end of its value.

class Employee2 {
  #name;
	#surname;
	#salary;
	#age;

  setName(name) {
		this.#name = name;
	}
	setSurname(surname) {
		this.#surname = surname;
	}
	setSalary(salary) {
		this.#salary = salary;
	}
	setAge(age) {
    if (age < 0 || age > 120) {
      throw new Error('Вік має бути в межах від 0 до 120.');
    }
    this.#age = age;
	}

  getName() {
		return this.#name;
	}
	getSurname() {
		return this.#surname;
	}
	getSalary() {
		return `${this.#salary}$`
	}
	getAge() {
		return this.#age;
	}
}

let employee2 = new Employee2()

employee2.setName("Alex");
employee2.setSurname("Orlow");
employee2.setSalary("1200");
employee2.setAge("45");

console.log(employee2.getName());
console.log(employee2.getSurname());
console.log(employee2.getSalary());
console.log(employee2.getAge());
// Error
employee2.setAge("145");
console.log(employee2.getAge());