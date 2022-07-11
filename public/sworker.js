self.addEventListener("install", (e) => {
  e.waitUntil(
    (async () => {
      const cache = await caches.open("static");
      await cache.addAll([
        "/",
        "../src/App.css",
        "./Images/holyQuranLogo.webp",
        "/Images/logo64.png",
        "/Images/logo192.png",
        "/Images/logo512.png",
      ]);
    })()
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request);
      if (r) {
        return r;
      }
      const response = await fetch(e.request);
      const cache = await caches.open("static");
      cache.put(e.request, response.clone());
      return response;
    })()
  );
});
