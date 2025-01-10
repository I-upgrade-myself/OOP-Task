// Create a class Employee
// Create an object of the Employee class and log it to the console.
class Employee {
    
}

let employee = new Employee();
console.log(employee);

// In the Employee class object, assign the properties name, age, and salary.

employee.name = "Alex"
employee.age = 25
employee.salary = '2500$'

// Retrieve the data from the assigned properties and display them on the screen.

console.log(employee.name);
console.log(employee.age);
console.log(employee.salary);


// Create several objects of the Employee class.

let employee1 = new Employee();
let employee2 = new Employee();

// Assign each employee's name and salary to the respective property.

employee1.name = "Petro"
employee1.age = 32
employee1.salary = '3700$'

employee2.name = "Max"
employee2.age = 23
employee2.salary = '2300$'

// Display the total salary of the employees you have created on the screen.

console.log(parseFloat(employee1.salary.replace('$', '')) + parseFloat(employee2.salary.replace('$', '')));

// ==>