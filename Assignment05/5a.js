const person = {
  firstName: "first name",
  secondName: "second name",
  sNumber: "s123456",
  fullName: () => firstName + secondName,
  paymentOfStudies: (monthlyPayement) => monthlyPayement * 12,
};

const personToProperties = (person) => {
  return `firstName type: ${typeof person.firstName}
  secondName type: ${typeof person.secondName}
  sNumber type: ${typeof person.sNumber}
  fullName type: ${typeof person.fullName}
  paymentOfStudies type: ${typeof person.paymentOfStudies}
  `;
};

console.log(personToProperties(person));
