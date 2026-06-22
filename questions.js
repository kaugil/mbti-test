// MBTI 질문 데이터 (60문항)
const mbtiQuestions = [
    // E(외향) vs I(내향) - 15문항
    {
        id: 1,
        question: "새로운 사람들을 만나는 것이 즐겁고 에너지가 생긴다.",
        dimension: "EI",
        direction: "E"
    },
    {
        id: 2,
        question: "혼자만의 시간을 가지면 에너지가 충전된다.",
        dimension: "EI",
        direction: "I"
    },
    {
        id: 3,
        question: "파티나 모임에서 여러 사람과 대화하는 것을 좋아한다.",
        dimension: "EI",
        direction: "E"
    },
    {
        id: 4,
        question: "깊이 있는 일대일 대화를 선호한다.",
        dimension: "EI",
        direction: "I"
    },
    {
        id: 5,
        question: "생각을 말로 표현하면서 정리하는 편이다.",
        dimension: "EI",
        direction: "E"
    },
    {
        id: 6,
        question: "생각을 충분히 정리한 후에 말하는 편이다.",
        dimension: "EI",
        direction: "I"
    },
    {
        id: 7,
        question: "활동적이고 다양한 경험을 추구한다.",
        dimension: "EI",
        direction: "E"
    },
    {
        id: 8,
        question: "조용하고 차분한 환경을 선호한다.",
        dimension: "EI",
        direction: "I"
    },
    {
        id: 9,
        question: "먼저 다가가서 대화를 시작하는 편이다.",
        dimension: "EI",
        direction: "E"
    },
    {
        id: 10,
        question: "상대방이 먼저 말을 걸어주기를 기다린다.",
        dimension: "EI",
        direction: "I"
    },
    {
        id: 11,
        question: "여러 사람과 함께 있을 때 더 편안하다.",
        dimension: "EI",
        direction: "E"
    },
    {
        id: 12,
        question: "소수의 친한 친구들과 시간 보내는 것을 선호한다.",
        dimension: "EI",
        direction: "I"
    },
    {
        id: 13,
        question: "즉흥적으로 계획을 바꾸는 것이 즐겁다.",
        dimension: "EI",
        direction: "E"
    },
    {
        id: 14,
        question: "미리 계획된 일정을 선호한다.",
        dimension: "EI",
        direction: "I"
    },
    {
        id: 15,
        question: "전화 통화가 문자보다 편하다.",
        dimension: "EI",
        direction: "E"
    },

    // S(감각) vs N(직관) - 15문항
    {
        id: 16,
        question: "현재의 사실과 세부사항에 집중한다.",
        dimension: "SN",
        direction: "S"
    },
    {
        id: 17,
        question: "미래의 가능성과 의미를 생각한다.",
        dimension: "SN",
        direction: "N"
    },
    {
        id: 18,
        question: "실용적이고 현실적인 것을 중요하게 생각한다.",
        dimension: "SN",
        direction: "S"
    },
    {
        id: 19,
        question: "창의적이고 독창적인 아이디어를 좋아한다.",
        dimension: "SN",
        direction: "N"
    },
    {
        id: 20,
        question: "경험을 통해 배운 것을 신뢰한다.",
        dimension: "SN",
        direction: "S"
    },
    {
        id: 21,
        question: "직관과 영감을 따르는 편이다.",
        dimension: "SN",
        direction: "N"
    },
    {
        id: 22,
        question: "구체적이고 명확한 지시를 선호한다.",
        dimension: "SN",
        direction: "S"
    },
    {
        id: 23,
        question: "큰 그림과 전체적인 맥락을 파악하려 한다.",
        dimension: "SN",
        direction: "N"
    },
    {
        id: 24,
        question: "검증된 방법을 따르는 것이 안전하다고 생각한다.",
        dimension: "SN",
        direction: "S"
    },
    {
        id: 25,
        question: "새로운 방법을 시도하는 것을 즐긴다.",
        dimension: "SN",
        direction: "N"
    },
    {
        id: 26,
        question: "오감으로 느낄 수 있는 것을 중요하게 여긴다.",
        dimension: "SN",
        direction: "S"
    },
    {
        id: 27,
        question: "상징적이고 은유적인 표현을 좋아한다.",
        dimension: "SN",
        direction: "N"
    },
    {
        id: 28,
        question: "단계별로 차근차근 진행하는 것을 선호한다.",
        dimension: "SN",
        direction: "S"
    },
    {
        id: 29,
        question: "여러 가지를 동시에 생각하는 편이다.",
        dimension: "SN",
        direction: "N"
    },
    {
        id: 30,
        question: "사실에 기반한 정보를 신뢰한다.",
        dimension: "SN",
        direction: "S"
    },

    // T(사고) vs F(감정) - 15문항
    {
        id: 31,
        question: "논리적이고 객관적인 분석을 중요하게 생각한다.",
        dimension: "TF",
        direction: "T"
    },
    {
        id: 32,
        question: "사람들의 감정과 조화를 우선시한다.",
        dimension: "TF",
        direction: "F"
    },
    {
        id: 33,
        question: "옳고 그름을 명확히 판단하는 것이 중요하다.",
        dimension: "TF",
        direction: "T"
    },
    {
        id: 34,
        question: "상황에 따라 유연하게 판단하는 것이 중요하다.",
        dimension: "TF",
        direction: "F"
    },
    {
        id: 35,
        question: "비판적 사고와 분석을 잘한다.",
        dimension: "TF",
        direction: "T"
    },
    {
        id: 36,
        question: "공감과 이해를 잘하는 편이다.",
        dimension: "TF",
        direction: "F"
    },
    {
        id: 37,
        question: "결정할 때 원칙과 기준을 따른다.",
        dimension: "TF",
        direction: "T"
    },
    {
        id: 38,
        question: "결정할 때 사람들에게 미치는 영향을 고려한다.",
        dimension: "TF",
        direction: "F"
    },
    {
        id: 39,
        question: "솔직하고 직설적인 표현을 선호한다.",
        dimension: "TF",
        direction: "T"
    },
    {
        id: 40,
        question: "부드럽고 배려하는 표현을 선호한다.",
        dimension: "TF",
        direction: "F"
    },
    {
        id: 41,
        question: "문제 해결에 집중한다.",
        dimension: "TF",
        direction: "T"
    },
    {
        id: 42,
        question: "감정적 지지를 제공하는 것이 중요하다.",
        dimension: "TF",
        direction: "F"
    },
    {
        id: 43,
        question: "공정성과 정의를 중요하게 생각한다.",
        dimension: "TF",
        direction: "T"
    },
    {
        id: 44,
        question: "조화와 평화를 중요하게 생각한다.",
        dimension: "TF",
        direction: "F"
    },
    {
        id: 45,
        question: "객관적인 사실에 기반해 판단한다.",
        dimension: "TF",
        direction: "T"
    },

    // J(판단) vs P(인식) - 15문항
    {
        id: 46,
        question: "계획을 세우고 그대로 실행하는 것을 좋아한다.",
        dimension: "JP",
        direction: "J"
    },
    {
        id: 47,
        question: "상황에 따라 유연하게 대처하는 것을 선호한다.",
        dimension: "JP",
        direction: "P"
    },
    {
        id: 48,
        question: "마감 기한을 잘 지키는 편이다.",
        dimension: "JP",
        direction: "J"
    },
    {
        id: 49,
        question: "마감 직전에 집중력이 높아진다.",
        dimension: "JP",
        direction: "P"
    },
    {
        id: 50,
        question: "정리정돈이 잘 되어 있어야 편하다.",
        dimension: "JP",
        direction: "J"
    },
    {
        id: 51,
        question: "약간의 혼란도 괜찮다고 생각한다.",
        dimension: "JP",
        direction: "P"
    },
    {
        id: 52,
        question: "결정을 빨리 내리는 편이다.",
        dimension: "JP",
        direction: "J"
    },
    {
        id: 53,
        question: "여러 선택지를 열어두고 싶어한다.",
        dimension: "JP",
        direction: "P"
    },
    {
        id: 54,
        question: "체계적이고 조직적인 것을 선호한다.",
        dimension: "JP",
        direction: "J"
    },
    {
        id: 55,
        question: "자유롭고 융통성 있는 것을 선호한다.",
        dimension: "JP",
        direction: "P"
    },
    {
        id: 56,
        question: "일을 미리미리 끝내는 편이다.",
        dimension: "JP",
        direction: "J"
    },
    {
        id: 57,
        question: "여유를 가지고 천천히 진행하는 편이다.",
        dimension: "JP",
        direction: "P"
    },
    {
        id: 58,
        question: "목표를 설정하고 달성하는 것이 중요하다.",
        dimension: "JP",
        direction: "J"
    },
    {
        id: 59,
        question: "과정을 즐기는 것이 더 중요하다.",
        dimension: "JP",
        direction: "P"
    },
    {
        id: 60,
        question: "규칙과 절차를 따르는 것이 편하다.",
        dimension: "JP",
        direction: "J"
    }
];

// MBTI 유형별 상세 설명
const mbtiDescriptions = {
    "ISTJ": {
        name: "세상의 소금형",
        color: "#2C3E50",
        traits: ["책임감이 강함", "체계적", "신뢰할 수 있음", "현실적"],
        description: "한번 시작한 일은 끝까지 해내는 성실함과 책임감이 강한 유형입니다. 사실과 경험을 중시하며, 체계적이고 조직적인 방식을 선호합니다.",
        strengths: "신뢰성, 책임감, 체계성, 실용성",
        weaknesses: "융통성 부족, 변화에 대한 저항, 감정 표현 어려움",
        careers: "회계사, 감사, 군인, 경찰, 은행원, 공무원"
    },
    "ISFJ": {
        name: "임금 뒤편의 권력형",
        color: "#16A085",
        traits: ["헌신적", "세심함", "책임감", "온화함"],
        description: "따뜻하고 헌신적이며, 다른 사람을 돕는 것에서 보람을 느끼는 유형입니다. 세심하고 책임감이 강하며, 전통과 안정을 중시합니다.",
        strengths: "배려심, 책임감, 인내심, 세심함",
        weaknesses: "자기주장 부족, 변화 거부, 과도한 희생",
        careers: "간호사, 교사, 사서, 상담사, 사회복지사"
    },
    "INFJ": {
        name: "예언자형",
        color: "#8E44AD",
        traits: ["통찰력", "이상주의", "헌신적", "창의적"],
        description: "깊은 통찰력과 이상주의를 가진 유형입니다. 사람들의 성장을 돕고 의미 있는 변화를 만들어내는 것을 중요하게 생각합니다.",
        strengths: "통찰력, 창의성, 헌신, 이상주의",
        weaknesses: "완벽주의, 번아웃, 비현실적 기대",
        careers: "상담사, 작가, 심리학자, 예술가, 종교인"
    },
    "INTJ": {
        name: "과학자형",
        color: "#34495E",
        traits: ["전략적", "독립적", "분석적", "혁신적"],
        description: "전략적 사고와 독립성이 강한 유형입니다. 복잡한 문제를 해결하고 장기적인 비전을 실현하는 것을 즐깁니다.",
        strengths: "전략적 사고, 독립성, 분석력, 혁신성",
        weaknesses: "감정 표현 어려움, 완벽주의, 비판적",
        careers: "과학자, 엔지니어, 전략가, 연구원, 교수"
    },
    "ISTP": {
        name: "백과사전형",
        color: "#E67E22",
        traits: ["논리적", "실용적", "유연함", "독립적"],
        description: "논리적이고 실용적인 문제 해결사입니다. 손으로 직접 만들고 고치는 것을 좋아하며, 자유롭고 유연한 생활을 선호합니다.",
        strengths: "문제 해결력, 실용성, 유연성, 침착함",
        weaknesses: "감정 표현 부족, 장기 계획 어려움, 규칙 거부",
        careers: "기술자, 정비사, 운동선수, 소방관, 파일럿"
    },
    "ISFP": {
        name: "성인군자형",
        color: "#1ABC9C",
        traits: ["예술적", "온화함", "유연함", "현재 지향적"],
        description: "조용하고 친절하며 예술적 감각이 뛰어난 유형입니다. 현재를 즐기고 자유로운 표현을 중시합니다.",
        strengths: "예술성, 유연성, 친절함, 현실감각",
        weaknesses: "계획성 부족, 자기주장 약함, 스트레스 회피",
        careers: "예술가, 디자이너, 음악가, 요리사, 수의사"
    },
    "INFP": {
        name: "잔다르크형",
        color: "#9B59B6",
        traits: ["이상주의", "창의적", "공감능력", "열정적"],
        description: "이상주의적이고 창의적인 유형입니다. 자신의 가치관에 따라 살아가며, 진정성과 의미를 추구합니다.",
        strengths: "창의성, 공감능력, 이상주의, 열정",
        weaknesses: "비현실적, 우유부단, 과도한 이상화",
        careers: "작가, 상담사, 예술가, 심리학자, 사회운동가"
    },
    "INTP": {
        name: "아이디어 뱅크형",
        color: "#3498DB",
        traits: ["논리적", "분석적", "독창적", "호기심"],
        description: "논리적이고 분석적인 사고를 가진 유형입니다. 복잡한 이론과 아이디어를 탐구하는 것을 즐깁니다.",
        strengths: "논리성, 분석력, 독창성, 객관성",
        weaknesses: "실행력 부족, 감정 표현 어려움, 완벽주의",
        careers: "연구원, 프로그래머, 수학자, 철학자, 분석가"
    },
    "ESTP": {
        name: "수완좋은 활동가형",
        color: "#E74C3C",
        traits: ["활동적", "현실적", "대담함", "적응력"],
        description: "활동적이고 현실적인 유형입니다. 즉각적인 문제 해결을 잘하며, 모험과 도전을 즐깁니다.",
        strengths: "행동력, 적응력, 현실감각, 대담함",
        weaknesses: "충동적, 장기 계획 부족, 규칙 무시",
        careers: "영업사원, 기업가, 운동선수, 경찰, 응급구조사"
    },
    "ESFP": {
        name: "사교적인 유형",
        color: "#F39C12",
        traits: ["사교적", "즐거움", "자발적", "낙천적"],
        description: "사교적이고 즐거움을 추구하는 유형입니다. 사람들과 함께 있을 때 에너지가 넘치며, 현재를 즐깁니다.",
        strengths: "사교성, 낙천성, 유연성, 실용성",
        weaknesses: "계획성 부족, 집중력 부족, 충동적",
        careers: "연예인, 이벤트 기획자, 판매원, 요리사, 여행 가이드"
    },
    "ENFP": {
        name: "스파크형",
        color: "#E91E63",
        traits: ["열정적", "창의적", "사교적", "자유로움"],
        description: "열정적이고 창의적인 유형입니다. 새로운 가능성을 탐구하고 사람들에게 영감을 주는 것을 좋아합니다.",
        strengths: "창의성, 열정, 사교성, 낙천성",
        weaknesses: "산만함, 일관성 부족, 과도한 이상화",
        careers: "작가, 마케터, 상담사, 배우, 기자"
    },
    "ENTP": {
        name: "발명가형",
        color: "#00BCD4",
        traits: ["혁신적", "논리적", "도전적", "독창적"],
        description: "혁신적이고 논리적인 유형입니다. 새로운 아이디어를 탐구하고 기존의 방식에 도전하는 것을 즐깁니다.",
        strengths: "혁신성, 논리성, 창의성, 적응력",
        weaknesses: "실행력 부족, 논쟁적, 규칙 무시",
        careers: "기업가, 발명가, 변호사, 컨설턴트, 과학자"
    },
    "ESTJ": {
        name: "사업가형",
        color: "#795548",
        traits: ["조직적", "실용적", "결단력", "책임감"],
        description: "조직적이고 실용적인 유형입니다. 효율적으로 일을 처리하고 목표를 달성하는 것을 중요하게 생각합니다.",
        strengths: "조직력, 실용성, 결단력, 책임감",
        weaknesses: "융통성 부족, 감정 표현 어려움, 고집",
        careers: "경영자, 관리자, 군인, 판사, 은행원"
    },
    "ESFJ": {
        name: "친선도모형",
        color: "#4CAF50",
        traits: ["사교적", "협조적", "책임감", "배려심"],
        description: "사교적이고 협조적인 유형입니다. 다른 사람을 돕고 조화로운 환경을 만드는 것을 중요하게 생각합니다.",
        strengths: "사교성, 협조성, 책임감, 배려심",
        weaknesses: "비판에 민감, 변화 거부, 과도한 희생",
        careers: "교사, 간호사, 사회복지사, 이벤트 기획자, 인사 담당자"
    },
    "ENFJ": {
        name: "언변능숙형",
        color: "#FF5722",
        traits: ["카리스마", "공감능력", "이상주의", "리더십"],
        description: "카리스마 있고 공감능력이 뛰어난 유형입니다. 사람들을 이끌고 긍정적인 변화를 만들어내는 것을 좋아합니다.",
        strengths: "리더십, 공감능력, 카리스마, 이상주의",
        weaknesses: "과도한 이상화, 비판에 민감, 번아웃",
        careers: "교사, 상담사, 정치인, 코치, 인사 담당자"
    },
    "ENTJ": {
        name: "지도자형",
        color: "#673AB7",
        traits: ["리더십", "전략적", "결단력", "효율성"],
        description: "타고난 리더십과 전략적 사고를 가진 유형입니다. 목표를 설정하고 효율적으로 달성하는 것을 즐깁니다.",
        strengths: "리더십, 전략적 사고, 결단력, 효율성",
        weaknesses: "감정 표현 부족, 지나친 비판, 완벽주의",
        careers: "CEO, 경영자, 변호사, 정치인, 군 장교"
    }
};

// Made with Bob
