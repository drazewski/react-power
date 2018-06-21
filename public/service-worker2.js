const CACHE_NAME = 'react-workshop-v2';
 
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                fetch("asset-manifest.json")
                    .then(res => res.json())
                    .then(assets => {
                        const urlsToCache = [
                            "/",
                            assets["main.js"],
                            assets["main.css"]
                        ];
                        cache.addAll(urlsToCache);
                    })
            })
    );
});
 
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});