// 서비스 워커 버전
const CACHE_NAME = 'mbti-test-v6';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/questions.js',
    '/manifest.json'
];

// 설치 이벤트
self.addEventListener('install', (event) => {

    // 즉시 활성화
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('캐시 열기');
                return cache.addAll(urlsToCache);
            })
    );
});

// 활성화 이벤트
self.addEventListener('activate', (event) => {
    // 즉시 제어권 가져오기
    event.waitUntil(
        clients.claim().then(() => {
            return caches.keys().then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== CACHE_NAME) {
                            console.log('오래된 캐시 삭제:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            });
        })
    );
});



// Fetch 이벤트 - Network First 전략으로 변경
self.addEventListener('fetch', (event) => {
    event.respondWith(
        // 먼저 네트워크에서 가져오기 시도
        fetch(event.request)
            .then((response) => {
                // 유효한 응답이면 캐시에 저장
                if (response && response.status === 200) {
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                }
                return response;
            })
            .catch(() => {
                // 네트워크 실패 시 캐시에서 가져오기
                return caches.match(event.request);
            })
    );
});

// Made with Bob
