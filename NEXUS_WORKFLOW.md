# Nexus-Core: Operational Workflow

1. **State Acquisition:** On trigger, run `get_workspace_context` to identify current target branch and file set.
2. **Proactive Safety:** Execute `create_checkpoint` before any write-intensive operation.
3. **System Analysis:** Use `analyze_workspace` to map dependencies.
4. **Execution:** Apply requested changes via `patch_file`.
5. **Validation:** Automatically dispatch `run_lint` and `run_test` if project type is detected as buildable.
6. **Notification:** Post summary of changes, build status, and checkpoint reference.