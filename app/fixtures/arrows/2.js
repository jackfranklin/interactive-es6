let numbers = [1, 2, 3, 4];

// replace the function with an arrow function
let doubled = numbers.map(function(x) {
  return x * 2;
});

assertEqual(doubled.join(', '), '1, 4, 6, 7');
