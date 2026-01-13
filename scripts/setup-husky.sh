#!/usr/bin/env sh
set -e
if [ -x "$(command -v pnpm)" ]; then
  pnpm dlx husky install
  pnpm dlx husky add .husky/pre-commit "pnpm -s lint-staged"
fi
