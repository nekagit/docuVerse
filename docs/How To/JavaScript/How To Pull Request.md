# Criterias for a Good Pull Request (PR) - The Perfect Commit

## Pull Request Guidelines

| Criteria | Description |
|----------|-------------|
| Keep PR Small | Small pull requests (~300 lines of diff) are much easier to review and more likely to get merged. Ensure the PR does only one thing; otherwise, split it. |
| Descriptive Titles | Use descriptive titles following the commit message style. |
| Testing | Test your changes thoroughly and describe your test plan in the PR description. |
| Branch | All pull requests should be opened against the main branch. |

## Semantic Commit Messages

| Type | Description |
|------|-------------|
| feat | A new API or behavior for the end user. |
| fix | A bug fix for the end user. |
| docs | A change to the website or other Markdown documents in our repo. |
| refactor | A change to production code that leads to no behavior difference, e.g., splitting files, renaming internal variables. |
| test | Adding missing tests or refactoring existing tests; no production code change. |
| chore | Upgrading dependencies, releasing new versions, or other maintenance tasks. |
| misc | Anything else that doesn't change production code and is not test or chore-related. |

## Pull Request Criteria

| Criteria | Description |
|----------|-------------|
| Implementation | A single, focused change. |
| Tests | Tests demonstrating the implementation works. |
| Documentation | Updated documentation reflecting the change. |
| Context | A link to an issue thread providing further context. |
| Time Spent | Time spent on working on that PR, important for billing purposes. |

## Test Plan

A good test plan includes:
- Exact commands you ran and their output.
- Screenshots or videos if the PR changes UI.
- Updates to documentation if APIs are changed.

We integrate tests into our CI system, but running local tests saves time for significant code changes. Types of tests include:
- Build and typecheck.
- Unit tests (using Jest).
- Dogfooding (updating website configuration).
- End-to-end (E2E) tests simulating distribution and installation of the code.

For more details, refer to: [The Perfect Commit Blog](https://simonwillison.net/2022/Oct/29/the-perfect-commit/)
