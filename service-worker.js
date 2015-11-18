this.addEventListener('install', function(event) {
  console.log('I got installed!');
});

this.addEventListener('activate', function(event) {
  console.log('I got activated');
});

this.addEventListener('fetch', function(event) {
  console.log('I saw a fetch request', event);
  var returnVal = caches.match(event.request).catch(function() {
    return fetch(event.request).then(function(response) {
      return caches.open('v1').then(function(cache) {
        cache.put(event.request, response.clone());
        return response;
      });
    });
  }).catch(function(e) {
    console.log('I got caught', e);
    return new Response('Something went wrong');
  });
  console.log('got return', returnVal);
  event.respondWith(returnVal);
});
