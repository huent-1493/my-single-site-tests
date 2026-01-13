# my-app-tests

Playwright tests for my-app with role-based login fixtures.

Setup

1. Install dependencies:

```bash
pnpm install
```

2. Provide credentials via environment variables or rely on the defaults in the fixtures:

- `ADMIN_EMAIL` (example: admin@example.com)
- `ADMIN_PASSWORD` (example: admin123)
- `USER_EMAIL` (example: user@example.com)
- `USER_PASSWORD` (example: user123)

Run tests

```bash
pnpm test
```

Open report

```bash
pnpm run show-report
```
