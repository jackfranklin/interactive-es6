function willError() {
  return Promise.reject('whoops!');
}

const result = {
  message: willError().catch(() => 'Hello')
}
