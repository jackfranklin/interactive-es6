import React from 'react';
export default [
  {
    index: 1,
    title: 'The problem with variabes',
    hasResults: true,
    content: (
      <div>
        <p>The problem with <code>var</code> is that it is scoped to functions, so they leak out of things like conditionals. This can create confusing code, as demonstrated below.</p>
      </div>
    )
  },
  {
    index: 2,
    title: 'Let doesn\'t have this problem',
    hasResults: false,
    content: (
      <div>
        <p>Notice that when you run this code you get an error. Why is that? Don't worry about fixing the error, but notice how the behaviour of <code>let</code> differs from that of <code>var</code>.</p>
      </div>
    ),
  },
  {
    index: 3,
    title: 'We can also create constants',
    hasResults: false,
    content: (
      <div>
        <p>Notice that when you run this code you get an error. Why is that? Don't worry about fixing the error, but notice how we are not allowed to modify a constant.</p>
      </div>
    )
  },
  {
    index: 4,
    title: 'We can edit certain constants',
    hasResults: true,
    content: (
      <div>
        <p>When a constant is an object, you can modify its values, but you can't redefine the entire object.</p>
      </div>
    )
  }
]
