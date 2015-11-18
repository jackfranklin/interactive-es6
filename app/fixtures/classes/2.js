class Person {
  constructor(name) {
    this.name = name;
  }
}

class Jack extends Person {
  fullName() {
    return this.name + ' ???';
  }
}

const jack = new Jack('Jack');

assertEqual(jack.fullName(), 'Jack Franklin');
