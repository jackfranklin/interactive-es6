this.addEventListener('install', function(event) {
  var promise = caches.open('v1').then(function(cache) {
    return cache.addAll([
      '/',
      '/app/vendor/pusher.min.js',
      '/app/vendor/pusher-js-client-auth.js',
      '/jspm_packages/system.js',
      '/config.js',
      '/app.min.js',
    ]);
  });

  event.waitUntil(promise);
});

this.addEventListener('activate', function(event) {
  console.log('I got activated');
});

this.addEventListener('fetch', function(event) {
  console.log('I saw a fetch request', event);
  var returnVal = caches.match(event.request).then(function(response) {
    return response || fetch(event.request);
  });

  event.respondWith(returnVal);
});
