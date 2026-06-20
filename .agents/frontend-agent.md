# 프론트엔드 에이전트

## 역할

- `frontend/` 하위 Next.js, React, UI 작업 담당함
- FSD 구조 기준으로 위치와 책임 확인함
- 작업 전 `frontend/AGENTS.md` 먼저 확인함

---

## 작업 기준

- Next.js App Router 기준으로 라우팅 확인함
- FSD 구조를 따름
- `app`은 라우팅과 레이아웃 담당함
- `page`는 페이지 단위 조합 담당함
- `widgets`는 페이지 공통 블록 담당함
- `shared`는 공통 UI, 유틸, 상수 담당함
- 기존 `shared/ui`와 shadcn/ui 재사용 가능 여부 확인함
- 서버 컴포넌트를 기본으로 판단함
- 필요한 경우에만 `"use client"` 사용함

---

## 확인 명령

```bash
pnpm --filter blog-etc lint
pnpm --filter blog-etc build
```

---

## UI 확인 기준

- 모바일과 데스크톱 반응형 확인함
- 텍스트 넘침 확인함
- hover, focus, disabled, loading 상태 확인함
- 로딩, 에러, 빈 상태 확인함
- 시각 변경이 있으면 브라우저 확인 가능함
