// 전역 변수
let currentQuestionIndex = 0;
let answers = [];
let scores = {
    EI: 0, // E(외향) vs I(내향)
    SN: 0, // S(감각) vs N(직관)
    TF: 0, // T(사고) vs F(감정)
    JP: 0  // J(판단) vs P(인식)
};

// 화면 전환 함수
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}

// 테스트 시작
function startTest() {
    currentQuestionIndex = 0;
    answers = new Array(mbtiQuestions.length).fill(null);
    scores = { EI: 0, SN: 0, TF: 0, JP: 0 };
    
    showScreen('questionScreen');
    displayQuestion();
    updateProgress();
}

// 질문 표시
function displayQuestion() {
    const question = mbtiQuestions[currentQuestionIndex];
    
    document.getElementById('questionNum').textContent = currentQuestionIndex + 1;
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = mbtiQuestions.length;
    
    // 모든 버튼 선택 해제 (다음 질문으로 이동 시 초기화)
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // 이전 답변이 있으면 선택 상태 복원 (이전 버튼으로 돌아갈 때만)
    if (answers[currentQuestionIndex] !== null) {
        answerButtons.forEach(btn => {
            if (answers[currentQuestionIndex] === parseInt(btn.dataset.value)) {
                btn.classList.add('selected');
            }
        });
    }
    
    // 버튼 상태 업데이트
    updateNavigationButtons();
}

// 답변 선택
function selectAnswer(value) {
    answers[currentQuestionIndex] = value;
    
    // 선택된 버튼 표시
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach(btn => {
        btn.classList.remove('selected');
        if (parseInt(btn.dataset.value) === value) {
            btn.classList.add('selected');
        }
    });
    
    // 다음 버튼 활성화
    document.getElementById('nextBtn').disabled = false;
    
    // 자동으로 다음 질문으로 (선택사항)
    setTimeout(() => {
        if (currentQuestionIndex < mbtiQuestions.length - 1) {
            nextQuestion();
        } else {
            calculateResult();
        }
    }, 300);
}

// 이전 질문
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        updateProgress();
    }
}

// 다음 질문
function nextQuestion() {
    if (answers[currentQuestionIndex] === null) {
        alert('답변을 선택해주세요.');
        return;
    }
    
    if (currentQuestionIndex < mbtiQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        updateProgress();
    } else {
        calculateResult();
    }
}

// 진행률 업데이트
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / mbtiQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

// 네비게이션 버튼 상태 업데이트
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = answers[currentQuestionIndex] === null;
    
    if (currentQuestionIndex === mbtiQuestions.length - 1) {
        nextBtn.textContent = '결과 보기 ✨';
    } else {
        nextBtn.textContent = '다음 →';
    }
}

// 결과 계산
function calculateResult() {
    // 점수 초기화
    scores = { EI: 0, SN: 0, TF: 0, JP: 0 };
    
    // 각 답변에 대해 점수 계산
    mbtiQuestions.forEach((question, index) => {
        const answer = answers[index];
        if (answer === null) return;
        
        const dimension = question.dimension;
        const direction = question.direction;
        
        // 점수 계산 (1-5 척도)
        // 중립(3)을 기준으로 양쪽으로 점수 부여
        let score = 0;
        if (answer === 1) score = -2; // 전혀 아니다
        else if (answer === 2) score = -1; // 아니다
        else if (answer === 3) score = 0; // 보통이다
        else if (answer === 4) score = 1; // 그렇다
        else if (answer === 5) score = 2; // 매우 그렇다
        
        // 방향에 따라 점수 적용
        if (direction === 'E' || direction === 'S' || direction === 'T' || direction === 'J') {
            scores[dimension] += score;
        } else {
            scores[dimension] -= score;
        }
    });
    
    // MBTI 유형 결정
    const mbtiType = 
        (scores.EI >= 0 ? 'E' : 'I') +
        (scores.SN >= 0 ? 'S' : 'N') +
        (scores.TF >= 0 ? 'T' : 'F') +
        (scores.JP >= 0 ? 'J' : 'P');
    
    displayResult(mbtiType);
}

// 결과 표시
function displayResult(mbtiType) {
    const result = mbtiDescriptions[mbtiType];
    
    // 결과 화면으로 전환
    showScreen('resultScreen');
    
    // 기본 정보 표시
    document.getElementById('resultType').textContent = mbtiType;
    document.getElementById('resultType').style.color = result.color;
    document.getElementById('resultName').textContent = result.name;
    
    // 특징 표시
    const traitsContainer = document.getElementById('resultTraits');
    traitsContainer.innerHTML = '';
    result.traits.forEach(trait => {
        const badge = document.createElement('span');
        badge.className = 'trait-badge';
        badge.textContent = trait;
        traitsContainer.appendChild(badge);
    });
    
    // 설명 표시
    document.getElementById('resultDescription').textContent = result.description;
    document.getElementById('resultStrengths').textContent = result.strengths;
    document.getElementById('resultWeaknesses').textContent = result.weaknesses;
    document.getElementById('resultCareers').textContent = result.careers;
    
    // IBM 추천 서비스 표시
    displayRecommendedServices(result.recommendedServices);
    
    // 차원별 점수 표시
    displayDimensionScores();
    
    // 애니메이션 효과
    setTimeout(() => {
        document.querySelectorAll('.result-section').forEach((section, index) => {
            section.style.animationDelay = `${index * 0.1}s`;
        });
    }, 100);
}

// IBM 추천 서비스 표시
function displayRecommendedServices(services) {
    const servicesContainer = document.getElementById('recommendedServices');
    if (!servicesContainer) return;
    
    servicesContainer.innerHTML = '';
    
    if (!services || services.length === 0) {
        servicesContainer.innerHTML = '<p style="color: #666;">추천 서비스 정보가 없습니다.</p>';
        return;
    }
    
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-icon">🚀</div>
            <h4 class="service-name">${service.name}</h4>
            <p class="service-reason">${service.reason}</p>
        `;
        servicesContainer.appendChild(serviceCard);
    });
}

// 차원별 점수 표시
function displayDimensionScores() {
    const dimensionScores = document.getElementById('dimensionScores');
    dimensionScores.innerHTML = '';
    
    const dimensions = [
        { key: 'EI', left: 'E (외향)', right: 'I (내향)' },
        { key: 'SN', left: 'S (감각)', right: 'N (직관)' },
        { key: 'TF', left: 'T (사고)', right: 'F (감정)' },
        { key: 'JP', left: 'J (판단)', right: 'P (인식)' }
    ];
    
    dimensions.forEach(dim => {
        const score = scores[dim.key];
        const maxScore = 20; // 10문항 × 2점
        const percentage = ((score + maxScore) / (maxScore * 2)) * 100;
        
        const item = document.createElement('div');
        item.className = 'dimension-item';
        
        const label = document.createElement('div');
        label.className = 'dimension-label';
        label.innerHTML = `
            <span>${dim.left}</span>
            <span>${dim.right}</span>
        `;
        
        const bar = document.createElement('div');
        bar.className = 'dimension-bar';
        
        const fill = document.createElement('div');
        fill.className = 'dimension-fill';
        fill.style.width = '0%';
        fill.textContent = Math.round(percentage) + '%';
        
        bar.appendChild(fill);
        item.appendChild(label);
        item.appendChild(bar);
        dimensionScores.appendChild(item);
        
        // 애니메이션 효과
        setTimeout(() => {
            fill.style.width = percentage + '%';
        }, 100);
    });
}

// 결과 공유
function shareResult() {
    const mbtiType = document.getElementById('resultType').textContent;
    const resultName = document.getElementById('resultName').textContent;
    const shareText = `나의 MBTI 유형은 ${mbtiType} (${resultName})입니다! 🎉`;
    
    // URL에 type 파라미터 추가
    const baseUrl = window.location.origin + window.location.pathname;
    const shareUrl = `${baseUrl}?type=${mbtiType}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'IBM MBTI 테스트 결과',
            text: shareText,
            url: shareUrl
        }).catch(err => console.log('공유 실패:', err));
    } else {
        // 클립보드에 복사
        const textArea = document.createElement('textarea');
        textArea.value = shareText + '\n' + shareUrl;
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            alert('결과가 클립보드에 복사되었습니다!');
        } catch (err) {
            alert('공유 링크: ' + shareUrl);
        }
        
        document.body.removeChild(textArea);
    }
}

// 테스트 재시작
function restartTest() {
    if (confirm('테스트를 처음부터 다시 시작하시겠습니까?')) {
        showScreen('startScreen');
    }
}

// 키보드 단축키
document.addEventListener('keydown', (e) => {
    const currentScreen = document.querySelector('.screen.active').id;
    
    if (currentScreen === 'questionScreen') {
        if (e.key >= '1' && e.key <= '5') {
            selectAnswer(parseInt(e.key));
        } else if (e.key === 'ArrowLeft') {
            previousQuestion();
        } else if (e.key === 'ArrowRight') {
            nextQuestion();
        }
    }
});

// PWA 설치 프롬프트
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // 설치 버튼 표시 (선택사항)
    console.log('PWA 설치 가능');
});

// URL에서 MBTI 유형 가져오기
function getMBTIFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('type');
}

// MBTI 유형으로 직접 결과 보기
function showResultByType(mbtiType) {
    const type = mbtiType.toUpperCase();
    if (mbtiDescriptions[type]) {
        displayResult(type);
    } else {
        alert('유효하지 않은 MBTI 유형입니다.');
    }
}

// 페이지 로드 시 초기화
window.addEventListener('load', () => {
    // 서비스 워커 등록 (PWA)
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker 등록 성공:', reg))
            .catch(err => console.log('Service Worker 등록 실패:', err));
    }
    
    // URL에 type 파라미터가 있으면 해당 결과 표시
    const mbtiType = getMBTIFromURL();
    if (mbtiType) {
        showResultByType(mbtiType);
    }
});

// 로컬 스토리지에 결과 저장 (선택사항)
function saveResult(mbtiType) {
    const results = JSON.parse(localStorage.getItem('mbtiResults') || '[]');
    results.push({
        type: mbtiType,
        date: new Date().toISOString(),
        scores: scores
    });
    localStorage.setItem('mbtiResults', JSON.stringify(results));
}

// 이전 결과 불러오기 (선택사항)
function loadPreviousResults() {
    const results = JSON.parse(localStorage.getItem('mbtiResults') || '[]');
    return results;
}

// Made with Bob
