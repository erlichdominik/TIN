const createStudents = (firstName, lastName, id, grades) => {
  return {
    firstName: firstName,
    lastName: lastName,
    id: id,
    grades: grades,
    getAvarageGrade: () => grades.reduce((p, c) => p + c, 0),
    getStudentFullName: () => firstName + lastName,
    setStudentFullName: (firstName, lastName) => {
      firstName = firstName;
      lastName = lastName;
    },
    printData: () => {
      console.log(
        `${firstName}, ${lastName}, avg: ${
          grades.reduce((p, c) => p + c, 0) / grades.length
        }`
      );
    },
  };
};

let student1 = createStudents("Adam", "John", 1, [1, 2, 3, 4, 5]);
console.log(student1.getStudentFullName());
student1.printData();
