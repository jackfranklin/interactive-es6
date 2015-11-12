class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return '???';
  }
}

const jack = new Person('Jack', 'Franklin');

const result = {
  name: jack.fullName()
}
