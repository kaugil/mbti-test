# Service Worker 가이드

## 🎯 Service Worker란?

Service Worker는 브라우저가 백그라운드에서 실행하는 스크립트로, PWA(Progressive Web App) 기능을 제공합니다.

### 주요 기능
1. **오프라인 지원**: 인터넷 연결 없이도 앱 사용 가능
2. **홈 화면 추가**: 모바일에서 앱처럼 설치 가능
3. **빠른 로딩**: 캐시를 활용한 빠른 페이지 로드

## 📋 현재 설정: Network First 전략

### 동작 방식
```
1. 사용자가 페이지 요청
   ↓
2. 먼저 네트워크에서 최신 버전 가져오기 시도
   ↓
3-A. 성공 → 최신 버전 표시 + 캐시에 저장
3-B. 실패 (오프라인) → 캐시에서 가져오기
```

### 장점
✅ **항상 최신 버전 사용** - 온라인일 때는 자동으로 최신 버전 로드
✅ **캐시 버전 관리 불필요** - 버전 번호를 바꿀 필요 없음
✅ **오프라인 지원** - 인터넷 없어도 마지막 버전 사용 가능
✅ **개발 편의성** - 코드 수정 후 새로고침만 하면 됨

### 단점
⚠️ 네트워크 요청이 먼저 발생하므로 느린 네트워크에서는 로딩이 느릴 수 있음

## 🔄 캐시 전략 비교

### 1. Cache First (이전 방식)
```javascript
// 캐시 먼저 확인 → 없으면 네트워크
caches.match(request) || fetch(request)
```
- 장점: 매우 빠른 로딩
- 단점: 캐시 버전 관리 필요, 최신 버전 반영 안 됨

### 2. Network First (현재 방식) ✅
```javascript
// 네트워크 먼저 시도 → 실패하면 캐시
fetch(request).catch(() => caches.match(request))
```
- 장점: 항상 최신 버전, 캐시 버전 관리 불필요
- 단점: 온라인일 때 네트워크 요청 발생

### 3. Network Only
```javascript
// 항상 네트워크에서만 가져오기
fetch(request)
```
- 장점: 항상 최신 버전
- 단점: 오프라인 지원 없음, PWA 기능 없음

## 🛠️ 개발 시 주의사항

### 캐시 문제 해결 방법

#### 방법 1: 브라우저 강력 새로고침 (추천)
- **Windows/Linux**: `Ctrl + Shift + R`
- **Mac**: `Cmd + Shift + R`

#### 방법 2: 개발자 도구에서 Service Worker 해제
1. F12 (개발자 도구 열기)
2. Application 탭
3. Service Workers
4. "Unregister" 클릭

#### 방법 3: 시크릿 모드 사용
- Service Worker가 등록되지 않아 항상 최신 버전 테스트 가능

## 📱 PWA 기능 테스트

### 모바일에서 홈 화면 추가
1. Chrome/Safari에서 사이트 접속
2. 메뉴 → "홈 화면에 추가"
3. 앱처럼 설치됨

### 오프라인 테스트
1. 사이트 접속 (캐시 생성)
2. 개발자 도구 → Network 탭
3. "Offline" 체크
4. 새로고침 → 여전히 작동!

## 🔧 Service Worker 수정이 필요한 경우

### 캐시 전략 변경하고 싶다면

#### Cache First로 변경 (빠른 로딩 우선)
```javascript
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
```

#### Network Only로 변경 (PWA 기능 제거)
```javascript
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});
```

## ❓ FAQ

### Q: 코드를 수정했는데 변경사항이 안 보여요
**A**: Ctrl + Shift + R로 강력 새로고침하세요. Network First 전략이므로 온라인일 때는 자동으로 최신 버전을 가져옵니다.

### Q: 캐시 버전을 바꿔야 하나요?
**A**: 아니요! Network First 전략에서는 캐시 버전 관리가 필요 없습니다. 온라인일 때 항상 최신 버전을 가져옵니다.

### Q: Service Worker를 완전히 제거하고 싶어요
**A**: `app.js`에서 Service Worker 등록 코드를 제거하세요:
```javascript
// 이 부분을 삭제
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('Service Worker 등록 성공:', reg))
        .catch(err => console.log('Service Worker 등록 실패:', err));
}
```

### Q: 오프라인 지원이 필요 없어요
**A**: Service Worker를 제거하거나 Network Only 전략으로 변경하세요.

## 📊 현재 설정 요약

```javascript
// sw.js
const CACHE_NAME = 'mbti-test-cache'; // 고정된 이름 (버전 관리 불필요)

// Network First 전략
fetch(request)                    // 1. 네트워크에서 최신 버전 시도
    .then(response => {
        cache.put(request, response); // 2. 성공하면 캐시에 저장
        return response;
    })
    .catch(() => {
        return caches.match(request); // 3. 실패하면 캐시에서 가져오기
    });
```

## ✅ 결론

현재 설정은 **개발 편의성**과 **PWA 기능**의 균형을 맞춘 최적의 설정입니다:

- ✅ 캐시 버전 관리 불필요
- ✅ 항상 최신 버전 자동 로드
- ✅ 오프라인 지원
- ✅ PWA 기능 유지
- ✅ 개발이 편리함

**더 이상 캐시 버전을 바꿀 필요가 없습니다!** 🎉

---

**Made with Bob**
**Last Updated**: 2026-06-22