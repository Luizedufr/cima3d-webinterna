# cima3d-webinterna

CIMA3D student association's internal web. UI is built on the wedges-cima3d design system in `design-system/project/` (start with its `README.md`).

## Git workflow: one worktree per task

- Never commit directly to `main`. Each task runs in its own git worktree on its own branch, created under `.claude/worktrees/` (gitignored).
- Branches are named `claude/<short-task-name>`.
- Commit on the task branch, push it to `origin`, and open a pull request into `main`. Merge only through the PR.
- Keep a worktree's branch current with `main` by merging `main` into it, not by rebasing a pushed branch.
- When the PR is merged, remove the worktree and delete its branch.

Manual equivalent outside the app:

```bash
git worktree add .claude/worktrees/<name> -b claude/<name> main
```
