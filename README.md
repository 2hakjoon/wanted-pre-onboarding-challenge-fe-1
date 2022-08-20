# 원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제

## 프로젝트 소개 및 회고

원티드 프리온보딩 챌린지에 참가하여 진행한 Todo List 프로젝트입니다.  
세션 내용은 익숙한 구조의 프로젝트에 React Query를 적용하고, 피드백을 받으며 코드 품질을 높혀가며 진행되었습니다.  
React Query라는 기술스택을 적용하여 비동기 데이터 처리의 복잡도를 줄여서 효율적으로 관리 할 수 있었습니다.  
챌린지를 통해 클린코드, 관심사 분리, 선언적 프로그래밍, custom hooks활용 등을 배울 수 있었습니다.  
이전의 기능구현 중심의 개발이 아닌 완성도 높은 코드에 더 집중하는 개발 자세를 가지게 되었습니다.  
라이브러리를 단지 사용하는것 뿐만 아니라, 기본 원리를 이해하려고 노력하는 자세를 가지게 되었습니다.

### 적용한 라이브러리

- React
- Typescript
  - 타입기반의 안전한 프로그래밍을 위하여 적용했습니다.
- Axios
  - 비동기 요청간의 Error Handling, Interceptor기능이 필요하여 적용했습니다.
- Tanstack React Query
  - 비동기 데이터를 효과적으로 관리하기 위해 적용했습니다.
- Styled Component
  - UI 컴포넌트를 작성하기 위해 적용했습니다.
- Cypress
  - 빈번한 리팩토링으로 인한 테스트시간을 줄이기 위해 적용했습니다.
- Yup
  - form입력값의 유효성검사시, regex를 대체하기위해 적용했습니다.

## 설치 및 실행

```bash
yarn
yarn start
```

## Cypress e2e 테스트

1. e2e 테스트를 하기 앞서서 react서버를 실행시킵니다.

```bash
yarn start
```

2. cypress 실행.

```bash
npx cypress open
```

3. 초기 데이터 셋팅.

- auth
  - 아레의 테스트 계정을 미리 회원가입해주세요. login 테스트에 필요합니다.
  ```javascript
  email: 'test@test.com';
  password: '12345678';
  ```
- todo
  - todo 리스트가 없는 상태에서 테스트를 진행해주세요.


## 챌린지 과정

- 1-1 회차 회고 : https://2hakjoon-mindmap.tistory.com/17

  - 선언적 프로그래밍. HOW가 아닌 WHAT으로 코드를 작성해야 가독성이 더 좋다.
  - 관심사 분리. business로직과 view로직은 분리하자.
  - 적절한 추상화. 지나친 추상화는 오히려 안좋다. 컴포넌트간의 추상회 수준은 동일하게.
  - 비동기 처리. ErrorBoundary와 Suspense에 위임하기.

- 1-2 회차 회고 : https://2hakjoon-mindmap.tistory.com/18

  - 외부 요소와의 결합이 강한 코드는 좋지 않다. ‘추상(abstraction)’에 의존하며 ‘구체(concretion)’에는 의존하지 말자.
  - 제어권 위임을 통해 결합을 느슨하게 하자. 대표적으로 콜백함수가 있다. React에서는 HOC가 예시 일것같다.

- 2-1 회차 회고 : https://2hakjoon-mindmap.tistory.com/19
  - 공식문서를 근거로 코드를 작성하는 습관.
  - UI 수정.


## 데모 영상

### Login

[screen-recording (1).webm](https://user-images.githubusercontent.com/61589338/185561611-82df89db-4149-4045-90df-43ffe4a58431.webm)

### Todo CRUD

[screen-recording (4).webm](https://user-images.githubusercontent.com/61589338/185561986-5ed155fb-392d-4308-80f5-77dea3c77dbe.webm)

### Todo Loading

[screen-recording (2).webm](https://user-images.githubusercontent.com/61589338/185561681-db795cd3-8ebe-473e-9197-706fb2a46ba4.webm)

## 과제 구현 내용

### Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발.

  - [x] 이메일, 비밀번호 input, 제출 button을 갖도록 구성.
  - [x] 이메일과 비밀번호의 유효성을 확인.
  - [x] 이메일 조건 : 최소 @, . 포함.
  - [x] 비밀번호 조건 : 8자 이상 입력.
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화.
  - [x] 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동.
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장.
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트.
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트.

### Assignment 2 - Todo List

---

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요

  - [x] 목록 / 상세 영역으로 나누어 구현.
  - [x] Todo 목록을 볼 수 있음.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됨.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있음.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있음.

- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 함.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 함.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현.
  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영됨.

## UI Before and After

### Before

Todo
![localhost_3001_](https://user-images.githubusercontent.com/61589338/183292545-2787a57b-a5ee-4fcb-87f6-d3904b25ba85.png)

### After

Todo
![localhost_3001_ (3)](https://user-images.githubusercontent.com/61589338/185561259-02211ade-9ab4-465b-bf5b-6feaa93b5bb3.png)

## 프로젝트 구조

```bash
+---cypress
|   +---downloads
|   +---e2e
|   |   +---auth
|   |   \---todo
|   +---fixtures
|   \---support
+---public
\---src
    +---api
    |   +---Auth
    |   \---Todos
    +---common
    |   \---components
    |       +---button
    |       +---error-loading
    |       +---header
    |       +---helmet
    |       +---icons
    |       +---input
    |       \---skeleton
    +---persistStore
    +---reactQuery
    +---screen
    |   +---home
    |   |   +---component
    |   |   +---hooks
    |   |   \---template
    |   +---login
    |   |   +---hooks
    |   |   \---template
    |   \---sign-up
    |       +---hooks
    |       \---template
    +---style
    \---types

```

### 폴더구조

| 폴더           | 용도                                                                                 |
| -------------- | ----------------------------------------------------------------------------------- |
| **cypress**    | 테스트 자동화를 위한 cypress코드                                                      |
| **api**        | 백엔드 서버와의 REST API통신을 위한 Axios코드, 인스턴스. BaseUrl, endpoints            |
| **common**     | 프로젝트내에서 공용으로 사용하는 파일들을 작성, hooks, components                       |
| **persistStore** | localhost를 추상화한 함수 보관.                                                     |
| **reactQuery** | react-query의 queryClient변수 선언 및 export. config 코드 작성                        |
| **screen**     | 각 라우트 별로 component, template, hooks를 작성                                      |
| **style**      | 전역 theme객체 작성.                                                                 |



## 좋았던 점

세션내용은 너무 좋았다. 딱 지금의 내가 고민하고 있던 부분들을 대부분 해소시켜주었다.
멘토님같은 개발자가 되기 위해서 학습해 나가야 하는 방향도 배울 수 있었고, 스스로에게 동기부여도 생겼다.

## 아쉬웠던 점

redux의 createStore를 구현하는 과제가 있었다. createStore자체는 이해하는데 어렵지는 않았다.  
그러다가 redux를 직접 구현해볼까? 하는 생각에 직접 코드를 이것저것 짜보다가 결국은 실패했다.  
redux를 직접 구현해서 login 및 전역 modal에 적용하고 싶었는데, 아직 이 부분은 완성하지 못했다.  
챌린지 이후에라도 완성해서 적용하고 싶다.
