# saqui_ashley_ui_garden - Assignment 13

## Assignment Overview

This project builds on Assignment 12 by adding automated code quality checks to the React component library. The project implements:

- **Husky**: Pre-commit hooks that block commits if code fails quality checks
- **Prettier**: Automatic code formatting
- **ESLint**: Code linting to catch errors and enforce best practices
- **Jest**: Unit tests for all components
- **GitHub Actions**: CI/CD pipeline that runs the same checks on every push
- **Docker**: Production container running on port 8018

## What this is:

This is a React component library with automatic code quality checks. Before you can save code, the computer checks that your code is:

- Properly formatted (Prettier)
- Follows good coding rules (ESLint)
- Passes all tests (Jest)

## How to Get Started

### 1. Install Everything

Open your terminal and run:

```bash
npm install
```

This installs all dependencies including Husky, ESLint, Prettier, and Jest.

### 2. Verify Husky is Set Up

Make sure Husky is working:

```bash
npx husky install
```

Verify the file `.husky/pre-commit` exists and contains:

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

---

## Running the App

### Start the App (Development)

```bash
npm start
```

Opens at `http://localhost:3000`

### View Components (Storybook)

```bash
npm run storybook
```

Opens at `http://127.0.0.1:8083`

### Build for Production

```bash
npm run build
```

## Code Quality Checks

### Run Prettier (Code Formatting)

Check formatting:

```bash
npm run prettier:check
```

Auto-fix formatting:

```bash
npx prettier --write src/
```

### Run ESLint (Code Rules)

Check code:

```bash
npm run lint
```

Auto-fix errors:

```bash
npx eslint src/ --fix
```

### Run Tests

```bash
npm test
```

All tests must pass for commits to succeed.

## How Husky Pre-Commit Hooks Work

Before you can commit (save) code, Husky automatically checks everything:

```bash
git add .
git commit -m "Your message here"
```

Husky will:

1. Check formatting with Prettier
2. Check code rules with ESLint
3. Run tests with Jest

**If any check fails, your commit is blocked.** You must fix the errors and try again.

### Skip Checks (Only in Emergency)

```bash
git commit --no-verify -m "Your message"
```

## GitHub Actions CI/CD Pipeline

GitHub Actions provides a second layer of enforcement. It automatically runs the same checks when you push to GitHub.

### Workflow File

The workflow is defined in `.github/workflows/ci.yml` and runs:

1. Prettier check
2. ESLint check
3. Jest tests
4. Production build

### What Happens

When you push to GitHub:

```bash
git push origin main
```

### View Results

Go to your GitHub repo → **Actions** tab → Click the workflow run to see details.

## Docker Setup

### About the Docker Container

- **Container Name**: `saqui_ashley_coding_assignment13`
- **Working Directory**: `/app/saqui_ashley_ui_garden_build_checks`
- **Port**: 8018
- **Content**: Production build of React component library

### Build Docker Image

```bash
docker build -t saqui_ashley_coding_assignment13 .
```

### Run Docker Container

```bash
docker run -p 8018:8018 saqui_ashley_coding_assignment13
```

### Access the App

Open your browser and go to:

```
http://localhost:8018
or
http://127.0.0.1:8018
```

## Dockerfile Details

The Dockerfile:

1. Uses Node 18 to build the React app
2. Runs Prettier, ESLint, and Jest checks (non-blocking)
3. Creates a production build
4. Serves the app with Nginx on port 8018
5. Uses the working directory: `/app/saqui_ashley_ui_garden_build_checks`
 
