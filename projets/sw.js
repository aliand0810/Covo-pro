/* Projets Pro — service worker : l'application s'ouvre même hors connexion.
   Pages : réseau d'abord (toujours la dernière version), copie locale si pas de réseau.
   Google (Drive, connexion) et la licence ne sont jamais mis en cache. */
var C = 'covo-suite-projets-v1';
var CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(C).then(function (c) { return c.addAll(CORE); }).catch(function () {})); self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(caches.keys().then(function (k) { return Promise.all(k.filter(function (x) { return x !== C && x.indexOf('covo-suite-projets') === 0; }).map(function (x) { return caches.delete(x); })); })); self.clients.claim(); });
self.addEventListener('fetch', function (e) {
    var r = e.request, u = new URL(r.url);
    if (r.method !== 'GET' || u.origin !== location.origin) return;
    if (!/\/projets\//.test(u.pathname) && u.pathname.indexOf(self.registration.scope.replace(location.origin, '')) !== 0) return;
    e.respondWith(fetch(r).then(function (res) { if (res && res.ok) { var cp = res.clone(); caches.open(C).then(function (c) { c.put(r, cp); }); } return res; })
        .catch(function () { return caches.match(r, { ignoreSearch: true }).then(function (m) { return m || caches.match('./index.html'); }); }));
});
