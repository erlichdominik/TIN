let StudentPrototype = {
  listOfCourses: [],
};

const createNewStudent = (firstName, lastName, id) => {
  let student = StudentPrototype;
  student["firstName"] = firstName;
  student["lastName"] = lastName;
  student["id"] = id;
  return student;
};

let newStudent = createNewStudent("adam", "john", "21");

console.log(newStudent);
