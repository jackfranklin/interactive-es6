import React from 'react';
export default [
  {
    index: 1,
    title: 'The class syntax',
    hasResults: true,
    content: (
      <div>
        <p>The syntax for defining classes is pretty similar to other languages.</p>
        <p>The <code>constructor</code> method is called when we create a new instance.</p>
        <p>Note the shorter syntax for defining methods too.</p>
      </div>
    )
  },
  {
    index: 2,
    title: 'Extending classes',
    hasResults: true,
    content: (
      <div>
        <p>Classes can extend (or inherit from) others, although you should do this with caution.</p>
      </div>
    ),
  },
  {
    index: 3,
    title: 'Classes are objects',
    hasResults: true,
    content: (
      <div>
        <p>Classes are just regular JavaScript objects</p>
      </div>
    )
  }
]
