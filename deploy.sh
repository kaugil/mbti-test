#!/bin/bash

echo "🚀 MBTI 테스트 배포 준비 중..."
echo ""

# 현재 디렉토리 확인
if [ ! -f "index.html" ]; then
    echo "❌ 오류: index.html 파일을 찾을 수 없습니다."
    echo "mbti-test 디렉토리에서 실행해주세요."
    exit 1
fi

echo "✅ 필수 파일 확인 중..."
files=("index.html" "styles.css" "app.js" "questions.js" "manifest.json" "sw.js")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✓ $file"
    else
        echo "  ✗ $file (없음)"
    fi
done

echo ""
echo "📦 배포 방법을 선택하세요:"
echo ""
echo "1. Netlify (가장 쉬움 - 드래그 앤 드롭)"
echo "   → https://app.netlify.com/drop"
echo "   → 이 폴더를 드래그하여 업로드"
echo ""
echo "2. Vercel (CLI 사용)"
echo "   → npm install -g vercel"
echo "   → vercel"
echo ""
echo "3. GitHub Pages"
echo "   → GitHub 저장소 생성 후"
echo "   → Settings > Pages에서 활성화"
echo ""
echo "4. 수동 배포"
echo "   → FTP/SFTP로 서버에 업로드"
echo ""

read -p "배포 방법 선택 (1-4): " choice

case $choice in
    1)
        echo ""
        echo "🌐 Netlify 배포 방법:"
        echo "1. https://app.netlify.com/drop 접속"
        echo "2. 이 폴더(mbti-test)를 드래그하여 업로드"
        echo "3. 완료! 자동으로 URL이 생성됩니다"
        echo ""
        echo "브라우저를 열까요? (y/n)"
        read -p "> " open_browser
        if [ "$open_browser" = "y" ]; then
            open "https://app.netlify.com/drop" 2>/dev/null || xdg-open "https://app.netlify.com/drop" 2>/dev/null
        fi
        ;;
    2)
        echo ""
        echo "📦 Vercel 배포 중..."
        if command -v vercel &> /dev/null; then
            vercel
        else
            echo "Vercel CLI가 설치되어 있지 않습니다."
            echo "설치하시겠습니까? (y/n)"
            read -p "> " install_vercel
            if [ "$install_vercel" = "y" ]; then
                npm install -g vercel
                vercel
            fi
        fi
        ;;
    3)
        echo ""
        echo "📚 GitHub Pages 배포 방법:"
        echo "1. GitHub에 저장소 생성"
        echo "2. 다음 명령어 실행:"
        echo ""
        echo "   git init"
        echo "   git add ."
        echo "   git commit -m 'Initial commit'"
        echo "   git remote add origin https://github.com/USERNAME/REPO.git"
        echo "   git push -u origin main"
        echo ""
        echo "3. GitHub 저장소 Settings > Pages에서 활성화"
        ;;
    4)
        echo ""
        echo "📤 수동 배포 안내:"
        echo "FTP/SFTP 클라이언트를 사용하여"
        echo "이 폴더의 모든 파일을 서버에 업로드하세요."
        ;;
    *)
        echo "잘못된 선택입니다."
        ;;
esac

echo ""
echo "✨ 배포 완료 후 확인사항:"
echo "  □ HTTPS 적용 확인"
echo "  □ 모바일에서 테스트"
echo "  □ PWA 설치 가능 확인"
echo "  □ 오프라인 작동 확인"
echo ""
echo "🎉 배포를 완료하셨나요? 축하합니다!"

# Made with Bob
