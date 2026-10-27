// Service worker minimal : rend l'appli installable sur l'écran d'accueil.
// Pas de cache : la page et les données viennent toujours du réseau (dates et dispos à jour).
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
