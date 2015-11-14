import React from 'react';
export default [
  {
    index: 1,
    title: 'String concatenation is so dull',
    hasResults: true,
    content: (
      <div>
        <p>If we want to output a variable in a string we use <code>+</code>.</p>
      </div>
    )
  },
  {
    index: 2,
    title: 'Template strings to the rescue!',
    hasResults: true,
    content: (
      <div>
        <p>We use the new backticks syntax to create strings where we can <em>interpolate</em> values into a string.</p>
      </div>
    )
  }
]
