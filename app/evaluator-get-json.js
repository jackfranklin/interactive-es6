const getJson = function(url) {
  return fetch(url).then(r => r.json());
}
