const CACHE_NAME = 'google-maps-cache-v1';
const urlsToCache = [
  'https://maps.googleapis.com/maps/api/js?key=AIzaSyDFu_z2ze9oY2Ipb0HWriMStIEPDAlJvhQ&callback=initMap',
  // Agrega aquí otras URLs que quieras almacenar en caché
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
