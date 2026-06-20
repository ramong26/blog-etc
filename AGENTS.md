# AGENTS.md

## 응답 규칙

- 기본 응답은 한국어로 작성함
- 설명은 간결하고 실무적으로 작성함
- 답변 마지막에 반드시 `RULE_CHECK` 문자열을 포함함

---

## 작업 진입 규칙

- 프론트엔드 작업은 `frontend/AGENTS.md`를 먼저 확인함
- 백엔드 작업은 `backend/AGENTS.md`를 먼저 확인함
- 역할별 에이전트 호출은 `.agents/agents.md`를 확인함
- 커밋, PR, 브랜치 규칙은 `.agents/git-pr-rules.md`를 확인함

---

## 하네스 흐름

- 모든 작업은 루트 `AGENTS.md` 확인 후 시작함
- 역할 호출이 있으면 `.agents/agents.md`에서 대응 문서를 확인함
- 작업 대상 폴더가 정해지면 해당 폴더의 `AGENTS.md`를 확인함
- 역할 문서와 폴더 문서가 충돌하면 폴더 문서를 우선함
- 작업 범위가 프론트와 백엔드를 모두 포함하면 `frontend/AGENTS.md`, `backend/AGENTS.md` 모두 확인함
- 커밋, PR, 브랜치 작업이 있으면 `.agents/git-pr-rules.md`를 추가 확인함

---

## 루트 구조

```text
.
├─ AGENTS.md
├─ .agents/
│  ├─ agents.md
│  ├─ backend-agent.md
│  ├─ design-agent.md
│  ├─ frontend-agent.md
│  ├─ fullstack-agent.md
│  ├─ git-pr-rules.md
│  └─ review-agent.md
├─ backend/
│  └─ AGENTS.md
├─ frontend/
│  └─ AGENTS.md
├─ package/
├─ package.json
├─ pnpm-workspace.yaml
└─ turbo.json
```

---

## 워크스페이스 환경

- 패키지 매니저는 `pnpm` 사용함
- 모노레포 실행은 `turbo` 기준으로 확인함
- 루트 명령 실행 가능함

```bash
pnpm dev
pnpm build
pnpm lint
pnpm test
```

---

## 하네스 주의사항

- Windows/PowerShell 환경 기준으로 명령과 경로 확인함
- 작업 전 관련 하위 `AGENTS.md` 확인함
- `node_modules/`, `.turbo/`, 빌드 산출물은 직접 수정하지 않음
- 자동 수정 명령 실행 후 diff 확인함
