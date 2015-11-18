var test = function(data) {
  var { x } = data;

  return x;
}

assertEqual(2, test({ x: 1 }));
