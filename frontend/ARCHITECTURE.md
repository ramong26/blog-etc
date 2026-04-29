# ARCHITECTURE

프론트엔드 아키텍처 원칙을 정의합니다.

## 1. 폴더 구조 원칙

기본 방향은 FSD(Feature-Sliced Design)이며, App Router 구조와 함께 사용합니다.

```text
app/
├─ (routes)/
│  ├─ page.tsx
│  └─ ...
├─ globals.css
└─ layout.tsx

src/
├─ shared/        # 공통 유틸, UI, API 클라이언트
├─ entities/      # 도메인 엔티티
├─ features/      # 사용자 액션 중심 기능
├─ widgets/       # 페이지 조합 단위
└─ pages/         # 라우트별 페이지 조합
```

현재는 초기 템플릿 상태이므로, 기능 추가 시 위 구조로 점진적으로 이관합니다.

## 2. 컴포넌트 원칙

- 데이터 패칭이 필요한 컴포넌트는 로딩 UI를 반드시 함께 제공합니다.
- 서버 상태는 TanStack Query(React Query)로 관리합니다.
- 클라이언트 전역 상태는 Zustand로 제한적으로 사용합니다.
- 프레젠테이션 컴포넌트와 비즈니스 로직을 가능한 분리합니다.

## 3. 데이터 패칭 원칙

- HTTP 클라이언트는 `ky`를 표준으로 사용합니다.
- API 계층은 한 곳에서 생성/재사용되도록 구성합니다.
- 에러 포맷을 통일하고, 사용자 노출 메시지와 로깅 메시지를 분리합니다.

예시 구조:

```text
src/shared/api/
├─ client.ts      # ky 인스턴스
├─ types.ts       # 공통 응답 타입
└─ endpoints/
	└─ posts.ts
```

## 4. UI/UX 품질 원칙

- 데이터 로딩 시 스켈레톤 또는 플레이스홀더를 제공합니다.
- 실패 상태(에러 메시지/재시도 버튼)를 기본 제공합니다.
- 빈 상태(empty state)를 정의해 사용자 행동을 유도합니다.

## 5. 코드 품질 원칙

- ESLint 경고를 방치하지 않습니다.
- 공통 로직은 `shared`로 올리고 중복 구현을 줄입니다.
- 타입은 명시적으로 선언하고 `any` 사용을 지양합니다.
