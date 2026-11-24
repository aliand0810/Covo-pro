/* COVO Pro — service worker : chargement instantané des modules, page toujours à jour */
const VER = '58e454ccb8', CACHE = 'covo-appro-' + VER, ASSETS = ["./", "js/01-covo-pack-sauvegardes-google.0df961d724.js", "js/02-ouverture-sans-page-compacte.7380887ce5.js", "js/03-covo-sync-noyau-partage-par-.6b3ebe5e90.js", "js/04-investissement-pro-module-co.3acab6d76e.js", "js/05-approvisionnement-pro-mode-p.7f3b026d83.js", "css/01-refonte-affichage-approvisio.5e18b16848.css", "img/3bea330a6a.png"];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(() => {}).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('covo-appro-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const u = new URL(r.url); if (u.origin !== location.origin) return;
  const scope = new URL('./', self.registration.scope).pathname, p = u.pathname;
  if (!p.startsWith(scope)) return;
  const rel = p.slice(scope.length);
  if (/^(js|css|img)\//.test(rel)) {            // fichier à empreinte : jamais modifié → cache d'abord
    e.respondWith(caches.match(r).then(hit => hit || fetch(r).then(res => { if (res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); } return res; })));
    return;
  }
  if (r.mode === 'navigate' || rel === '' || rel === 'index.html') {   // la page : réseau d'abord (mises à jour), cache si hors ligne
    e.respondWith(fetch(r).then(res => { if (res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put('./', cp)); } return res; }).catch(() => caches.match('./').then(hit => hit || caches.match(r))));
  }
});
