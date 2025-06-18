self.addEventListener('install', e => {
    e.waitUntil(
      caches.open('macro-cache').then(cache => {
        return cache.addAll([
          './',
          './index.html',
          './style.min.css',
          './products.html',
          './script.min.js',
          './calculator.min.js',
          './manifest.json',
          './icon.png',
          './locales/en.json',
          './locales/es.json',
          './locales/pt.json',
          './locales/fr.json',
          './locales/de.json',
          './locales/it.json',
          './locales/tr.json',
          './locales/pl.json'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', e => {
    e.respondWith(
      caches.match(e.request).then(response => {
        return response || fetch(e.request);
      })
    );
  });
