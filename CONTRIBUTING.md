> **This document defines how we contribute to the Military Companion repository.**

---

# Purpose

This guide is not only for future contributors—it is also for future us.

As Military Companion grows, consistent development practices will help us maintain code quality, collaborate efficiently, and work effectively with AI coding assistants.

---

# Branch Naming

Create branches using the following conventions:

### New Features

```text
feature/journey-dashboard
feature/leave-planner
feature/benefits-hub
```

### Bug Fixes

```text
fix/leave-calculation
fix/login-error
```

### Documentation

```text
docs/update-roadmap
docs/user-research
```

### Refactoring

```text
refactor/authentication
refactor/navigation
```

---

# Commit Message Convention

Use clear, descriptive commit messages.

Examples:

```text
feat: add military journey dashboard

fix: correct leave calculation logic

docs: update product roadmap

refactor: simplify authentication flow

style: improve dashboard spacing
```

---

# Pull Requests

Before opening a pull request:

* Ensure the feature aligns with the project documentation.
* Verify that existing functionality is not broken.
* Keep pull requests focused on a single objective.
* Update documentation when necessary.
* Include screenshots for UI changes when applicable.

---

# Testing

Before merging changes:

* Verify the application builds successfully.
* Test affected functionality.
* Check for regressions.
* Confirm that user flows still work as expected.

---

# Working with AI Coding Assistants

Before asking an AI assistant to generate code, provide sufficient project context.

At a minimum, instruct the AI to review:

* `docs/00_PROJECT.md`
* `docs/01_MISSION.md`
* `docs/03_PRODUCT_PHILOSOPHY.md`
* `docs/09_AI_CONTEXT.md`

These documents serve as the source of truth for the project.

AI should assist development—not define the product.

---

# Documentation First

Whenever a significant feature is added or changed:

1. Update the relevant documentation.
2. Review whether the roadmap or backlog should change.
3. Record important architectural decisions when necessary.
4. Keep documentation synchronized with the codebase.

---

# Guiding Principle

We aim to build Military Companion with the same care and consistency that we expect from a long-term company—not just a side project.

Every contribution should make the product more maintainable, more trustworthy, and more valuable to soldiers.
