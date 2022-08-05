# 원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제

## 프로젝트 소개
React Query라는 기술스택을 새롭게 공부하면서 진행한 프로젝트입니다.  
개인적인 욕심으로 cypress를 이용한 e2e테스트 자동화까지 구현해봤습니다. 

### 기술 스택
  * Typescript
  * React
  * React Query
  * Cypress
  * Styled Component


## 과제 구현 내용
### Assignment 1 - Login / SignUp
* /auth 경로에 로그인 / 회원가입 기능을 개발.  

  - [x] 이메일, 비밀번호 input, 제출 button을 갖도록 구성.
  - [x] 이메일과 비밀번호의 유효성을 확인.
  - [x] 이메일 조건 : 최소 @, . 포함.
  - [x] 비밀번호 조건 : 8자 이상 입력.
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화.
  - [x] 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동.
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장.
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트.
  - [ ] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트.

### Assignment 2 - Todo List
----
* Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요

  - [x] 목록 / 상세 영역으로 나누어 구현.
  - [x] Todo 목록을 볼 수 있음.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됨.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있음.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있음.
* 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 함.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 함.
* 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현.
  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영됨.


## Cypress 테스트
cypress 실행.
``` bash
npx cypress open
```
테스트를 하기 위해서는 초기 데이터 셋팅이 필요합니다.
  * auth
    * 아레의 테스트 계정을 미리 회원가입해주세요. login 테스트에 필요합니다.
    ```javascript
    email : 'test@test.com'
    password :'12345678'
    ```
  * todo
    * todo 리스트가 없는 상태에서 테스트를 진행해주세요.

## 프로젝트 구조
```bash
├── cypress
│   ├── e2e
├── package.json
├── public
├── src
│   ├── App.tsx
│   ├── api
│   │   ├── Auth
│   │   │   ├── login.ts
│   │   │   └── signUp.ts
│   │   ├── Todos
│   │   │   ├── todos.ts
│   │   │   └── types.ts
│   │   ├── custom-fetch.ts
│   │   └── endpoints.ts
│   ├── common
│   │   ├── components
│   │   │   ├── button
│   │   │   │   └── ButtonBasic.tsx
│   │   │   └── input
│   │   │       ├── InputBasic.tsx
│   │   │       └── InputLabel.tsx
│   │   └── constants
│   │       ├── local-storage.ts
│   │       └── regex.ts
│   ├── index.css
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── screen
│   │   ├── home
│   │   │   ├── HomeScreen.tsx
│   │   │   ├── component
│   │   │   │   ├── TodoDetail.tsx
│   │   │   │   └── TodoListCard.tsx
│   │   │   └── template
│   │   │       └── TodoListTemplate.tsx
│   │   ├── login
│   │   │   └── LoginScreen.tsx
│   │   ├── routes.ts
│   │   └── sign-up
│   │       └── SignUpScreen.tsx
│   ├── setupTests.ts
│   ├── style
│   │   └── theme.ts
│   └── types
│       └── styled-component.d.ts
├── tsconfig.json
└── yarn.lock
```