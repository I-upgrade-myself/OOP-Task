// Pass the employee's name and salary to the constructor of the Employee class.

class Employee1 {
	constructor(name, salary) {

        this.name = name;
        this.salary = salary;
		console.log(name + ' ' + salary);
	}
}

let employee1 = new Employee1("Alex", "1200$")


// In the Employee class, create three private properties: name, salary, and age.
// Pass the values of these properties as parameters to the constructor.
// Create a method that will display the employee's details.
class Employee2 {
    #name;
    #salary;
    #age;
	constructor(name, salary, age) {
        this.#name = name;
        this.#salary = salary;
        this.#age = age;
		
	}

    getName() {
        return this.#name;
      }
    
      
      getSalary() {
        return this.#salary;
      }
    
      
      getAge() {
        return this.#age;
      }

      getDetails() {
        return `${this.#name} - ${this.#salary} - ${this.#age}`;
      }
}

let employee2 = new Employee2("Alex", "1200$", '27')
console.log(employee2.getDetails());
console.log(employee2.getName());
console.log(employee2.getSalary());
console.log(employee2.getAge());


// Make the helper method private.

class Employee3 {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}
	
	getSalary() {
		return this.#addSign(this.salary);
	}
	
	#addSign(num) {
		return num + '$';
	}
}

let employee3 = new Employee3("alex", "1200")
console.log(employee3.getSalary())

