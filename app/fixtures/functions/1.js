const obj = {
  hello() {
    return 'hello';
  },

  // how verbose...
  hey: function() {
    return 'hey'
  }
}

assertEqual(obj.hello(), 'hey');
