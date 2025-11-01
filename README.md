# saqui_ashley_ui_garden - Assignment 13

## What this is:

This is a React component library with automatic code quality checks. Before you can save code, the computer checks that your code is:
- Properly formatted (Prettier)
- Follows good coding rules (ESLint)
- Passes all tests (Jest)

---

## How to Get Started

### 1. Install Everything
Open your terminal and run:
```bash
npm install
```

### 2. Set Up Husky (Code Checking Before Commits)
Husky stops you from saving bad code. Your code is checked every time you commit.

Make sure the file `.husky/pre-commit` exists and has this inside:
```
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

---

## Code Quality Checks

### Run Prettier (Code Formatting)
```bash
npm run prettier:check
```

Auto-fix formatting:
```bash
npx prettier --write src/
```

### Run ESLint (Code Rules)
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

---

## Docker (Run on Port 8018)

### Build Docker Image
```bash
docker build -t saqui_ashley_coding_assignment13 .
```

### Run Docker Container
```bash
docker run -p 8018:3000 saqui_ashley_coding_assignment13
```

Open `http://localhost:8018` in your browser.

---

## How to Commit Code

Before you can commit (save) code, Husky automatically checks everything:

```bash
git add .
git commit -m "Your message here"
```

Husky will:
1. Check formatting with Prettier
2. Check code rules with ESLint
3. Run tests with Jest

If something fails, your commit is blocked. Fix the errors and try again.

### Skip Checks (Only if needed)
```bash
git commit --no-verify -m "Your message"
```
**Warning:** GitHub Actions will still check your code!

---

## GitHub Actions (Automatic Checks on GitHub)

GitHub Actions checks your code automatically when you push to GitHub. Same checks as Husky:
- Prettier
- ESLint
- Tests

If checks fail, your build fails. You'll see red X on your push.

If checks pass, you'll see green checkmark.

---

## For troubleshooting

**Husky not running on commit?**
```bash
npx husky install
```

**Prettier/ESLint errors blocking commit?**
```bash
npx prettier --write src/
npx eslint src/ --fix
```

**Tests failing?**
```bash
npm test
``` 
