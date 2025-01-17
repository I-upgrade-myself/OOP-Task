// Create a test method in your Employee class. Call it.

class Employee {
    show() {
        return `WWW`
    }

    showInfo(name, salary) {
        return `${name}: ${salary}`
    }

    printName() {
        return this.name
    }
    printSalary() {
        return this.salary
    }
}

let employee = new Employee()

console.log(employee.show());

// Pass the employee's name and salary to your test method.
let name = "Max"
let salary = "2000$"
console.log(employee.show(name, salary));


// In the Employee class object, assign the properties name and salary.

let employee1 = new Employee()

employee1.name = "John"
employee1.salary = "3000$"

// Create a method that will display the employee's name on the screen.
console.log(employee1.printName());

// Create a method that will display the employee's salary on the screen.
console.log(employee1.printSalary());