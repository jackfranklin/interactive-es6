const addTwo = (x) => x + 2;

const addThree = (x) => {
  return x + 3;
}

assertEqual(addTwo(1), 4);
assertEqual(addThree(3), 5);
