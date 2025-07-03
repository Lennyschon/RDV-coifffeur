self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('rdv-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './confirmation.html',
        './image0(6).jpeg',
        './icon-512.png',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
