import React from 'react';
export default [
  {
    index: 1,
    title: 'Object destructuring is really succinct',
    hasResults: true,
    content: (
      <div>
        <p>If you want to pull a couple of properties of an object, you can use the object destructuring syntax.</p>
      </div>
    )
  },
  {
    index: 2,
    title: 'If a value doesn\'t exist, it is set to undefined',
    hasResults: true,
    content: (
      <div>
        <p>If you try to destructure a value that doesn't exist, it is set to undefined</p>
      </div>
    ),
  },
  {
    index: 3,
    title: 'We can set a value to be used if there isn\'t one defined',
    hasResults: true,
    content: (
      <div>
        <p>You can set a default value too if the value doesn't exist</p>
      </div>
    )
  },
  {
    index: 4,
    title: 'You can destructure inside function arguments',
    hasResults: true,
    content: (
      <div>
        <p>This code passes the test, but how could you rewrite it to be more succinct?</p>
      </div>
    )
  },
  {
    index: 5,
    title: 'We can also destructure arrays',
    hasResults: true,
    content: (
      <div>
        <p>By swapping the curly braces for square ones, we can pull values out of arrays.</p>
      </div>
    )
  }
]
