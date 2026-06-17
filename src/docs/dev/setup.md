# Frontend Project Setup Guide (2026)

This document describes how the project is created from scratch. Each stage builds upon the previous one and establishes a production-ready frontend architecture.

---

# Prerequisites

Before creating the project, ensure the following are installed:

- Node.js **20+**
- Bun

## Install Bun

```bash
curl -fsSL https://bun.sh/install | bash

npm install -g bun

```

Verify installation:

```bash
bun --version
```

---

# Stage 1 — Project Initialization

## Goal

Create a clean Next.js application using the latest App Router.

## Create Project

```bash
bunx create-next-app@latest create-frontend-2026
```

## Install Dependencies

```bash
cd create-frontend-2026

bun install
```

## Run Development Server

```bash
bun run dev
```

At the end of this stage the project should:

- Use the latest Next.js
- Use TypeScript
- Use the App Router
- Run successfully in development

---

# Stage 2 — Professional Development Environment

## Goal

Configure the project with an enterprise-grade developer experience.

This stage establishes:

- ESLint configuration
- Prettier formatting
- Husky Git hooks
- lint-staged
- Commit standards
- Project conventions

---

## Step 2.1 — Install Development Dependencies

```bash
bun add -d \
prettier \
eslint-config-prettier \
lint-staged \
husky
```

---

## Step 2.2 — Initialize Husky

```bash
bunx husky init
```

---

## Step 2.3 — Configure lint-staged

Initialize lint-staged and configure it to automatically lint and format staged files before every commit.

```bash
bunx lint-staged
```

---

## Step 2.4 — Configure Commit Standards

Establish a consistent commit message convention for the project.

Example:

```
feat:
fix:
docs:
style:
refactor:
perf:
test:
build:
ci:
chore:
revert:
```

---

## Step 2.5 — Configure ESLint & Prettier

Create project-wide formatting and linting rules that:

- enforce consistent code style
- remove formatting conflicts
- support TypeScript
- support React
- support Next.js

---

## Stage 2 Deliverables

At the completion of Stage 2, the project includes:

- ESLint
- Prettier
- Husky
- lint-staged
- Commit conventions
- Consistent formatting
- Enterprise development workflow

---

# Stage 3 — Core Project Architecture

## Goal

Build the foundational architecture that every feature will use.

This stage focuses on creating a scalable, maintainable project structure before implementing application features.

---

## What We Will Build

### 1. Enterprise Folder Architecture

Create a modular folder structure that scales for large applications.

---

### 2. Feature-Based Module System

Organize business logic into independent feature modules.

Examples:

- Authentication
- Dashboard
- Settings
- Profile

---

### 3. Layout System

Support multiple application layouts.

Examples:

- Dashboard Layout
- Authentication Layout
- Marketing Layout

---

### 4. Navigation System

Create a reusable navigation architecture supporting:

- Desktop navigation
- Mobile navigation
- Sidebar navigation
- Breadcrumbs
- Route configuration

---

### 5. Shared Component Library

Build reusable UI components shared across the application.

Examples:

- Button
- Card
- Modal
- Input
- Dialog
- Avatar
- Dropdown
- Tabs

---

### 6. Configuration System

Centralize application configuration.

Examples:

- Environment variables
- API configuration
- Theme configuration
- Navigation configuration
- Typography
- Constants

---

# Runtime Dependencies

Install the core runtime packages.

```bash
bun add \
lucide-react \
clsx \
axios \
next-themes
```

These packages provide:

| Package      | Purpose                 |
| ------------ | ----------------------- |
| lucide-react | Icons                   |
| clsx         | Conditional class names |
| axios        | HTTP client             |
| next-themes  | Theme management        |

---

# Development Dependencies

Additional development tools will be installed as the architecture evolves.

```bash
bun add -D
```

Development dependencies may include:

- TypeScript utilities
- Testing libraries
- Storybook
- Playwright
- Vitest
- Bundle analyzers
- Build tooling

---

# Roadmap

## Stage 1

- Initialize Next.js project
- Verify development environment

---

## Stage 2

- Configure developer tooling
- Configure formatting
- Configure linting
- Configure Git hooks
- Configure commit workflow

---

## Stage 3

- Build enterprise architecture
- Build layouts
- Build navigation
- Build shared components
- Build configuration system

---

# Expected Outcome

After completing these stages, the project will provide:

- Production-ready Next.js foundation
- Enterprise folder architecture
- Scalable feature modules
- Shared component library
- Reusable layout system
- Navigation framework
- Configuration management
- Consistent developer workflow
- Modern tooling powered by Bun
