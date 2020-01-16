self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('my-app-cache').then(cache => cache.add('/'))
    )
})

self.addEventListener('fetch', (e) => {
    e.respondWith(caches.open('my-app-cache').then(cache => cache.match(e.request).then(response => {
        return response? response: fetch(e.request);
    })))
})

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(keys => Promise.all(keys.map(key => {
            if (key !== 'my-app-cache') {
                caches.delete(key);
            }
        })))
    )
})