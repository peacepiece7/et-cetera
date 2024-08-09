# `@turbo/eslint-config`

Collection of internal eslint configurations.

turbo 설정에서 사용되는 환경변수를 찾는데 도움을 받기 위해 이 패키지를 사용합니다.

```json
{
  "extends": ["turbo"]
}
```

https://turbo.build/repo/docs/reference/eslint-config-turbo

# `settings["import/resolver"].typescript`

모노레포 특성상 eslint가 모듈 경로를 어떻게 해석할지 설정합니다.

# parser, rule, plugin

parser, rule, plugin 세 가지는 각 패키지 내부에서 설정합니다.

**중복되더라도 가능한 공통 설정으로 빼지 않습니다.**

# eslint-recommended

'use-no-vars'가 interface에 사용된 함수의 파라메터에도 적용되어서 rules를 추가 설정해줘야하고

대부분 `@typescript/eslint-recommended`와 중복되기 때문에 뺏습니다.

(타스를 안쓰는 프로젝트는 eslint-recommended)
