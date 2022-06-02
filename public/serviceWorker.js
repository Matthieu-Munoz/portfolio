/* eslint-disable no-restricted-globals */
let CACHE_NAME = 'matthieu-munoz-v1';
const urlsToCache = [
    '/',
];
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
    self.skipWaiting();
});
self.addEventListener('fetch', function (event) {
    event.respondWith(caches.match(event.request)
        .then(function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});