const makePromise = () => {
  return Promise.resolve(2);
}

const promiseChain = () => {
  return makePromise()
    .then(() => 3)
    .then(() => 4)
    .then(() => 5);
}

const result = {
  value: promiseChain()
}
