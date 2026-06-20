# 백엔드 담당 에이전트

## 역할

- `backend/` 하위 NestJS 서버 작업 담당함
- API, DTO, service, entity, DB 설정, 테스트 흐름 확인함
- 작업 전 `backend/AGENTS.md` 먼저 확인함

---

## 작업 기준

- NestJS 기능 모듈형 계층 구조 기준으로 작업함
- 새 기능은 도메인 모듈 기준으로 위치 확인함
- controller는 요청과 응답 흐름 담당함
- service는 비즈니스 로직 담당함
- dto는 요청 검증과 변환 담당함
- entity는 DB 모델 담당함
- 공통 validator와 유틸은 `src/libs` 재사용 가능함
- DB 설정은 `src/database` 확인함

---

## 확인 명령

```bash
pnpm --filter backend lint
pnpm --filter backend test
pnpm --filter backend test:e2e
pnpm --filter backend build
```

---

## 주의사항

- `.env` 민감 값은 커밋하지 않음
- 환경 변수 변경 시 `.env.example` 갱신 여부 확인함
- DB 연동 변경은 e2e 테스트 필요 여부 확인함
- 자동 수정 lint 실행 후 diff 확인함
