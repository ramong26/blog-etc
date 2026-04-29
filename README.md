# blog-etc

블로그 서비스 개발을 위한 모노레포입니다.

현재는 프론트엔드(Next.js) 중심으로 초기 구조가 준비되어 있으며,
백엔드와 공통 패키지 영역은 확장 가능한 형태로 비워둔 상태입니다.

## 저장소 구조

```text
.
├─ backend/      # 백엔드 서비스(NestJS 예정)
├─ frontend/     # Next.js 16(App Router) 웹 앱
└─ package/      # 공통 타입/유틸 패키지
```

## 기술 스택

- Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS v4, ESLint
- Backend: NestJS (예정)
- Shared: 공통 타입/유틸 패키지 분리 예정

## 빠른 시작

현재 실행 가능한 앱은 `frontend`입니다.

```bash
cd frontend
pnpm install
pnpm dev
```

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
- `backend`: 디렉터리만 생성됨
- `package`: 디렉터리만 생성됨

## 로드맵 제안

- 백엔드(NestJS) 초기 부트스트랩 및 API 스펙 정의
- 공통 패키지에 DTO/타입 분리
- 프론트엔드 상태관리/데이터패칭 표준화(예: TanStack Query + API 클라이언트)