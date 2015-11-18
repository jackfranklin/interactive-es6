function willError() {
  return Promise.reject('whoops!').catch(() => 'Hello');
}

assertResolvesTo(willError(), 'Hey');
