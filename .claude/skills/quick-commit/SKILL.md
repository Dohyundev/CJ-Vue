---
name: "quick-commit"
description: "최대한 빠르게 커밋하거나 푸시하는 스킬"
model: haiku
effort: low
---

터미널에서 다음 명령으로 커밋하거나 푸시해 줘!
사용자가 푸시하지 말라고 하긴 전에는 푸시까지 진행해 줘!

```bash
git add .
git commit -m "YYMMDD-hh:mm" # 현재 시간으로 커밋 메시지 작성!
git push origin main
```