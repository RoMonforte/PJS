const VERSION = "v1";

self.addEventListener('install', event => {
    event.waitUntil(precache())
});

self.addEventListener('fetch', event => {
    const request = event.request;
    if(request.method != "GET" ) {
        return;
    }

    event.respondWith(cachedResponse(request))

    event.waitUntil(updateCache(request))
});

async function precache () {
    const cache = await caches.open(VERSION);
    return cache.addAll ([
        '/',
        '/index.html',
        '/assets/video.mkv',
        '/assets/index.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/plugins/MediaPlayer.js',
        '/styles.css',

    ]);
}

function cachedResponse(request) {
    const cache = await caches.open (VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}

function updateCache(request) {
    const cache = await caches.open (VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}