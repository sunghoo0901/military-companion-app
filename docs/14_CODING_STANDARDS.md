# Coding Standards

> **This document defines the coding conventions used throughout Military Companion.**

---

# Purpose

Consistent code is easier to understand, maintain, and extend.

These standards exist to improve readability and collaboration between developers and AI coding assistants.

---

# General Principles

* Write code for humans first.
* Prioritize readability over cleverness.
* Keep functions and components focused on a single responsibility.
* Avoid unnecessary complexity.
* Prefer explicit code over implicit behavior.

---

# Naming

## Variables

Use descriptive names.

Good:

```text
remainingLeaveDays
promotionEligibilityDate
```

Avoid:

```text
x
temp
data1
```

---

## Functions

Functions should describe what they do.

Examples:

```text
calculateLeaveBalance()
getUpcomingMilestones()
isEligibleForPromotion()
```

---

## Components

Use PascalCase.

Examples:

```text
JourneyCard
LeaveSummary
BenefitCard
```

---

## Files

Use consistent naming throughout the project.

Examples:

```text
journey_service
benefit_repository
leave_calculator
```

---

# Functions

Functions should:

* Have one responsibility.
* Be small whenever practical.
* Avoid excessive nesting.
* Return predictable results.

---

# Comments

Comment **why**, not **what**.

Good:

```text
// Promotions differ between branches, so branch-specific rules are applied here.
```

Avoid:

```text
// Increment i by one.
```

---

# Error Handling

Handle errors gracefully.

Users should receive clear, actionable messages whenever possible.

Avoid exposing technical implementation details.

---

# Logging

Log meaningful events.

Avoid excessive logging in production.

Sensitive user information should never be logged.

---

# Testing

Every new feature should include appropriate tests.

Focus on:

* Business logic
* Edge cases
* User flows
* Regression prevention

---

# Documentation

Significant architectural or behavioral changes should be reflected in the documentation.

Code and documentation should evolve together.

---

# AI Development

AI-generated code should always be reviewed before merging.

Developers remain responsible for:

* Correctness
* Security
* Performance
* Maintainability
* Product alignment

AI assists implementation but does not replace engineering judgment.

---

# Guiding Principle

Code should be easy to understand six months from now—even by someone seeing it for the first time.
