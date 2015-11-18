let myObj = {
  y: 1
}

let { x = 1 } = myObj;

assertEqual(x, 2);
