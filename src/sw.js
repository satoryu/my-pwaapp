
if (workbox) {
    workbox.core.skipWaiting()

    workbox.precaching.precacheAndRoute([]);

    workbox.routing.registerRoute(
        /.+\.(html|js|json|css)$/,
        new workbox.strategies.NetworkFirst()
    )
    workbox.routing.registerRoute(
        /\/icons\//,
        new workbox.strategies.CacheFirst({
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 50,
                    maxAgeSeconds: 60 * 60
                })
            ]
        })
    )
}
