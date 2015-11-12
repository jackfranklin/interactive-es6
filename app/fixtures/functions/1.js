const obj = {
  hello() {
    return 'hello';
  },

  // how verbose...
  hey: function() {
    return 'hey'
  }
}

const result = {
  greeting: obj.hello()
}
