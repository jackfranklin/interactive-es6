// don't concern yourself with how this function works
// just know that it returns a promise
function getGithubInfo(name) {
  return fetch(`http://github-proxy-api.herokuapp.com/users/${name}`).then((response) => {
    return response.json();
  });

}
function githubUsername(name) {
  return getGithubInfo(name).then((data) => {
    return data.login;
  });
}

assertResolvesTo(githubUsername('jackfranklin'), 'jackfranklin');

