import React from 'react';
export default [
  {
    index: 1,
    title: 'For small functions, arrow functions offer a cleaner syntax',
    hasResults: true,
    content: (
      <div>
        <p>This code works as is, but study arrow functions closely! You're going to have to type out lots of them...</p>
        <p>Note how we can omit the <code>return</code> keyword from a single line arrow function.</p>
        <p>However, when we split an arrow function over multiple lines we add braces and the <code>return</code> keyword.</p>
      </div>
    )
  },
  {
    index: 2,
    title: 'Passing in arrow functions as arguments',
    hasResults: true,
  },
  {
    index: 3,
    title: 'The scope of arrow functions',
    hasResults: true,
    content: (
      <div>
        <p>The code below logs out the wrong thing. Replace the function with an arrow function and see what happens.</p>
            <p>Can you explain why an arrow function makes the test pass?</p>
      </div>
    )
  }
]
