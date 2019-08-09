
if (workbox) {
    workbox.core.skipWaiting()
    workbox.routing.registerRoute(
        /.+\.{html,js,json,css}$/,
        new workbox.strategies.NetworkFirst()
    )
    workbox.routing.registerRoute(
        /\/icons\//,
        new workbox.strategies.CacheFirst({
            plugins: [
                new workbox.expiration.Plugin({
                    maxAgeSeconds: 60 * 60
                })
            ]
        })
    )
}
