# Stage 4 — Shadcn UI Configuration

## Goal

Configure Shadcn UI as the project's design system and integrate it with the existing enterprise folder architecture.

Unlike the default setup, this project centralizes shared utilities and customizes the Shadcn aliases to match the project's modular structure.

---

# Step 4.1 — Initialize Shadcn UI

Run the initialization command:

```bash
bunx --bun shadcn@latest init
```

Follow the prompts and select the appropriate configuration for your project.

After initialization, Shadcn will generate:

- `components.json`
- `components/ui/`
- `lib/utils.ts`

---

# Step 4.2 — Reorganize Generated Files

To maintain a clean enterprise architecture, move the generated utility file.

### Default

```text
lib/
└── utils.ts
```

### Project Structure

```text
packages/
└── utils/
    └── shadcn.ts
```

Rename:

```text
utils.ts
```

to

```text
shadcn.ts
```

This separates Shadcn utilities from other shared utility functions.

---

# Step 4.3 — Configure `components.json`

Update the aliases to match the project architecture.

```json
{
  "aliases": {
    "components": "@/components",
    "utils": "@/packages/utils/shadcn",
    "ui": "@/components/ui/shadcn",
    "lib": "@/packages",
    "hooks": "@/packages/hooks"
  }
}
```

### Alias Explanation

| Alias        | Purpose                             |
| ------------ | ----------------------------------- |
| `components` | Shared application components       |
| `ui`         | Shadcn UI components                |
| `utils`      | Shadcn utility helpers (`cn`, etc.) |
| `lib`        | Shared packages and utilities       |
| `hooks`      | Shared custom React hooks           |

---

# Step 4.4 — Install Components

Install Shadcn components as needed.

General syntax:

```bash
bunx --bun shadcn@latest add <component-name>
```

Example:

```bash
bunx --bun shadcn@latest add button
```

Multiple components:

```bash
bunx --bun shadcn@latest add button card dialog input
```

---

# Project Convention

All generated Shadcn components should be placed in:

```text
components/
└── ui/
    └── shadcn/
```

This keeps third-party UI components isolated from custom application components.

Example:

```text
components/
├── common/
├── forms/
├── layout/
├── navigation/
├── feedback/
└── ui/
    └── shadcn/
        ├── button.tsx
        ├── card.tsx
        ├── dialog.tsx
        ├── input.tsx
        └── ...
```

---

# Stage Deliverables

After completing this stage, the project will include:

- ✅ Shadcn UI initialized
- ✅ Enterprise-compatible folder structure
- ✅ Shared Shadcn utility file
- ✅ Customized import aliases
- ✅ Reusable UI component library
- ✅ Consistent component generation workflow

---

# Expected Outcome

At the end of this stage, all future Shadcn components will integrate seamlessly with the project's architecture, ensuring a scalable, maintainable, and consistent design system for the application.
