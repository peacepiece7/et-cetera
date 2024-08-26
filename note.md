# note

## installation

- turborepo에서 yarn은 pnp 모드를 지원하지 않아서 pnpm으로 선택
- lerna는 yarn, turborepo는 pnpm을 사용하는 느낌 같음

`pnpm dlx create-turbo@latest`

## overview

자세한 내용은 터보 레포에 대해서 정리한 포스팅 [crafting turborepo 요약](222.121.79.140/posts/turborepo/2) 참고

## pnpm version

```bash
corepack enable
npm install -g pnpm
pnpm -v
```

package.json에 있는 packageManager 버전을 쓰면 된다.
packageManager 속성이 있으면 설치된 버전에 [상관없이 명시되어있는 버전으로 변경된다.](https://nodejs.org/docs/latest/api/corepack.html##how-does-corepack-interact-with-npm)

```json
{ "packageManager": "pnpm@8.15.6" }
```

## node version

```sh
mkdir ./nvmrc
echo "v20.12.1" > .nvmrc
```

window는 (.bashrc에 alias 넣어두자)

```bash
nvm use $(cat .nvmrc)
```

unix 계열은

```bash
nvm use
```

## with story-book

[turbo repo storybook guide](https://turbo.build/repo/docs/guides/tools/storybook)
[design system git](https://github.com/vercel/turbo/tree/main/examples/design-system)

```bash
mkdir apps/storybook
cd apps/storybook
pnpm dlx storybook@latest init
```

=> react + vite로 생성함

설치하고 [온보딩 에드온](https://github.com/storybookjs/addon-onboarding/blob/main/README.md) 제거

@repo/ui 패키지를 storybook에 추가하기

```bash
pnpm install @repo/ui --filter=storybook
pnpm install @repo/config-eslint --save-dev --filter=storybook
pnpm install @repo/config-ts --save-dev --filter=storybook
```

app/storybook/package.json의 dependencies에 직접 추가해줘도 됨 똑같음

(대신 추가하고 `pnpm install` 꼭 해주기!)

```json
{
  "dependencies": {
    "@repo/ui": "workspace:^",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

## with rollup

[with rollup git](https://github.com/vercel/turbo/tree/main/examples/with-rollup)

## with tailwind

[with tailwind](https://github.com/vercel/turbo/tree/main/examples/with-tailwind)

## typescript alias

패키지를 제공하는 쪽에서 빌드해서 컴포넌트를 제공해야하고

빌드하지 않고 쓸 경우 패키지를 사용하는 쪽에서 alias 설정을 해줘야함

[turbo discussion](https://github.com/vercel/turbo/discussions/620)

## commitlint

[🎨 commitlint](https://commitlint.js.org/)

이렇게 설치

```sh
pnpm install --save-dev -w @commitlint/cli @commitlint/config-conventional
```

`@commitlint/config-conventional` : [angular commit message convention](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum)을 사용한다.
(`feat: foo` `fix: bar` 이런 느낌)

그리고 이렇게 설정했다.

```js
// commitlint.config.mjs
import { GIT_COMMIT_CONFIGURATION } from './scripts/generate_commit_msg_template.mjs';

const Configuration = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 72],
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 80],
  },
};

export default Configuration;
```

한글을 사용하고 싶다면, 플러그인을 직접 만들자.

```js
const Configuration = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'never', ['upper-case', 'pascal-case', 'start-case']],
    'header-max-length': [2, 'always', 72],
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 225],
    'footer-leading-blank': [2, 'always'],
    'type-enum-kor': [2, 'always', ['기능', '버그', '개선']],
    'type-empty-kor': [2, 'always'],
    'type-enum': [0, 'always'], // 영어만 입력 받는거 무시
    'type-empty': [0, 'always'], // 한글 입력시 empty 에러 무시
    'subject-empty': [0, 'always'], // 한글 입력시 empty 에러 무시
  },
  plugins: [{ rules: { 'type-enum-kor': typeEnumWithKor, 'type-empty-kor': typeEmptyWithKor } }],
  // prompt: PROMPT_CONFIGURATION, // 이거는 대화형으로 커밋 메시지를 작성할 때 사용하는 옵션인데 윈도우에서 작동에 문제가 있음
};

export default Configuration;

function typeEnumWithKor(value) {
  const { header, always, ...rest } = value;
  const type = header.split(':')[0].split('(')[0];
  const keys = ['기능', '버그', '개선'];
  return [keys.some((t) => t === type), '다음 중 하나를 선택해주세요: ' + keys.join(', ')];
}

function typeEmptyWithKor(value) {
  const { header, always, ...rest } = value;
  const regex = /^[가-힣a-zA-Z]+\([가-힣a-zA-Z0-9]*\)!?:\s[^\s]+.*|^[가-힣a-zA-Z]+!?:\s[^\s]+.*$/;

  const isMatched = regex.test(header);
  return [isMatched, '머릿말을 양식에 맞게 작성해주세요 (예: "feat(comments): message", "fix(bug): message" )'];
}
```

## 대화형으로 구성하기

대화형 구성은 unix 계열에서만 하는게 좋다.

window 환경은 건강에 좋지 않다.

[commitlint prompt](https://commitlint.js.org/reference/prompt.html#prompt)여기를 참고

cz-customizable을 사용해서 구성할 계획이면 다음 링크를 참고

[commitlint/issues/2684](https://github.com/conventional-changelog/commitlint/issues/2684)
[blog cz-customizable](https://velog.io/@restarea/cz-customizable)

[pre-commit을 Inquirer로 hooking](https://github.com/SBoudrias/Inquirer.js?tab=readme-ov-file#using-as-pre-commitgit-hooks-or-scripts)하여 대화형으로 구성하는 방법도 있다.

## git commit template 설정

`git config commit.template <file>`로 설정하면 된다.

```js
// script.js
const GIT_COMMIT_TEMPLATE = `

# NOTE:
# 다음 형태로 커밋 메시지를 작성해주세요.
# <타입>[적용 범위(선택 사항)]: <설명>
#
#[본문(선택 사항)]
#
#[꼬리말(선택 사항)]
#

# EXAMPLE:
# fix(libraryName) : 사용하지 않는 구식 라이브러리 제거
#
# 저녁 매뉴 추천 받습니다.
# 주말엔 놀고 싶어요.
#
# - nodejs 버전이 올라가면서 사용하지 않는 라이브러리를 제거
# - newLibraryName으로 통합
# - libraryName를 사용중인 경우 newLibraryName으로 변경 필요
#
# Resolves: #123, #245
# Closes issue by #123
# Pull request: #123
# Refs: 676104e, a215868

# REFERENCE:
# https://github.com/angular/angular/blob/68a6a07/CONTRIBUTING.md#commit
# https://www.conventionalcommits.org/ko/v1.0.0/

# HEADER_TYPE:
${Object.keys(GIT_COMMIT_CONFIGURATION['type-enum-kor'])
  .map((key) => {
    return `# ${key} : ${GIT_COMMIT_CONFIGURATION['type-enum-kor'][key].description}`;
  })
  .join('\n')}

# REMEMBER_ME:
# HEADER TYPE은 영어로 작성해주세요.
# 한글을 지향합니다.
# 제목 끝에 마침표 금지
# 본문는 "무엇을", "왜"에 대한 내용을 작성해주세요.
`;

fs.writeFileSync('./git_commit_template', GIT_COMMIT_TEMPLATE);
```

package.json에 prepare를 실행할 떄 git commit template이 돌아가도록 설정하자

```json
{
  "scripts": {
    "prepare": "husky & node ./script.js & git config commit.template ./git_commit_template"
  }
}
```

## reference

turborepo + storybook + tailwindcss + typescript

[design system git](https://github.com/arevalolance/design-system-template)

[turbo repo design system](https://github.com/anthonyhastings/turborepo-design-system)

```sh
for /d /r %%d in (node_modules) do @if exist "%d" rd /s /q "%d"
for /d /r %d in (node_modules) do @if exist "%d\turbo.exe" (echo Skipping "%d" because it contains turbo.exe) else (rd /s /q "%d")
```

```sh
# turbo.exe 권한 문제 생기면
chmod -R 755 /your-project/node_modules
#
find ./ -path "*/node_modules" -type d -prune -exec rm -rf '{}' +
#
chmod +x scripts/clean.sh
```

## git ci

브랜치

```txt
main branch = production branch
feature branch = feat/<feature-name>
bugfix branch = fix/<bug-name>
```

main 브랜치 push 또는 pr 시 배포 전략

- pre commit hook 동일하게 실행

```txt
lint, type-check, test, dependency-check...
```

- packages/\* 공통 기능 빌드

```sh
pnpm build --filter @repo/**
```

- 특정 태그와 매칭되는 apps/\* 애플리케이션 빌드

```yml
if github
```
