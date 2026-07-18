# React3

React3 is a learning and demonstration project built with React, TypeScript, React Router, Material UI and Bootstrap. The application contains small examples focused on forms, callbacks, state management, routing and UI components.

## Project structure

The React application lives in [`my-react-app`](./my-react-app).

## Requirements

- Node.js 22
- npm 10+

## Local development

```bash
cd my-react-app
npm install
npm start
```

The development server is available at `http://localhost:3000`.

## Quality checks

```bash
cd my-react-app
npm test -- --watchAll=false
npm run build
npm audit --omit=dev --audit-level=high
```

## Continuous integration

GitHub Actions installs the declared dependency graph, runs the test suite, builds the production bundle and audits production dependencies for high or critical vulnerabilities.

## Notes

This repository is primarily an educational React project. Before production use, review the sample components, replace demo content, add broader automated tests and keep framework dependencies current.
