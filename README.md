# Turborepo 디자인 시스템

turborepo, storybook, shadcn, tailwindcss로 구성된 디자인 시스템 보일러 플레이트입니다.

## Installation

```sh
nvm use
corepack enable pnpm
pnpm install
```

```sh
pnpm run dev
```

## Packages

```txt
`@app/docs`: Next.js app
`@app/web`: Next.js app
`@app/storybook`: storybook app
`@repo/ui-shadcn : shadcn UI
`@repo/config-eslint` : eslint configuration
`@repo/config-tailwind` : tailwind configuration
`@repo/config-ts` : typescript configuration
```

## Utilities

- Typescript
- Tailwindcss
- Eslint
- husky
- commitlint
- syncpack

## Customization

`scripts/**/*` 스크립트 파일을 수정합니다.
