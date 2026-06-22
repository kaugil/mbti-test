// IBM 직원 대상 MBTI 질문 (40문항 - 명확하고 직무 관련)
const mbtiQuestions = [
    // E(외향) vs I(내향) - 10문항
    {
        id: 1,
        question: "팀 미팅에서 먼저 의견을 제시하고 토론을 주도하는 것을 선호한다.",
        dimension: "EI",
        direction: "E"
    },
    {
        id: 2,
        question: "회의 전에 충분히 생각을 정리한 후 발표하는 것을 선호한다.",
        dimension: "EI",
        direction: "I"
    },
    {
        id: 3,
        question: "새로운 프로젝트 팀원들과 빠르게 친해지고 협업하는 것이 편하다.",
        dimension: "EI",
        direction: "E"
    },
    {
        id: 4,
        question: "혼자 집중해서 작업할 때 가장 생산적이다.",
        dimension: "EI",
        direction: "I"
    },
    {
        id: 5,
        question: "브레인스토밍 회의에서 즉석에서 아이디어를 내는 것을 즐긴다.",
        dimension: "EI",
        direction: "E"
    },
    {
        id: 6,
        question: "이메일이나 문서로 의사소통하는 것이 대면 회의보다 편하다.",
        dimension: "EI",
        direction: "I"
    },
    {
        id: 7,
        question: "여러 팀과 동시에 협업하는 프로젝트를 선호한다.",
        dimension: "EI",
        direction: "E"
    },
    {
        id: 8,
        question: "소규모 팀이나 1:1 미팅에서 더 효과적으로 일한다.",
        dimension: "EI",
        direction: "I"
    },
    {
        id: 9,
        question: "네트워킹 이벤트나 컨퍼런스에서 새로운 사람들을 만나는 것이 즐겁다.",
        dimension: "EI",
        direction: "E"
    },
    {
        id: 10,
        question: "업무 후에는 혼자만의 시간으로 에너지를 재충전한다.",
        dimension: "EI",
        direction: "I"
    },

    // S(감각) vs N(직관) - 10문항
    {
        id: 11,
        question: "프로젝트 계획 시 구체적인 단계와 세부 사항을 먼저 정의한다.",
        dimension: "SN",
        direction: "S"
    },
    {
        id: 12,
        question: "프로젝트의 전체적인 비전과 장기적 영향을 먼저 고려한다.",
        dimension: "SN",
        direction: "N"
    },
    {
        id: 13,
        question: "검증된 방법론과 베스트 프랙티스를 따르는 것을 선호한다.",
        dimension: "SN",
        direction: "S"
    },
    {
        id: 14,
        question: "혁신적이고 실험적인 접근 방식을 시도하는 것을 즐긴다.",
        dimension: "SN",
        direction: "N"
    },
    {
        id: 15,
        question: "데이터와 사실에 기반한 의사결정을 중요하게 생각한다.",
        dimension: "SN",
        direction: "S"
    },
    {
        id: 16,
        question: "직관과 패턴 인식을 통해 문제를 해결하는 것을 선호한다.",
        dimension: "SN",
        direction: "N"
    },
    {
        id: 17,
        question: "현재 시스템을 개선하고 최적화하는 작업을 선호한다.",
        dimension: "SN",
        direction: "S"
    },
    {
        id: 18,
        question: "완전히 새로운 솔루션을 설계하고 구현하는 것을 선호한다.",
        dimension: "SN",
        direction: "N"
    },
    {
        id: 19,
        question: "명확한 요구사항과 스펙이 정의된 프로젝트를 선호한다.",
        dimension: "SN",
        direction: "S"
    },
    {
        id: 20,
        question: "모호한 문제를 탐색하고 가능성을 발견하는 것을 즐긴다.",
        dimension: "SN",
        direction: "N"
    },

    // T(사고) vs F(감정) - 10문항
    {
        id: 21,
        question: "코드 리뷰나 피드백 시 기술적 정확성을 최우선으로 한다.",
        dimension: "TF",
        direction: "T"
    },
    {
        id: 22,
        question: "피드백 제공 시 상대방의 감정과 동기를 고려한다.",
        dimension: "TF",
        direction: "F"
    },
    {
        id: 23,
        question: "프로젝트 우선순위 결정 시 ROI와 효율성을 기준으로 한다.",
        dimension: "TF",
        direction: "T"
    },
    {
        id: 24,
        question: "의사결정 시 팀원들의 의견과 팀 화합을 중요하게 고려한다.",
        dimension: "TF",
        direction: "F"
    },
    {
        id: 25,
        question: "문제 해결 시 논리적 분석과 객관적 데이터를 중시한다.",
        dimension: "TF",
        direction: "T"
    },
    {
        id: 26,
        question: "팀 내 갈등 해결 시 각자의 입장과 감정을 이해하려 노력한다.",
        dimension: "TF",
        direction: "F"
    },
    {
        id: 27,
        question: "성과 평가 시 명확한 지표와 기준을 적용한다.",
        dimension: "TF",
        direction: "T"
    },
    {
        id: 28,
        question: "팀원의 개인적 상황과 성장을 고려하여 업무를 배분한다.",
        dimension: "TF",
        direction: "F"
    },
    {
        id: 29,
        question: "기술적 결정 시 감정보다는 사실과 논리를 우선한다.",
        dimension: "TF",
        direction: "T"
    },
    {
        id: 30,
        question: "프로젝트 성공을 위해 팀의 사기와 동기부여가 중요하다고 생각한다.",
        dimension: "TF",
        direction: "F"
    },

    // J(판단) vs P(인식) - 10문항
    {
        id: 31,
        question: "프로젝트 시작 전에 상세한 계획과 일정을 수립한다.",
        dimension: "JP",
        direction: "J"
    },
    {
        id: 32,
        question: "프로젝트 진행 중 유연하게 방향을 조정하는 것을 선호한다.",
        dimension: "JP",
        direction: "P"
    },
    {
        id: 33,
        question: "마감 기한을 엄격히 지키고 일정대로 진행하는 것이 중요하다.",
        dimension: "JP",
        direction: "J"
    },
    {
        id: 34,
        question: "마감 압박 속에서 더 창의적이고 집중력이 높아진다.",
        dimension: "JP",
        direction: "P"
    },
    {
        id: 35,
        question: "체계적인 프로세스와 문서화를 중요하게 생각한다.",
        dimension: "JP",
        direction: "J"
    },
    {
        id: 36,
        question: "상황에 따라 즉흥적으로 대응하는 것이 효율적이라고 생각한다.",
        dimension: "JP",
        direction: "P"
    },
    {
        id: 37,
        question: "업무를 미리 완료하고 여유를 가지는 것을 선호한다.",
        dimension: "JP",
        direction: "J"
    },
    {
        id: 38,
        question: "여러 옵션을 열어두고 최적의 시점에 결정하는 것을 선호한다.",
        dimension: "JP",
        direction: "P"
    },
    {
        id: 39,
        question: "명확한 목표와 마일스톤이 설정된 프로젝트를 선호한다.",
        dimension: "JP",
        direction: "J"
    },
    {
        id: 40,
        question: "탐색적이고 실험적인 프로젝트에서 더 동기부여된다.",
        dimension: "JP",
        direction: "P"
    }
];

// IBM 직무별 MBTI 유형 설명
const mbtiDescriptions = {
    "ISTJ": {
        name: "체계적 실행자",
        color: "#2C3E50",
        traits: ["신뢰성", "체계성", "정확성", "책임감"],
        description: "검증된 방법론을 따르며 안정적으로 프로젝트를 완수하는 유형입니다. 품질 관리와 프로세스 준수를 중시합니다.",
        strengths: "체계적 실행, 품질 관리, 신뢰성, 세부사항 관리",
        weaknesses: "변화 적응, 유연성, 혁신적 사고",
        careers: "시스템 관리자, 품질 보증, 데이터베이스 관리자, 프로젝트 관리자",
        ibmFit: "메인프레임 운영, 시스템 통합, 품질 보증, 규정 준수",
        recommendedServices: [
            {
                name: "Data Platform Service",
                reason: "체계적인 데이터 관리와 안정적인 플랫폼 운영에 강점을 발휘할 수 있습니다."
            }
        ]
    },
    "ISFJ": {
        name: "헌신적 지원자",
        color: "#16A085",
        traits: ["세심함", "협력", "안정성", "지원"],
        description: "팀원을 지원하고 안정적인 환경을 만드는 데 기여하는 유형입니다. 사용자 경험과 팀 화합을 중시합니다.",
        strengths: "팀 지원, 사용자 중심, 세심한 관리, 안정성",
        weaknesses: "자기주장, 변화 주도, 큰 그림 파악",
        careers: "기술 지원, 사용자 경험 디자이너, 교육 담당, 고객 성공 관리자",
        ibmFit: "고객 지원, 사용자 경험, 교육 및 트레이닝, 내부 IT 지원",
        recommendedServices: [
            {
                name: "Digital Product Engineering iX",
                reason: "사용자 중심의 세심한 제품 개발과 고객 경험 향상에 기여할 수 있습니다."
            }
        ]
    },
    "INFJ": {
        name: "비전 제시자",
        color: "#8E44AD",
        traits: ["통찰력", "전략적", "혁신", "영감"],
        description: "장기적 비전을 가지고 의미 있는 변화를 만들어내는 유형입니다. 사람과 기술의 조화를 추구합니다.",
        strengths: "전략적 사고, 혁신, 팀 동기부여, 장기 계획",
        weaknesses: "세부 실행, 단기 목표, 현실적 제약",
        careers: "제품 전략가, UX 리서처, 조직 개발, 혁신 리더",
        ibmFit: "제품 전략, 디자인 씽킹, 조직 변화 관리, 혁신 프로그램",
        recommendedServices: [
            {
                name: "Digital Product Engineering iX",
                reason: "전략적 비전과 사용자 중심 사고로 혁신적인 디지털 제품을 설계할 수 있습니다."
            },
            {
                name: "AI & Analytics Service",
                reason: "통찰력을 활용하여 데이터 기반 의사결정과 AI 전략을 수립할 수 있습니다."
            }
        ]
    },
    "INTJ": {
        name: "전략적 설계자",
        color: "#34495E",
        traits: ["전략", "독립성", "혁신", "효율성"],
        description: "복잡한 시스템을 설계하고 장기적 전략을 수립하는 유형입니다. 기술적 우수성과 효율성을 추구합니다.",
        strengths: "시스템 설계, 전략 수립, 기술 혁신, 문제 해결",
        weaknesses: "팀 협업, 감정 표현, 단기 실행",
        careers: "솔루션 아키텍트, 기술 전략가, 연구 개발, 시스템 설계자",
        ibmFit: "클라우드 아키텍처, AI/ML 연구, 엔터프라이즈 아키텍처, 기술 전략",
        recommendedServices: [
            {
                name: "AI & Analytics Service",
                reason: "복잡한 AI 시스템 설계와 데이터 아키텍처 구축에 탁월한 능력을 발휘합니다."
            },
            {
                name: "Data Platform Service",
                reason: "전략적 사고로 확장 가능한 데이터 플랫폼을 설계하고 최적화할 수 있습니다."
            }
        ]
    },
    "ISTP": {
        name: "기술 문제 해결사",
        color: "#E67E22",
        traits: ["실용성", "분석", "독립성", "효율성"],
        description: "기술적 문제를 논리적으로 분석하고 효율적으로 해결하는 유형입니다. 실용적인 솔루션을 선호합니다.",
        strengths: "기술 문제 해결, 효율성, 독립적 작업, 실용적 접근",
        weaknesses: "장기 계획, 팀 협업, 문서화",
        careers: "DevOps 엔지니어, 시스템 엔지니어, 네트워크 전문가, 보안 분석가",
        ibmFit: "인프라 관리, DevOps, 사이버 보안, 성능 최적화",
        recommendedServices: [
            {
                name: "Data Platform Service",
                reason: "실용적인 문제 해결 능력으로 플랫폼 성능 최적화와 기술적 이슈를 효율적으로 처리합니다."
            }
        ]
    },
    "ISFP": {
        name: "창의적 실행자",
        color: "#1ABC9C",
        traits: ["창의성", "유연성", "실용성", "협력"],
        description: "창의적이면서도 실용적인 솔루션을 만드는 유형입니다. 사용자 중심의 디자인을 중시합니다.",
        strengths: "창의적 디자인, 사용자 중심, 유연성, 실행력",
        weaknesses: "장기 계획, 체계성, 갈등 관리",
        careers: "UI/UX 디자이너, 프론트엔드 개발자, 크리에이티브 개발자",
        ibmFit: "디자인 시스템, 사용자 인터페이스, 프로토타이핑, 크리에이티브 개발",
        recommendedServices: [
            {
                name: "Digital Product Engineering iX",
                reason: "창의적 디자인과 사용자 경험을 중시하는 디지털 제품 개발에 적합합니다."
            }
        ]
    },
    "INFP": {
        name: "가치 중심 혁신가",
        color: "#9B59B6",
        traits: ["이상주의", "창의성", "공감", "진정성"],
        description: "의미 있는 프로젝트에 열정을 가지고 창의적으로 기여하는 유형입니다. 사용자와 팀의 가치를 중시합니다.",
        strengths: "창의적 사고, 사용자 공감, 가치 중심, 혁신",
        weaknesses: "현실적 제약, 갈등 상황, 체계적 실행",
        careers: "UX 라이터, 콘텐츠 전략가, 제품 디자이너, 커뮤니티 관리자",
        ibmFit: "사용자 경험, 콘텐츠 디자인, 커뮤니티 구축, 브랜드 경험",
        recommendedServices: [
            {
                name: "Digital Product Engineering iX",
                reason: "사용자 공감과 창의성을 바탕으로 의미 있는 디지털 경험을 창출할 수 있습니다."
            }
        ]
    },
    "INTP": {
        name: "논리적 혁신가",
        color: "#3498DB",
        traits: ["논리성", "분석", "혁신", "독립성"],
        description: "복잡한 기술적 문제를 논리적으로 분석하고 혁신적인 솔루션을 개발하는 유형입니다.",
        strengths: "기술 혁신, 논리적 분석, 문제 해결, 독창성",
        weaknesses: "실행력, 팀 협업, 마감 관리",
        careers: "연구 개발자, 데이터 과학자, 알고리즘 엔지니어, 기술 연구원",
        ibmFit: "AI/ML 연구, 양자 컴퓨팅, 알고리즘 개발, 기술 혁신",
        recommendedServices: [
            {
                name: "AI & Analytics Service",
                reason: "논리적 분석과 혁신적 사고로 AI 알고리즘과 데이터 과학 분야에서 탁월합니다."
            },
            {
                name: "Data Platform Service",
                reason: "복잡한 데이터 구조를 분석하고 최적화하는 데 강점을 발휘합니다."
            }
        ]
    },
    "ESTP": {
        name: "실행 중심 리더",
        color: "#E74C3C",
        traits: ["행동력", "실용성", "적응력", "결단력"],
        description: "빠르게 의사결정하고 즉각적으로 실행하는 유형입니다. 위기 상황에서 강점을 발휘합니다.",
        strengths: "빠른 실행, 위기 관리, 적응력, 실용적 해결",
        weaknesses: "장기 계획, 세부 분석, 인내심",
        careers: "기술 영업, 솔루션 컨설턴트, 프로젝트 리더, 사전 영업",
        ibmFit: "기술 영업, 고객 솔루션, 프로젝트 관리, 비즈니스 개발",
        recommendedServices: [
            {
                name: "Digital Product Engineering iX",
                reason: "빠른 실행력과 적응력으로 애자일한 제품 개발을 주도할 수 있습니다."
            }
        ]
    },
    "ESFP": {
        name: "열정적 협력자",
        color: "#F39C12",
        traits: ["열정", "협력", "실용성", "적응력"],
        description: "팀에 에너지를 불어넣고 협력적인 분위기를 만드는 유형입니다. 실용적이고 유연한 접근을 선호합니다.",
        strengths: "팀 동기부여, 협력, 유연성, 실용적 접근",
        weaknesses: "장기 계획, 체계성, 세부 분석",
        careers: "스크럼 마스터, 팀 리더, 이벤트 관리자, 커뮤니티 매니저",
        ibmFit: "애자일 코치, 팀 빌딩, 이벤트 관리, 내부 커뮤니케이션",
        recommendedServices: [
            {
                name: "Digital Product Engineering iX",
                reason: "협력적 접근과 유연성으로 팀 기반 제품 개발을 촉진할 수 있습니다."
            }
        ]
    },
    "ENFP": {
        name: "창의적 촉진자",
        color: "#E91E63",
        traits: ["창의성", "열정", "혁신", "영감"],
        description: "새로운 아이디어를 탐색하고 팀에 영감을 주는 유형입니다. 혁신적인 프로젝트를 주도합니다.",
        strengths: "아이디어 창출, 팀 영감, 혁신 주도, 네트워킹",
        weaknesses: "세부 실행, 일관성, 마감 관리",
        careers: "제품 관리자, 혁신 리더, 비즈니스 분석가, 마케팅 전략가",
        ibmFit: "제품 혁신, 디자인 씽킹, 비즈니스 전략, 신규 사업",
        recommendedServices: [
            {
                name: "Digital Product Engineering iX",
                reason: "창의적 아이디어와 혁신적 사고로 새로운 디지털 제품을 기획하고 주도합니다."
            },
            {
                name: "AI & Analytics Service",
                reason: "혁신적 사고로 AI 기반 새로운 비즈니스 기회를 발굴할 수 있습니다."
            }
        ]
    },
    "ENTP": {
        name: "전략적 혁신가",
        color: "#00BCD4",
        traits: ["혁신", "논리", "도전", "전략"],
        description: "기존 방식에 도전하고 혁신적인 솔루션을 제안하는 유형입니다. 복잡한 문제를 즐깁니다.",
        strengths: "혁신적 사고, 전략 수립, 문제 해결, 설득력",
        weaknesses: "세부 실행, 일관성, 루틴 작업",
        careers: "기술 컨설턴트, 솔루션 아키텍트, 제품 전략가, 혁신 리더",
        ibmFit: "기술 컨설팅, 솔루션 설계, 비즈니스 혁신, 전략 기획",
        recommendedServices: [
            {
                name: "AI & Analytics Service",
                reason: "혁신적 사고와 논리적 분석으로 AI 기반 비즈니스 전략을 수립합니다."
            },
            {
                name: "Digital Product Engineering iX",
                reason: "기존 방식에 도전하며 혁신적인 디지털 솔루션을 설계합니다."
            }
        ]
    },
    "ESTJ": {
        name: "효율적 관리자",
        color: "#795548",
        traits: ["조직력", "효율성", "리더십", "실행력"],
        description: "효율적으로 팀을 관리하고 목표를 달성하는 유형입니다. 명확한 프로세스와 책임을 중시합니다.",
        strengths: "프로젝트 관리, 팀 리더십, 효율성, 실행력",
        weaknesses: "유연성, 혁신, 감정 고려",
        careers: "프로젝트 관리자, 운영 관리자, 프로그램 관리자, 팀 리더",
        ibmFit: "프로그램 관리, 운영 효율화, 프로세스 개선, 팀 관리",
        recommendedServices: [
            {
                name: "Data Platform Service",
                reason: "체계적 관리와 효율성으로 대규모 데이터 플랫폼 운영을 최적화합니다."
            }
        ]
    },
    "ESFJ": {
        name: "협력적 조직자",
        color: "#4CAF50",
        traits: ["협력", "조직력", "지원", "책임감"],
        description: "팀의 화합을 중시하며 효율적으로 업무를 조직하는 유형입니다. 팀원들을 지원하고 동기부여합니다.",
        strengths: "팀 협력, 조직 관리, 지원, 커뮤니케이션",
        weaknesses: "변화 적응, 비판 수용, 혁신",
        careers: "프로젝트 코디네이터, HR 파트너, 팀 리더, 고객 성공 관리자",
        ibmFit: "프로젝트 조정, 인사 관리, 팀 개발, 고객 관계",
        recommendedServices: [
            {
                name: "Digital Product Engineering iX",
                reason: "팀 협력과 조직력으로 고객 중심의 제품 개발 프로젝트를 성공적으로 이끕니다."
            }
        ]
    },
    "ENFJ": {
        name: "영감을 주는 리더",
        color: "#FF5722",
        traits: ["리더십", "영감", "공감", "비전"],
        description: "팀에 비전을 제시하고 구성원들을 동기부여하는 유형입니다. 사람과 목표의 조화를 추구합니다.",
        strengths: "팀 리더십, 동기부여, 비전 제시, 커뮤니케이션",
        weaknesses: "세부 관리, 비판적 피드백, 객관성",
        careers: "엔지니어링 관리자, 제품 리더, 조직 개발, 변화 관리자",
        ibmFit: "엔지니어링 리더십, 조직 변화, 인재 개발, 문화 구축",
        recommendedServices: [
            {
                name: "Digital Product Engineering iX",
                reason: "비전 제시와 팀 동기부여로 혁신적인 디지털 제품 개발을 주도합니다."
            },
            {
                name: "AI & Analytics Service",
                reason: "리더십과 커뮤니케이션으로 AI 프로젝트 팀을 이끌고 비전을 실현합니다."
            }
        ]
    },
    "ENTJ": {
        name: "전략적 리더",
        color: "#673AB7",
        traits: ["리더십", "전략", "효율성", "결단력"],
        description: "명확한 비전을 가지고 전략적으로 조직을 이끄는 유형입니다. 목표 달성과 효율성을 중시합니다.",
        strengths: "전략적 리더십, 의사결정, 효율성, 목표 달성",
        weaknesses: "감정 고려, 인내심, 세부 배려",
        careers: "기술 임원, 사업부 리더, 전략 책임자, 프로그램 디렉터",
        ibmFit: "사업부 리더십, 전략 기획, 대규모 프로그램, 조직 혁신",
        recommendedServices: [
            {
                name: "AI & Analytics Service",
                reason: "전략적 리더십으로 AI 기반 비즈니스 혁신을 주도하고 목표를 달성합니다."
            },
            {
                name: "Data Platform Service",
                reason: "효율성과 결단력으로 대규모 데이터 플랫폼 전략을 수립하고 실행합니다."
            }
        ]
    }
};

// Made with Bob
