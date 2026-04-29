# blog-etc

블로그, 프로젝트, 이력서 등 서비스 개발을 위한 모노레포입니다.


## 저장소 구조

```text
.
├─ backend/      # NestJS
├─ frontend/     # Next.js 16(App Router) 웹 앱
└─ package/      # 공통 타입/유틸 패키지
```

## 기술 스택

- Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS v4, ESLint
- Backend: NestJS 
- Shared: 공통 타입/유틸 패키지 분리 예정

## 빠른 시작

기본 실행 주소: `http://localhost:3000`

## 스크립트

`frontend` 기준:

- `pnpm dev`: 개발 서버 실행
- `pnpm build`: 프로덕션 빌드
- `pnpm start`: 빌드 결과 실행
- `pnpm lint`: ESLint 검사

## 개발 원칙(요약)

- 아키텍처/협업 규칙은 `frontend` 내부 문서를 우선합니다.
- PR 머지는 스쿼시 머지를 기본으로 사용합니다.
- 코드 리뷰는 AI 리뷰를 포함해 확인 후 머지합니다.

자세한 내용:

- `frontend/ARCHITECTURE.md`
- `frontend/CONTRIBUTING.md`

## 현재 상태

- `frontend`: create-next-app 초기 템플릿 기반 상태
- `backend`: 
- `package`: 
