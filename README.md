# Render Node.js Starter

A complete starter project featuring a Node.js Express backend, static HTML/CSS/JS frontend, native Node.js tests, and a GitHub Actions CI/CD deployment pipeline to Render.

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run tests:
   ```bash
   npm test
   ```

3. Start server locally:
   ```bash
   npm start
   ```
   Visit `http://localhost:3000`.

## CI/CD Pipeline

- Runs unit tests on Node 20 and 22 across PRs and pushes.
- Automatically triggers a Render deploy on pushes to `main` via Render Deploy Hook.
