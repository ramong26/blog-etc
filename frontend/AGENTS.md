# AGENTS.md

## 적용 범위

- 이 문서는 `frontend/` 하위 작업에 적용함
- 루트 `AGENTS.md`와 `.agents/git-pr-rules.md` 함께 확인함

---

## 환경

- 런타임 Node.js
- 패키지 매니저 pnpm
- 프레임워크 Next.js App Router
- 언어 TypeScript, React
- 스타일 Tailwind CSS, shadcn/ui 계열 컴포넌트
- 상태와 데이터 흐름 TanStack Query, Zustand, ky

---

## 구조 기준

- 현재 프론트엔드는 FSD 구조를 따르는 것으로 확인함
- `app`은 Next.js 라우팅과 레이아웃 담당함
- `page`는 페이지 단위 조합 담당함
- `widgets`는 페이지를 구성하는 큰 UI 블록 담당함
- `shared`는 공통 UI, 유틸, 상수 담당함

```text
frontend/
├─ app/
│  ├─ (main)/
│  │  ├─ landing/
│  │  ├─ posts/
│  │  └─ projects/
│  ├─ shared/
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ page/
│  ├─ home/
│  │  ├─ model/
│  │  └─ ui/
│  ├─ landing/
│  │  └─ ui/
│  └─ posts/
│     ├─ model/
│     └─ ui/
├─ widgets/
│  ├─ archive-layout/
│  │  ├─ model/
│  │  └─ ui/
│  ├─ header/
│  │  ├─ model/
│  │  └─ ui/
│  └─ post-list/
│     ├─ model/
│     └─ ui/
├─ shared/
│  ├─ constants/
│  ├─ lib/
│  └─ ui/
├─ public/
├─ package.json
└─ tsconfig.json
```

---

## 작업 규칙

- 라우팅은 `app/`에서 확인함
- 화면 조합은 `page/`에서 확인함
- 페이지 공통 블록은 `widgets/` 재사용 가능함
- 공통 UI, 유틸, 상수는 `shared/` 재사용 가능함
- 서버 컴포넌트를 기본으로 판단함
- 브라우저 API, 상태, 이벤트 핸들러 필요 시에만 `"use client"` 사용함
- API 호출은 `ky` 기반 클라이언트와 TanStack Query 흐름 우선 확인함
- 클라이언트 전역 상태는 필요한 경우에만 Zustand 사용함
- 기존 `shared/ui` 또는 shadcn/ui 컴포넌트 재사용 가능 여부 먼저 확인함
- 아이콘은 `lucide-react` 우선 사용함
- 불필요한 `console`, 미사용 import, `any`는 남기지 않음

---

## 명령어

루트에서 실행 가능함

```bash
pnpm --filter blog-etc dev
pnpm --filter blog-etc build
pnpm --filter blog-etc lint
```

`frontend/` 폴더 안에서 실행 가능함

```bash
pnpm dev
pnpm build
pnpm lint
```

---

## UI 확인 기준

- 모바일과 데스크톱 반응형 확인함
- 텍스트가 버튼, 카드, 헤더 밖으로 넘치지 않는지 확인함
- hover, focus, disabled, loading 상태 확인함
- 로딩, 에러, 빈 상태 확인함
- 시각 변경이 있으면 브라우저로 확인 가능함

---

## 하네스 주의사항

- Windows/PowerShell 환경 기준으로 명령과 경로 확인함
- `.next/`, `node_modules/`, `.turbo/` 산출물은 직접 수정하지 않음
- dev 서버 필요 시 포트 충돌 확인함
- 이미 실행 중인 서버는 재사용 가능 여부 확인함
- 자동 포맷이나 lint 수정 후 diff 확인함
