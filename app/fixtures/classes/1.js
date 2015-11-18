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

assertEqual(jack.fullName(), 'Jack Franklin');
