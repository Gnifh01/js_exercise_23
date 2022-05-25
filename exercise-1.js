const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// Print values of person using Object.keys
Object.keys(person).forEach((key) => {
  let values = person[key];
  console.log(`${key}: ${values}`);
});

