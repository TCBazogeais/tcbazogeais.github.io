// Service worker minimal : rend l'appli installable sur l'écran d'accueil.
// Pas de cache : la page et les données viennent toujours du réseau (dates et dispos à jour).
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  // La page elle-même : toujours redemandée au serveur (sinon le téléphone peut garder
  // l'ancienne version jusqu'à 10 min après une mise à jour, plus dans l'appli installée).
  if (e.request.mode !== 'navigate') return;
  e.respondWith(
    fetch(e.request.url, { cache: 'no-cache', credentials: 'same-origin' })
      .catch(function () { return fetch(e.request); })
  );
});
