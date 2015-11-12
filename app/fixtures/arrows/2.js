let numbers = [1, 2, 3, 4];

// replace the function with an arrow function
let doubled = numbers.map(function(x) {
  return x * 2;
});

const result = {
  numbers: doubled.join(', ')
}
