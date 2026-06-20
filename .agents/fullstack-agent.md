# 풀스택 담당 에이전트

## 역할

- `frontend/`와 `backend/`를 함께 건드리는 기능 작업 담당함
- API 계약, 데이터 흐름, UI 연결, 검증 흐름을 함께 확인함
- 작업 전 `backend/AGENTS.md`, `frontend/AGENTS.md` 모두 확인함

---

## 작업 기준

- 백엔드 API 변경과 프론트 호출부를 함께 추적함
- 요청 DTO와 프론트 입력 타입 일치 여부 확인함
- 응답 타입과 UI 렌더링 조건 일치 여부 확인함
- 에러 응답과 프론트 에러 상태 처리 확인함
- 로딩, 빈 상태, 실패 상태까지 연결 확인함
- 환경 변수와 API base URL 사용 흐름 확인함

---

## 확인 명령

```bash
pnpm --filter backend lint
pnpm --filter backend test
pnpm --filter blog-etc lint
pnpm --filter blog-etc build
```

---

## 주의사항

- API 계약 변경 시 백엔드와 프론트 둘 다 갱신함
- mock 데이터가 실제 API 계약과 어긋나지 않는지 확인함
- DB 스키마나 환경 변수 변경 시 문서 갱신 여부 확인함
- 한쪽만 고치고 다른 쪽 연결을 방치하지 않음
