// getJson is a function I've defined for you, don't worry about it...
function githubUsername(name) {
  return getJson('https://api.github.com/users/' + name + '/repos').then((data) => {
    return daaata[0].owner.login;
  });
}

const result = {
  name: githubUsername('jackfranklin')
}

