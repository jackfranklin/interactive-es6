var test = function(data) {
  var { x } = data;

  return x;
}

var result = {
  value: test({ x: 1 }),
}
