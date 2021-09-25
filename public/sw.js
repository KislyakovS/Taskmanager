const CACHE_PREFIX = 'taskmanager';
const CACHE_VERSION = 'v1';
const CACHE_NAME = `${CACHE_PREFIX}-${CACHE_VERSION}`;
const CACHE_FIELS = [
    '/',
    '/index.html',
    '/bundle.js',
    '/fonts/HelveticaNeueCyr-Bold.woff2',
    '/fonts/HelveticaNeueCyr-Roman.woff2',
    '/fonts/HelveticaNeueCyr-Medium.woff2',
    '/css/normalize.css',
    '/css/style.css'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => cache.addAll(CACHE_FIELS))
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches
            .keys()
            .then((keys) => Promise.all(
                keys.map((key) => {
                    if (key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME) {
                        return caches.delete(key);
                    }

                    return null;
                }).filter(key => key)
            ))
    );
});

self.addEventListener('fetch', (event) => {
    const { request } = event;

    event.respondWith(
        caches
            .match(request)
            .then(cacheResponse => {
                if (cacheResponse) {
                    return cacheResponse;
                }

                return fetch(request)
                    .then((response) => {
                        if (
                            !response ||
                            response.status !== 200 ||
                            response.type !== 'basic' ||
                            !response.url.startsWith('http')
                        ) {
                            return response;
                        }

                        const clonedResponse = response.clone();

                        caches
                            .open(CACHE_NAME)
                            .then(cache => cache.put(request, clonedResponse));
                    });
            })
    )
});