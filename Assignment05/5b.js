const createStudents = (firstName, lastName, id, grades) => {
  return {
    firstName: firstName,
    lastName: lastName,
    id: id,
    grades: grades,
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

student1.printData();
