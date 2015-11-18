import React from 'react';
export default [
  {
    index: 1,
    title: 'Defining functions in objects',
    content: (
      <div>
        <p>We've got a shorter way to define functions. Update the object below to use it and call the new method.</p>
      </div>
    )
  },
  {
    index: 2,
    title: 'Default function arguments',
    content: (
      <div>
        <p>If a function isn't given a value, you can tell it what it should use.</p>
      </div>
    ),
  },
  {
    index: 3,
    title: 'Unlimited arguments',
    content: (
      <div>
        <p>Sometimes you just want to take any number of arguments and get them as an array.</p>
        <p>The spread operator (<code>...</code>) lets us do this.</p>
        <p>This is much nicer than working with the inbuilt <code>arguments</code> object.</p>
      </div>
    )
  }
]
