const makePromise = () => {
  return Promise.resolve(2);
}

const promiseChain = () => {
  return makePromise()
    // don't be put off by the arrow functions here!
    .then((x) => x + 1)
    .then((x) => x + 1)
    .then((x) => x + 1);
}

assertResolvesTo(promiseChain(), 6);
