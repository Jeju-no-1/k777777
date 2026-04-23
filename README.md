# 오름 · OREUM

> 서두르지 않는 여행자를 위하여 — Composed for the unhurried.

제주를 거점으로 하는 프라이빗 트래블 스튜디오 **오름(OREUM)** 의 랜딩 페이지 샘플입니다. 항공 · 숙소 · 렌터카 · 택시투어 · 전세버스 · VIP의전 · 골프를 원스톱으로 예약하는 종합 여행 예약 사이트를 한글/영문 병기 에디토리얼 스타일로 구성했습니다.

![OREUM preview](https://images.unsplash.com/photo-1589307004173-3c13ab82b78d?w=1600&q=80)

---

## 디자인 방향

- **타이포그래피** — 한글 주(Noto Serif KR), 영문 세리프(Fraunces) · 본문 Inter + Noto Sans KR
- **컬러** — 딥 다크(`#0F1410`) · 크림 페이퍼(`#F4F1EA`) · 네온 라임 옐로우(`#DFFF3A`) 3톤
- **레퍼런스** — Aman Resorts · Airbnb Luxe · Kinfolk Magazine · Luntian Tours 풍의 에디토리얼
- **한/영 병기** — 한글을 메인 크기로, 영어를 세리프 이탤릭 서브/소문자 라벨로 병치

## 구조

```
oreum-site/
├── index.html              메인 랜딩 (Hero · Journeys · Stays · Quote · CTA · Footer)
├── pages/
│   └── stay.html           숙소 상세 페이지 예시
├── assets/
│   ├── css/style.css       전체 스타일시트 (커스텀 프로퍼티 기반)
│   ├── js/main.js          스티키 내비 · 스크롤 리빌 · 스무스 앵커
│   └── images/             로컬 이미지 배치 위치(현재는 Unsplash CDN 사용)
└── README.md
```

## 주요 섹션

| # | 섹션 | 내용 |
|---|------|------|
| 01 | Hero | 풀블리드 드론샷 + 라임 옐로우 세리프 "바람을 따라, 길을 열다" |
| 02 | Studio 소개 | 에디토리얼 그리드 (크림 배경) |
| 03 | The Coastal Road | 와이드 풀블리드 배너 (우도) |
| 04 | Journeys | 6 시그니처 여정을 비대칭 12-컬럼 그리드로 배치 |
| 05 | Quote | 다크 배경 · 라임 옐로우 이탤릭 인용구 |
| 06 | Stay Collection | 숙소 6종 · 한/영 이중 표기 카드 |
| 07 | Private Programmes | VIP · 촬영 · 웨딩 · 기업 프라이빗 배너 |
| 08 | Journal | 에디토리얼 저널 3컬럼 |
| 09 | CTA | 라임 옐로우 배경 + 이메일 폼 |
| 10 | Footer | 5컬럼 · 대형 `oreum.` 워드마크 |

## 실행

순수 HTML/CSS/JS라서 서버 없이 바로 열립니다.

```bash
# 로컬 서버 (예: VS Code Live Server / Python)
python3 -m http.server 8000
# → http://localhost:8000
```

또는 **GitHub Pages** 로 바로 배포:

1. 새 레포지토리 생성 후 이 폴더 전체 푸시
2. Settings → Pages → Source: `main / (root)` 선택
3. `https://{username}.github.io/{repo}/` 에서 확인

## 커스터마이징

전역 변수는 모두 `assets/css/style.css` 상단 `:root` 에 정의되어 있습니다.

```css
:root{
  --lime: #DFFF3A;     /* 포인트 */
  --ink:  #0F1410;     /* 다크 배경 */
  --paper:#F4F1EA;     /* 크림 배경 */
  --serif:'Fraunces','Noto Serif KR',…;
  --sans: 'Inter','Noto Sans KR',…;
}
```

## 크레딧

- 이미지 · [Unsplash](https://unsplash.com) (프로토타입 용)
- 폰트 · [Fraunces](https://fonts.google.com/specimen/Fraunces), [Inter](https://fonts.google.com/specimen/Inter), [Noto Serif KR](https://fonts.google.com/noto/specimen/Noto+Serif+KR), [Noto Sans KR](https://fonts.google.com/noto/specimen/Noto+Sans+KR) — all via Google Fonts
- 디자인 · OREUM Brand Studio, 2026

## 라이선스

MIT — 자유롭게 사용 · 수정 · 배포 가능합니다.
