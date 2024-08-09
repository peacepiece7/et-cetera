import { GIT_COMMIT_CONFIGURATION, PROMPT_CONFIGURATION } from './scripts/git_commit_convention.mjs';

const Configuration = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'never', ['upper-case', 'pascal-case', 'start-case']],
    'header-max-length': [2, 'always', GIT_COMMIT_CONFIGURATION['header-max-length']],
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', GIT_COMMIT_CONFIGURATION['body-max-line-length']],
    'footer-leading-blank': [2, 'always'],
    // ...Object.keys(GIT_COMMIT_CONFIGURATION['type-enum-kor']),
    'type-enum-kor': [2, 'always', [...Object.keys(GIT_COMMIT_CONFIGURATION['type-enum-en'])]], //
    // 'type-empty-kor': [2, 'always'],
    // 'type-enum': [0, 'always'], // 영어만 입력 받는거 무시
    // 'type-empty': [0, 'always'], // 한글 입력시 empty 에러 무시
    // 'subject-empty': [0, 'always'], // 한글 입력시 empty 에러 무시
  },
  plugins: [{ rules: { 'type-enum-kor': typeEnumWithKor, 'type-empty-kor': typeEmptyWithKor } }],
  // prompt: PROMPT_CONFIGURATION, // 이거는 대화형으로 커밋 메시지를 작성할 때 사용하는 옵션인데 윈도우에서 작동에 문제가 있음
};

export default Configuration;

function typeEnumWithKor(value) {
  const { header, always, ...rest } = value;
  const type = header.split(':')[0].split('(')[0];
  const keys = [
    // ...Object.keys(GIT_COMMIT_CONFIGURATION['type-enum-kor']),
    ...Object.keys(GIT_COMMIT_CONFIGURATION['type-enum-en']),
  ];
  return [keys.some((t) => t === type), '다음 중 하나를 선택해주세요: ' + keys.join(', ')];
}

function typeEmptyWithKor(value) {
  const { header, always, ...rest } = value;
  const regex = /^[가-힣a-zA-Z]+\([가-힣a-zA-Z0-9]*\)!?:\s[^\s]+.*|^[가-힣a-zA-Z]+!?:\s[^\s]+.*$/;

  const isMatched = regex.test(header);
  return [isMatched, '머릿말을 양식에 맞게 작성해주세요 (예: "feat(comments): message", "fix(bug): message" )'];
}
