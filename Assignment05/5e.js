class Student {
  constructor(firstName, lastName, id, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  setFullName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get avarageGrade() {
    return this.grades.reduce((p, c) => p + c, 0) / this.grades.length;
  }
}

let student1 = new Student("adam", "smith", 2, [1, 2, 3, 4, 5]);

console.log(student1.avarageGrade);
