import fs from 'fs';

export const GIT_COMMIT_CONFIGURATION = {
  'header-max-length': 72,
  'body-max-line-length': 254,
  'type-enum-kor': {
    기능: {
      title: 'Features',
      description: '새로운 기능을 추가했을 때 사용합니다. (예 : useMoblie hook추가, 댓글 기능 추가)',
    },
    기타: {
      title: 'Chore',
      description: '빌드 업무, 패키지 매니저 설정 등과 같은 기타 작업을 수행했을 때 사용합니다.',
    },
    스타일: {
      title: 'Styles',
      description: '코드의 의미에 영향을 주지 않는 변경사항 (예: 공백, 세미콜론 수정, 주석 제거)',
    },
    최적화: {
      title: 'Code Refactoring',
      description: '코드 리팩토링을 했을 때 사용합니다. (예 : 중복 코드 제거, 변수명 변경)',
    },
    수정: {
      title: 'Bug Fixes',
      description: '오류, 버그, 오타 등 수정했을 경우 사용합니다.',
    },
    문서: {
      title: 'Documentation',
      description: '문서를 수정했을 때 사용합니다. (예 : README.md 수정, 주석 추가)',
    },
    테스트: {
      title: 'Tests',
      description: '테스트 코드를 추가, 수정했을 때 사용합니다.',
    },
    리버트: {
      title: 'Revert',
      description: '이전 커밋을 되돌리는 작업을 했을 때 사용합니다.',
    },
    성능: {
      title: 'Performance Improvements',
      description: '성능을 개선했을 때 사용합니다. (예 : 로딩속도 개선, 메모리 사용량 감소)',
    },
  },
  'type-enum-en': {
    feat: {
      description: 'A new feature',
      title: 'Features',
      // emoji: '✨',
    },
    fix: {
      description: 'A bug fix',
      title: 'Bug Fixes',
      // emoji: '🐛',
    },
    docs: {
      description: 'Documentation only changes',
      title: 'Documentation',
      // emoji: '📚',
    },
    style: {
      description:
        'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
      title: 'Styles',
      // emoji: '💎',
    },
    refactor: {
      description: 'A code change that neither fixes a bug nor adds a feature',
      title: 'Code Refactoring',
      // emoji: '📦',
    },
    perf: {
      description: 'A code change that improves performance',
      title: 'Performance Improvements',
      // emoji: '🚀',
    },
    test: {
      description: 'Adding missing tests or correcting existing tests',
      title: 'Tests',
      // emoji: '🚨',
    },
    build: {
      description:
        'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
      title: 'Builds',
      // emoji: '🛠',
    },
    ci: {
      description:
        'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
      title: 'Continuous Integrations',
      // emoji: '⚙️',
    },
    chore: {
      description: "Other changes that don't modify src or test files",
      title: 'Chores',
      // emoji: '♻️',
    },
    revert: {
      description: 'Reverts a previous commit',
      title: 'Reverts',
      // emoji: '🗑',
    },
  },
};

export const PROMPT_CONFIGURATION = {
  settings: {},
  messages: {
    skip: ':skip',
    max: 'upper %d chars',
    min: '%d chars at least',
    emptyWarning: 'can not be empty',
    upperLimitWarning: 'over limit',
    lowerLimitWarning: 'below limit',
  },
  questions: {
    type: {
      description: '커밋의 유형을 선택해주세요. (필수)\n',
      enum: GIT_COMMIT_CONFIGURATION['type-enum-kor'],
    },
    scope: {
      description: 'What is the scope of this change (e.g. component or file name)',
    },
    subject: {
      description: '변경 사항에 대한 짧은 시제 설명을 작성해주세요. feat(AA01123FF<요기>): AA01123FF 화면 추가',
    },
    body: {
      description: 'Provide a longer description of the change',
    },
    isBreaking: {
      description: 'Are there any breaking changes?',
    },
    breakingBody: {
      description: 'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
    },
    breaking: {
      description: 'Describe the breaking changes',
    },
    isIssueAffected: {
      description: 'Does this change affect any open issues?',
    },
    issuesBody: {
      description:
        'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
    },
    issues: {
      description: 'Add issue references (e.g. "fix #123", "re #123".)',
    },
  },
};

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
# - newLibararyName으로 통합
# - libraryName를 사용중인 경우 newLibararyName으로 변경 필요
#
# Resolves: #123, #245
# Closes issue by #123
# Pull request: #123
# Refs: 676104e, a215868

# HEADER_TYPE:
${Object.keys(GIT_COMMIT_CONFIGURATION['type-enum-en'])
  .map((key) => {
    return `# ${key} : ${GIT_COMMIT_CONFIGURATION['type-enum-en'][key].description}`;
  })
  .join('\n')}

# REMEMBER_ME:
# HEADER TYPE은 영어로 작성해주세요.
# 한글을 지향합니다.
# 제목 끝에 마침표 금지
# 본문는 "무엇을", "왜"에 대한 내용을 작성해주세요.

# REFERENCE:
# https://github.com/angular/angular/blob/68a6a07/CONTRIBUTING.md#commit
# https://www.conventionalcommits.org/ko/v1.0.0/

# ROLE:
# https://commitlint.js.org/reference/rules.html
`;

fs.writeFileSync('./scripts/git_commit_template', GIT_COMMIT_TEMPLATE);
