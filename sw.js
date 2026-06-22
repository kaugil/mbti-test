// 서비스 워커 - Network First 전략 (캐시 버전 관리 불필요)
const CACHE_NAME = 'mbti-test-cache';

// 설치 이벤트 - 즉시 활성화
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// 활성화 이벤트 - 즉시 제어권 가져오기
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Fetch 이벤트 - Network First 전략
self.addEventListener('fetch', (event) => {
    event.respondWith(
        // 1. 먼저 네트워크에서 최신 버전 가져오기 시도
        fetch(event.request)
            .then((response) => {
                // 성공하면 캐시에 저장하고 반환
                if (response && response.status === 200) {
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                }
                return response;
            })
            .catch(() => {
                // 2. 네트워크 실패 시에만 캐시에서 가져오기 (오프라인 지원)
                return caches.match(event.request);
            })
    );
});

// Made with Bob
