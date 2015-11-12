import React from 'react';
export default [
  {
    index: 1,
    title: 'Promises are a nice way to deal with async things',
    hasResults: true,
    content: (
      <div>
        <p>Here you're expected to provide a Promise that will <em>resolve</em> to the expected value</p>
        <p>The code provided works, and you should study it closely.</p>
      </div>
    )
  },
  {
    index: 2,
    title: 'A promise can resolve or reject',
    hasResults: true,
    content: (
      <div>
        <p>The promise in the code is going to reject, which means the <code>catch</code> callback will be run.</p>
        <p><code>Promise.reject</code> lets us create a promise that immediately rejects.</p>
        <p>We tackle a rejection by providing a <code>catch</code> function.</p>
        <p>Change the string the <code>catch</code> function returns to pass this test.</p>
      </div>
    )
  },
  {
    index: 3,
    title: 'We can create chains of promises',
    hasResults: true,
    content: (
      <div>
        <p>Any value returned from a <code>then</code> is wrapped in a promise.</p>
      </div>
    )
  }
]
