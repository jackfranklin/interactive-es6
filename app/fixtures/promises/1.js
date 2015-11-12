// getJson is a function I've defined for you
// don't concern yourself with how it works, other than
// it returns a Promise
function githubUsername(name) {
  return getJson('https://api.github.com/users/' + name + '/repos').then((data) => {
    return data[0].owner.login;
  });
}

const result = {
  name: githubUsername('jackfranklin')
}

