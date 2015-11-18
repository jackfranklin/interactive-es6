const jack = {
  name: 'Jack',
  friends: ['alice', 'bob'],
  logFriends() {
    let output = [];
    // replace this function with an arrow
    // but first: why doesn't this code work?
    this.friends.forEach(function(friend) {
      output.push(this.name + ' knows ' + friend);
    });

    return output;

    // BONUS: logFriends() would be much nicer if it used map and not forEach.
  }
}

assertEqual(jack.logFriends.join(', '), 'Jack knows alice, Jack knows bob');
