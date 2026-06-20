# AGENTS.md

## 적용 범위

- 이 문서는 `backend/` 하위 작업에 적용함
- 루트 `AGENTS.md`와 `.agents/git-pr-rules.md` 함께 확인함

---

## 환경

- 런타임은 Node.js 사용함
- 패키지 매니저는 pnpm 사용함
- 프레임워크는 NestJS 사용함
- 언어는 TypeScript 사용함
- ORM과 DB는 TypeORM, PostgreSQL 사용함
- 테스트는 Jest, Supertest 사용함

---

## 구조 기준

- NestJS 기능 모듈형 계층 구조로
- 도메인 단위 모듈 안에 controller, service, dto, entity를 분리함
- 공통 기능은 `libs`, DB 설정은 `database`로 분리함

```text
backend/
├─ src/
│  ├─ app.module.ts
│  ├─ main.ts
│  ├─ database/
│  │  ├─ database-options.factory.ts
│  │  └─ interfaces/
│  ├─ libs/
│  │  └─ core/
│  │     └─ validators/
│  └─ posts/
│     ├─ posts.module.ts
│     ├─ controllers/
│     ├─ dtos/
│     ├─ entities/
│     └─ services/
├─ test/
├─ package.json
└─ tsconfig.json
```

---

## 작업 규칙

- 새 API는 도메인 모듈 기준으로 위치 확인함
- controller는 요청과 응답 흐름만 담당함
- service는 비즈니스 로직 담당함
- entity는 DB 모델 기준으로 관리함
- dto는 요청 검증과 변환 기준으로 작성함
- DTO 검증은 `class-validator`, `class-transformer` 재사용 가능함
- 공통 validator와 유틸은 `src/libs` 재사용 가능함
- DB 연결 설정은 `src/database`에서 확인함
- 환경 변수는 `.env` 직접 의존보다 `@nestjs/config` 흐름 우선 확인함
- 민감 값은 커밋하지 않음
- 필요 시 `.env.example`만 갱신함

---

## 명령어

루트에서 실행 가능함

```bash
pnpm --filter backend start:dev
pnpm --filter backend build
pnpm --filter backend lint
pnpm --filter backend test
pnpm --filter backend test:e2e
```

`backend/` 폴더 안에서 실행 가능함

```bash
pnpm start:dev
pnpm build
pnpm lint
pnpm test
pnpm test:e2e
```

---

## 테스트 기준

- service 로직 변경 시 단위 테스트 확인함
- controller, pipe, DB 연동 흐름 변경 시 e2e 테스트 확인함
- DB 스키마나 환경 변수 변경 시 README 또는 `.env.example` 갱신 여부 확인함
- 최소 확인 명령은 `pnpm --filter backend lint`와 관련 테스트로 판단함

---

## 하네스 주의사항

- Windows/PowerShell 환경 기준으로 명령 실행 확인함
- 장시간 실행 서버는 필요한 경우에만 실행함
- 포트 충돌 시 기존 프로세스 확인함
- `dist/`, `node_modules/`, `.turbo/` 산출물은 직접 수정하지 않음
- 자동 수정 lint 실행 후 diff 확인함
