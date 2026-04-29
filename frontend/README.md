# Frontend

`blog-etc` 프로젝트의 프론트엔드 애플리케이션입니다.

## 환경

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- ESLint

## 시작하기

```bash
pnpm install
pnpm dev
```

실행 주소: `http://localhost:3000`

## 스크립트

- `pnpm dev`: 개발 서버 실행
- `pnpm build`: 프로덕션 빌드
- `pnpm start`: 프로덕션 서버 실행
- `pnpm lint`: 정적 분석

## 디렉터리 구조

```text
frontend/
├─ app/
│  ├─ layout.tsx      # 루트 레이아웃
│  ├─ page.tsx        # 홈 페이지
│  └─ globals.css     # 전역 스타일
├─ public/            # 정적 파일
├─ ARCHITECTURE.md    # 아키텍처/개발 규칙
├─ CONTRIBUTING.md    # 협업/리뷰 규칙
├─ AGENTS.md          # 에이전트 지침
└─ CLAUDE.md          # Claude 참조 문서
```

## 문서 가이드

- 아키텍처 규칙: `ARCHITECTURE.md`
- 협업/리뷰 규칙: `CONTRIBUTING.md`
- AI 에이전트 관련: `AGENTS.md`, `CLAUDE.md`

## 현재 상태

- 기본 Next.js 템플릿 기반의 초기 세팅 완료
- 기능 단위 도메인 구조 및 API 연동은 이후 단계에서 확장 예정

## 권장 다음 단계

- 메타데이터(title/description) 프로젝트 용도로 교체
- 라우트 그룹 및 도메인 기반 폴더 구조 도입
- API 연동 계층(client, query key, error boundary) 표준화
