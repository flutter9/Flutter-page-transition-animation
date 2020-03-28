'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/images/three.jpg": "b0d13820dd5e75ef21c40a1b0b180321",
"/assets/assets/images/two.jpg": "2c409d976f71ac94cfe534addd6490b9",
"/assets/assets/images/one.jpg": "e9be9a8ac552ddcdf3b511d8f20da699",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "93fdddf317608ce65bca1c8e1c4d6c21",
"/assets/LICENSE": "4cf0634b31fa87eb0be73b1a59d30349",
"/main.dart.js": "a85384adc81a479d77d9bdabd0038524"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
