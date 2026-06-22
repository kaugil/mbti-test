# 🔄 MBTI 테스트 업데이트 워크플로우

소스 코드 수정 후 GitHub과 Vercel에 자동 배포하는 방법입니다.

---

## 🎯 전체 흐름 (한눈에 보기)

```
1. 로컬에서 코드 수정
   ↓
2. Git에 커밋
   ↓
3. GitHub에 푸시
   ↓
4. Vercel 자동 배포 (자동!)
   ↓
5. 웹사이트 업데이트 완료
```

---

## 📝 방법 1: GitHub Desktop 사용 (가장 쉬움) ⭐⭐⭐

### 초기 설정 (최초 1회만)

#### 1. GitHub Desktop 설치
- https://desktop.github.com/ 에서 다운로드
- 설치 및 GitHub 계정 연결

#### 2. 저장소 추가
1. GitHub Desktop 실행
2. **File > Add Local Repository**
3. `/Users/ygkwon/.bob/mbti-test` 선택
4. **Add Repository**

#### 3. Vercel 연결
1. https://vercel.com/new 접속
2. GitHub 로그인
3. **Import Git Repository**
4. `mbti-test` 저장소 선택
5. **Deploy** 클릭
6. 완료! (이제 자동 배포 설정됨)

---

### 일상적인 업데이트 과정

#### 1단계: 코드 수정
```
VS Code나 원하는 에디터로 파일 수정:
- index.html
- styles.css
- app.js
- questions.js
등등...
```

#### 2단계: GitHub Desktop에서 커밋
1. **GitHub Desktop** 실행
2. 왼쪽에 변경된 파일 목록 표시됨
3. 변경 내용 확인
4. 하단 **Summary** 입력:
   ```
   예: "질문 추가" 또는 "디자인 수정"
   ```
5. **Commit to main** 버튼 클릭

#### 3단계: GitHub에 푸시
1. 상단의 **Push origin** 버튼 클릭
2. GitHub에 자동 업로드됨

#### 4단계: Vercel 자동 배포 (자동!)
- Vercel이 자동으로 감지
- 약 30초~1분 후 배포 완료
- 웹사이트 자동 업데이트!

---

## 💻 방법 2: VS Code 사용 (개발자용) ⭐⭐

### 초기 설정 (최초 1회만)

#### 1. VS Code에서 Git 초기화
1. VS Code로 `mbti-test` 폴더 열기
2. 왼쪽 사이드바 **Source Control** 아이콘 클릭
3. **Initialize Repository** 클릭

#### 2. GitHub에 발행
1. **Publish to GitHub** 클릭
2. Repository name: `mbti-test`
3. **Public** 선택
4. **Publish** 클릭

#### 3. Vercel 연결
- 위의 "방법 1"의 Vercel 연결 과정과 동일

---

### 일상적인 업데이트 과정

#### 1단계: 코드 수정
```
VS Code에서 파일 수정
```

#### 2단계: 변경사항 커밋
1. **Source Control** 패널 (Ctrl/Cmd + Shift + G)
2. 변경된 파일 확인
3. **+** 버튼으로 스테이징
4. 커밋 메시지 입력
5. **✓** 버튼 클릭 (Commit)

#### 3단계: GitHub에 푸시
1. **...** 메뉴 클릭
2. **Push** 선택
3. 또는 **Sync Changes** 클릭

#### 4단계: Vercel 자동 배포 (자동!)
- 자동으로 배포됨

---

## 🖥️ 방법 3: 터미널 명령어 사용 (고급) ⭐

### 전제 조건
- Git 설치 완료
- GitHub 저장소 생성 완료
- Vercel 연결 완료

### 일상적인 업데이트 과정

#### 1단계: 코드 수정
```bash
# 원하는 에디터로 파일 수정
code index.html
code styles.css
```

#### 2단계: Git 커밋
```bash
cd /Users/ygkwon/.bob/mbti-test

# 변경사항 확인
git status

# 모든 변경사항 스테이징
git add .

# 또는 특정 파일만
git add index.html styles.css

# 커밋
git commit -m "질문 추가 및 디자인 수정"
```

#### 3단계: GitHub에 푸시
```bash
git push origin main
```

#### 4단계: Vercel 자동 배포 (자동!)
- 자동으로 배포됨

---

## 🔍 배포 상태 확인

### Vercel 대시보드에서 확인
1. https://vercel.com/dashboard 접속
2. `mbti-test` 프로젝트 클릭
3. **Deployments** 탭에서 배포 상태 확인
4. 배포 로그 확인 가능

### 배포 알림
- 이메일로 배포 완료 알림 받음
- Vercel 앱에서 푸시 알림 (선택사항)

---

## 📋 실전 예제

### 예제 1: 질문 추가하기

#### 1. questions.js 파일 수정
```javascript
// questions.js에 새 질문 추가
{
    id: 61,
    question: "새로운 질문입니다.",
    dimension: "EI",
    direction: "E"
}
```

#### 2. GitHub Desktop에서
```
1. 변경사항 확인
2. Summary: "질문 1개 추가"
3. Commit to main
4. Push origin
```

#### 3. 결과
- 약 1분 후 웹사이트에 새 질문 반영됨
- URL: https://mbti-test.vercel.app

---

### 예제 2: 디자인 변경하기

#### 1. styles.css 파일 수정
```css
/* styles.css에서 색상 변경 */
:root {
    --primary-color: #FF6B6B; /* 빨간색으로 변경 */
}
```

#### 2. GitHub Desktop에서
```
1. 변경사항 확인
2. Summary: "메인 색상 변경"
3. Commit to main
4. Push origin
```

#### 3. 결과
- 약 1분 후 웹사이트 색상 변경됨

---

### 예제 3: 여러 파일 동시 수정

#### 1. 여러 파일 수정
```
- index.html: 제목 변경
- styles.css: 폰트 크기 조정
- app.js: 버그 수정
```

#### 2. GitHub Desktop에서
```
1. 모든 변경사항 확인
2. Summary: "UI 개선 및 버그 수정"
3. Description (선택):
   - 제목 변경
   - 폰트 크기 조정
   - 결과 계산 버그 수정
4. Commit to main
5. Push origin
```

#### 3. 결과
- 모든 변경사항이 한 번에 배포됨

---

## ⚡ 빠른 참조 가이드

### GitHub Desktop 단축키
```
Cmd + Enter    : 커밋
Cmd + P        : 푸시
Cmd + Shift + P: 풀
Cmd + T        : 새 브랜치
```

### VS Code 단축키
```
Ctrl/Cmd + Shift + G : Source Control 열기
Ctrl/Cmd + Enter     : 커밋
```

### Git 명령어 요약
```bash
git status              # 상태 확인
git add .              # 모든 변경사항 스테이징
git commit -m "메시지"  # 커밋
git push               # 푸시
git pull               # 풀
git log                # 히스토리 확인
```

---

## 🔄 자동 배포 흐름 상세

### 1. 로컬에서 코드 수정
```
파일 수정 → 저장
```

### 2. Git 커밋
```
변경사항 스테이징 → 커밋 메시지 작성 → 커밋
```

### 3. GitHub 푸시
```
로컬 커밋 → GitHub 원격 저장소로 전송
```

### 4. Vercel 감지 (자동)
```
GitHub webhook → Vercel 트리거
```

### 5. Vercel 빌드 (자동)
```
코드 다운로드 → 빌드 → 최적화
```

### 6. Vercel 배포 (자동)
```
전세계 CDN에 배포 → 웹사이트 업데이트
```

### 7. 완료!
```
새 URL 생성 (또는 기존 URL 업데이트)
이메일 알림 발송
```

---

## 🛠️ 문제 해결

### 문제 1: 푸시가 안 될 때

**원인:** 원격 저장소와 충돌

**해결:**
```bash
# 최신 변경사항 가져오기
git pull origin main

# 충돌 해결 후
git push origin main
```

---

### 문제 2: Vercel 배포 실패

**원인:** 빌드 에러

**해결:**
1. Vercel 대시보드에서 에러 로그 확인
2. 로컬에서 파일 확인
3. 문법 오류 수정
4. 다시 커밋 & 푸시

---

### 문제 3: 변경사항이 반영 안 됨

**원인:** 브라우저 캐시

**해결:**
1. 브라우저 강력 새로고침
   - Chrome: Cmd + Shift + R (Mac) / Ctrl + Shift + R (Windows)
   - Safari: Cmd + Option + R
2. 시크릿 모드로 접속
3. Vercel 대시보드에서 배포 완료 확인

---

## 📊 배포 히스토리 관리

### Vercel에서 이전 버전으로 롤백
1. Vercel 대시보드 접속
2. **Deployments** 탭
3. 원하는 이전 배포 선택
4. **Promote to Production** 클릭
5. 즉시 이전 버전으로 복구

### Git에서 이전 커밋으로 되돌리기
```bash
# 커밋 히스토리 확인
git log

# 특정 커밋으로 되돌리기
git revert <commit-hash>

# 푸시
git push origin main
```

---

## 🎯 베스트 프랙티스

### 1. 의미 있는 커밋 메시지
```
❌ 나쁜 예:
"수정"
"업데이트"
"ㅇㅇ"

✅ 좋은 예:
"질문 5개 추가"
"메인 색상을 파란색으로 변경"
"결과 계산 버그 수정"
```

### 2. 자주 커밋하기
```
큰 변경사항을 한 번에 커밋하지 말고
작은 단위로 자주 커밋
```

### 3. 테스트 후 푸시
```
로컬에서 테스트 → 문제 없으면 푸시
```

### 4. 브랜치 사용 (선택사항)
```bash
# 새 기능 개발 시
git checkout -b feature/new-questions
# 작업 완료 후
git checkout main
git merge feature/new-questions
git push origin main
```

---

## 📱 모바일에서 수정하기

### GitHub 모바일 앱 사용
1. GitHub 앱 설치
2. 저장소 접속
3. 파일 편집
4. 커밋
5. Vercel 자동 배포

### GitHub 웹사이트에서
1. GitHub.com 접속
2. 파일 클릭
3. 연필 아이콘 (Edit) 클릭
4. 수정 후 커밋
5. Vercel 자동 배포

---

## 🎓 학습 리소스

### Git 기초
- https://git-scm.com/book/ko/v2
- https://learngitbranching.js.org/?locale=ko

### GitHub 가이드
- https://docs.github.com/ko

### Vercel 문서
- https://vercel.com/docs

---

## 📋 체크리스트

### 초기 설정 (최초 1회)
- [ ] Git 설치 또는 GitHub Desktop 설치
- [ ] GitHub 저장소 생성
- [ ] Vercel 계정 생성 및 저장소 연결
- [ ] 첫 배포 완료

### 매번 업데이트 시
- [ ] 코드 수정
- [ ] 로컬에서 테스트
- [ ] Git 커밋
- [ ] GitHub 푸시
- [ ] Vercel 배포 확인
- [ ] 웹사이트에서 최종 확인

---

## 🚀 요약

### 가장 쉬운 방법: GitHub Desktop
```
1. 코드 수정
2. GitHub Desktop 열기
3. 커밋 메시지 입력
4. Commit 버튼 클릭
5. Push 버튼 클릭
6. 1분 대기
7. 완료!
```

### 소요 시간
- 코드 수정: 원하는 만큼
- Git 커밋 & 푸시: 10초
- Vercel 자동 배포: 30초~1분
- **총 소요 시간: 약 1-2분**

**한 번 설정하면 이후로는 클릭 몇 번으로 자동 배포됩니다!** 🎉