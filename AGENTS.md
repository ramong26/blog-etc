# AGENTS.md

## 응답 규칙

- 기본 응답은 한국어로 작성함
- 설명은 간결하고 실무적으로 작성함
- 답변 마지막에 반드시 `RULE_CHECK` 문자열을 포함함

---

## 작업 진입 규칙

- 프론트엔드 작업 시: `frontend/AGENTS.md` 반드시 먼저 읽음
- 백엔드 작업 시: `backend/AGENTS.md` 반드시 먼저 읽음
- 역할별 에이전트 호출 시: `.codex/agents/*.toml` 및 `.agents/agents.md` 반드시 먼저 읽음
- Git 작업 시 (커밋/PR/브랜치): `.agents/git-pr-rules.md` 반드시 먼저 읽음

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
│  ├─ review-agent.md
│  └─ skills/
│     └─ react-best-practices/
│        ├─ SKILL.md
│        └─ AGENTS.md
├─ .codex/
│  └─ agents/
│     ├─ backend.toml
│     ├─ designer.toml
│     ├─ frontend.toml
│     ├─ fullstack.toml
│     └─ reviewer.toml
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
