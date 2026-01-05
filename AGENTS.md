# Developer Guidelines & Agent Configuration

This document serves as the primary reference for AI agents and developers working on this repository. It outlines the project's architecture, build commands, code style, and best practices.

## 1. Project Overview

- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS 4
- **Language**: JavaScript (ESM)
- **Package Manager**: npm

## 2. Environment & Commands

### Build & Development
- **Start Development Server**: 
  ```bash
  npm run dev
  ```
- **Build for Production**:
  ```bash
  npm run build
  ```
- **Preview Production Build**:
  ```bash
  npm run preview
  ```

### Linting & Quality
- **Run Linter**:
  ```bash
  npm run lint
  ```
  *Note: Uses ESLint 9 with Flat Config.*

### Testing
*Currently, no test runner (like Vitest or Jest) is configured in `package.json`.*
- **Action for Agents**: If asked to write tests, first verify if a test runner has been added. If not, suggest adding `vitest` as it integrates best with Vite.
- **Future Command**:
  ```bash
  npm run test
  ```

## 3. Code Style & Conventions

### Formatting
- **Indentation**: 2 spaces.
- **Quotes**: Prefer **single quotes** (`'`) for JS/JSX and imports. Use double quotes (`"`) for JSX attributes to match HTML conventions.
- **Semicolons**: Avoid semicolons where possible (asi), or stick to the existing mixed style if modifying a file. Consistently apply one style per file.
- **Trailing Commas**: ES5 trailing commas in objects and arrays (multiline).

### Naming Conventions
- **Files**:
  - Components: `PascalCase.jsx` (e.g., `Button.jsx`, `Header.jsx`)
  - Utilities/Hooks: `camelCase.js` (e.g., `useAuth.js`, `formatDate.js`)
  - Config: `kebab-case` or specific standard (e.g., `vite.config.js`)
- **Variables & Functions**: `camelCase`.
- **Components**: `PascalCase`.
- **Constants**: `UPPER_SNAKE_CASE` for global constants.

### React Components
- **Type**: Use Functional Components with Hooks.
  ```jsx
  // Good
  function MyComponent({ title }) {
    return <div className="p-4">{title}</div>
  }
  ```
- **Exports**: Use `export default` for main component files.
  ```jsx
  export default MyComponent
  ```
- **Props**: Destructure props in the function signature.
- **JSX Extension**: Always use `.jsx` for files containing JSX.

### Styling (Tailwind CSS)
- Use utility classes directly in `className`.
- Group related classes (layout, spacing, typography, colors).
- Avoid `@apply` in CSS files unless creating a reusable abstraction that cannot be a component.
- **Dark Mode**: Use the `dark:` prefix for dark mode styles (e.g., `text-blue-600 dark:text-blue-400`).

### Imports
- Group imports:
  1. External libraries (React, etc.)
  2. Internal components
  3. Styles / Assets
- Use relative paths for internal imports:
  ```javascript
  import Card from './components/Card'
  ```

## 4. Development Rules for Agents

### File Operations
- **Always read before write**: Read the file content to understand the context, indentation, and existing style before editing.
- **Verify paths**: Ensure directories exist before creating files.
- **Atomic changes**: Keep changes focused on the user's request.

### Error Handling
- Use `try/catch` blocks for async operations (API calls).
- Handle loading and error states in UI components.
- Log errors to console in development, but avoid excessive logging in production code.

### React Best Practices
- **Keys**: Always provide a unique `key` prop when rendering lists. Avoid using array index if the list can be reordered.
- **Hooks**: Follow the Rules of Hooks (top level only).
- **State**: Keep state as local as possible. Lift state up only when necessary.

### Refactoring & Maintenance
- When refactoring, ensure existing functionality is preserved.
- Remove unused variables and imports (the linter will flag these).
- If adding a new dependency, verify it fits the tech stack (e.g., prefer headless UI + Tailwind over styled-components).

## 5. Repository Structure
```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   ├── App.css          # Global styles / Tailwind directives
│   └── index.css        # Base styles
├── .gitignore
├── eslint.config.js     # Linter configuration
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 6. Git Commit Protocol
- **Format**: `type(scope): description`
- **Types**:
  - `feat`: New feature
  - `fix`: Bug fix
  - `docs`: Documentation only
  - `style`: Changes that do not affect meaning (spaces, formatting)
  - `refactor`: Code change that neither fixes a bug nor adds a feature
  - `chore`: Build process or auxiliary tool changes

## 7. Configuration Details
- **Vite**: Configured in `vite.config.js`. Includes `@vitejs/plugin-react` and `@tailwindcss/vite`.
- **Tailwind**: Configured via Vite plugin. CSS entry point in `src/App.css` or `src/index.css`.
- **ESLint**: Flat config system (`eslint.config.js`).

## 8. Specific Task Instructions
- **Adding Components**: Create a new file in `src/components/`, define the function, export it, and import it where needed.
- **Modifying UI**: Adjust Tailwind classes. Check `dark:` variants for theme consistency.
- **Debugging**: Check the console for React warnings or errors. Ensure imports are correct.

---
*This file is auto-generated and should be updated as the project evolves.*
