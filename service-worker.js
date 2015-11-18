this.addEventListener('install', function(event) {
  var promise = caches.open('v1').then(function(cache) {
    return cache.addAll([
      '/',
      '/app/vendor/pusher.min.js',
      '/app/vendor/pusher-js-client-auth.js',
      '/jspm_packages/system.js',
      '/config.js',
      '/app.min.js',
      '/app/features/arrows.js',
      '/app/features/classes.js',
      '/app/features/destructuring.js',
      '/app/features/functions.js',
      '/app/features/promises.js',
      '/app/features/scopes.js',
      '/app/features/template-strings.js',
      '/app/fixtures/arrows/1.js',
      '/app/fixtures/arrows/2.js',
      '/app/fixtures/arrows/3.js',
      '/app/fixtures/classes/1.js',
      '/app/fixtures/classes/2.js',
      '/app/fixtures/classes/3.js',
      '/app/fixtures/destructuring/1.js',
      '/app/fixtures/destructuring/2.js',
      '/app/fixtures/destructuring/3.js',
      '/app/fixtures/destructuring/4.js',
      '/app/fixtures/destructuring/5.js',
      '/app/fixtures/functions/1.js',
      '/app/fixtures/functions/2.js',
      '/app/fixtures/functions/3.js',
      '/app/fixtures/promises/1.js',
      '/app/fixtures/promises/2.js',
      '/app/fixtures/promises/3.js',
      '/app/fixtures/scopes/1.js',
      '/app/fixtures/scopes/2.js',
      '/app/fixtures/scopes/3.js',
      '/app/fixtures/scopes/4.js',
      '/app/fixtures/template-strings/1.js',
      '/app/fixtures/template-strings/2.js',
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
