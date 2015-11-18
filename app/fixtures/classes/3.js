class Person {
  constructor(name) {
    this.name = name;
  }
}

const jack = new Person('Jack');
jack.name = 'Bob';

assertEqual(jack.name, 'Jack');
