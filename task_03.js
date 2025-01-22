// Create a class Student with the properties name and surname.

class Student1 {
    setDetails (name, surname) {
        this.name = name; 
        this.surname = surname; 
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
      }
}

let student1 = new Student1();

student1.setDetails("Alex", "Orel")
console.log(student1.getFullName());


// Create a helper method that will take the first character of a string and make it uppercase.

class Student2 {
    setDetails (name, surname) {
        this.name = this.cape(name); 
        this.surname = this.cape(surname); 
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
      }

      cape(str) {
		return str[0].toUpperCase() + str.slice(1);
	}
}

let student2 = new Student2();
student2.setDetails('alex', 'orlov');
console.log(student2.getFullName()); 


// Create a method that will return the student's initials, i.e., the first letters of their name and surname.

class Student3 {
    setDetails (name, surname) {
        this.name = this.cape(name); 
        this.surname = this.cape(surname); 
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
      }

      cape(str) {
		return str[0].toUpperCase() + str.slice(1);
	}

      getInitials() {
        const nameInitial = this.name ? this.name.charAt(0).toUpperCase() : '';
        const surnameInitial = this.surname ? this.surname.charAt(0).toUpperCase() : '';
		return `${nameInitial}.${surnameInitial}`
	}
}

let student3 = new Student3();
student3.setDetails('alex', 'orlov');
console.log(student3.getInitials());


// Declare the properties name and surname in the Student class.
// When declaring, assign some initial values to your properties.
class Student4 {
    name = "Join"
    age = "22"

    showName() {
		return this.name;
	}
    showAge() {
		return this.age;
	}
}

let student4 = new Student1();

console.log(student1.showName());
console.log(student1.showAge());

