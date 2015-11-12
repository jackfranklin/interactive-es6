const jack = {
  name: 'Jack',
  friends: ['alice', 'bob'],
  logFriends() {
    let output = [];
    // replace this function with an arrow
    // but first: why does this code cause an error?
    this.friends.forEach(function(friend) {
      output.push(this.name + ' knows ' + friend);
    });

    return output;

    // BONUS: logFriends() would be much nicer if it used map and not forEach.
  }
}

const result = {
  friends: jack.logFriends().join(', ')
}
