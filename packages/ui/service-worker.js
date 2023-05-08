const CACHE_NAME = 'cache-v1';
const urlsToCache = [
    // '/source/hooks/index.js',
];

self.addEventListener('activate', event => {
    console.log('被激活');
});

self.addEventListener("message", function (event) {
    if (event.data === 'skipWaiting') {
        console.log('我要更新了.')
        return self.skipWaiting();
    }
    console.log(event.data, 'l');
    console.log(event);
    var port = event.ports[0]
    setTimeout(() => {
        port.postMessage('？？？？？')
    }, 3000)


});

self.addEventListener('install', (event) => {
    console.log('开始install了', event)
    // self.skipWaiting()
    event.waitUntil(
        caches
            .open(CACHE_NAME) // 这返回的是promise
            .then(function (cache) {
                return cache.addAll(urlsToCache); // 这返回的是promise
            })
    );
});

self.addEventListener('fetch', (event) => {
    // console.log('请求拦截！', event.request.url)
    if(event.request.url.indexOf('layout/index.vue') !== -1) {
      // event.request.headers.set('Content-Type', 'text/plain;charset=UTF-8');
      // event.request.headers['Content-Type'] = 'text/plain;charset=UTF-8'
      return  new Promise((res) => {
        fetch(event.request).then(res => res.text()).then(content => {
          const regTmpl = /<template[^>]*>([\s\S]*)<\/template[*>]*>/;
          const result = regTmpl.exec(content)[1];
          res(result);
        });
      })
    }

    event.respondWith(
      caches
        .match(event.request) // 此方法从服务工作线程所创建的任何缓存中查找缓存的结果
        .then(function (response) {
          // response为匹配到的缓存资源，如果没有匹配到则返回undefined，需要fetch资源
          if (response) {
            return response;
          }
          return fetch(event.request);
        })
    );
})

