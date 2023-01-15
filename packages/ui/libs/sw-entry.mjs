var msgChan = new MessageChannel();
var p1 = msgChan.port1;

class Entry {
    _url = null;
    _config = {};
    _registrationer = null;
    _refreshing = false;
    constructor(url, config) {
        if (!url) throw Error('URL for service worker.')
        this._url = url;
        this._config = Object.assign(this._config, config);
        this.registration();
        setTimeout(() => {
            this.onUpdate();
        })
    }

    postMessage(call) {
    }

    onmessage() {
    }

    // 触发更新
    update() {
        try {
            navigator.serviceWorker.getRegistration().then(reg => {
                reg.waiting.postMessage('skipWaiting');
            });
        } catch (e) {
            window.location.reload();
        }

    }

    emitUpdate() {
        var event = document.createEvent('Event');
        event.initEvent('sw.update', true, true);
        event.update = () => {
            this.update();
        }
        window.dispatchEvent(event);
    }

    /** 监听 service内部事件 */
    onUpdate() {
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (this._refreshing) {
                return
            }
            this._refreshing = true;
            window.location.reload();
        });
    }


    registration() {
        const self = this;
        if (this._registrationer) throw Error('错误')
        if (!('serviceWorker' in navigator)) throw Error('错误')
        window.addEventListener('load', function () {
            console.log(self._url)
            navigator.serviceWorker.register(self._url, self._config)
                .then(registration => {
                    self._registrationer = registration;
                    if (registration.waiting) {
                        console.log('registration.waiting')
                        self.emitUpdate();
                        return;
                    }
                    // registration.active.postMessage({
                    //     'userName': 'kongzhi',
                    //     'age': 31,
                    //     'sex': 'men',
                    //     'marriage': 'single'
                    // }, [msgChan.port2]);

                    // p1.onmessage = function (msg) {
                    //     console.log('接收到的消息：' + msg.data);
                    // };


                    registration.onupdatefound = function () {
                        var installingWorker = registration.installing;
                        installingWorker.onstatechange = function () {
                            switch (installingWorker.state) {
                                case 'installed':
                                    if (navigator.serviceWorker.controller) {
                                        self.emitUpdate();
                                    } else {
                                        // otherwise it's the first install, nothing to do
                                        console.log('Service Worker initialized for the first time')
                                    }
                                    break;
                            }
                        };
                    }
                })
                .catch((err) => {
                    console.log('failed for registration:::', err)
                })
        navigator.serviceWorker.ready.then((registration) => {
            registration.update();
                    
                    console.log('registration.update();')
            });
        });
    }
}

// 

export {
    Entry as SWorker
}


/**
 * https://whatwebcando.today/articles/handling-service-worker-updates/
 */