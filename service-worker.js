const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',             // Homepage
  '/styles.css',   // CSS file
  '/script.js',    // JavaScript file
  '/images/logo.png' // Logo image (add your important files here)
];

// Install event: pre-cache important files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event: serve cached files or fetch from network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached response if available
        if (response) {
          return response;
        }

        // Otherwise, fetch from network and dynamically cache images
        return fetch(event.request).then(fetchResponse => {
          return caches.open(CACHE_NAME).then(cache => {
            // Dynamically cache images (jpg, png, gif)
            if (event.request.url.endsWith('.jpg') || 
                event.request.url.endsWith('.png') || 
                event.request.url.endsWith('.gif')) {
              cache.put(event.request, fetchResponse.clone());
            }
            return fetchResponse;
          });
        });
      })
  );
});

// Activate event: clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
