// don't concern yourself with how this function works
// just know that it returns a promise
function getGithubRepos(name) {
  return fetch(`https://api.github.com/users/${name}/repos`).then((response) => {
    return response.json();
  });

}
function githubUsername(name) {
  return getGithubRepos(name).then((data) => {
    return data[0].owner.login;
  });
}

assertResolvesTo(githubUsername('jackfranklin'), 'jackfranklin');

