class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  setFullName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Student extends Person {
  constructor(firstName, lastName, id, grades) {
    super(firstName, lastName);
    this.id = id;
    this.grades = grades;
  }

  getAvgGrades() {
    return this.grades.reduce((p, c) => p + c, 0) / this.grades.length;
  }
}

let student1 = new Student("adam", "smith", 2, [1, 2, 3, 4, 5]);

console.log(student1.getAvgGrades());
