# 역할별 에이전트 목록

실제 Codex 커스텀 에이전트 설정은 `.codex/agents/*.toml`에 있음.
이 문서는 호출 이름과 상세 역할 문서의 대응 관계를 설명하는 프로젝트 인덱스임.

## 호출 규칙

- 사용자가 아래 이름으로 요청하면 해당 에이전트 지침을 우선 확인함
- 여러 역할이 함께 필요하면 관련 에이전트 문서를 모두 확인함
- 역할 지침보다 루트 `AGENTS.md`, 하위 `AGENTS.md`, `.agents/git-pr-rules.md` 우선순위를 함께 확인함
- 최종 판단은 현재 코드와 요청 범위 기준으로 함

---

## 호출 이름

| 호출 이름            | 에이전트 설정                    | 상세 역할 문서                  | 사용 시점                                   |
| -------------------- | -------------------------------- | ------------------------------- | ------------------------------------------- |
| 리뷰 담당 에이전트   | `.codex/agents/reviewer.toml`     | `.agents/review-agent.md`       | 코드 리뷰, 변경 위험 확인, 테스트 누락 확인 |
| 백엔드 담당 에이전트 | `.codex/agents/backend.toml`      | `.agents/backend-agent.md`      | NestJS API, DB, 테스트, 서버 로직 작업      |
| 프론트엔드 에이전트  | `.codex/agents/frontend.toml`     | `.agents/frontend-agent.md`     | Next.js, React, FSD, UI 구현 작업           |
| 풀스택 담당 에이전트 | `.codex/agents/fullstack.toml`    | `.agents/fullstack-agent.md`    | 프론트와 백엔드를 함께 건드리는 기능 작업   |
| 디자인 담당 에이전트 | `.codex/agents/designer.toml`     | `.agents/design-agent.md`       | UI/UX, 레이아웃, 시각 품질, 접근성 확인     |

---

## 호출 예시

```text
리뷰 담당 에이전트로 이번 변경 리뷰해줘
백엔드 담당 에이전트 호출해서 posts API 추가해줘
프론트엔드 에이전트로 게시글 목록 UI 수정해줘
풀스택 담당 에이전트로 게시글 작성 기능 연결해줘
디자인 담당 에이전트로 모바일 레이아웃 봐줘
```
