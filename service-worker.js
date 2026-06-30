const CACHE_NAME = 'mfc-youth-cache-v6';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './js/firebase-config.js',
  './logo.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Only intercept GET requests, skip Firestore/Auth API calls
  if (event.request.method !== 'GET' || event.request.url.includes('firestore') || event.request.url.includes('identitytoolkit')) {
    return;
  }
  
  // Network First, falling back to cache strategy
  event.respondWith(
    fetch(event.request).then(response => {
      // If network fetch is successful, clone it and put in cache
      if (response && response.status === 200 && response.type === 'basic') {
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
      }
      return response;
    }).catch(() => {
      // If network fails, try to serve from cache
      return caches.match(event.request);
    })
  );
});