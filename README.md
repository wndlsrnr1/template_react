# React 보일러 플레이트

이 레포지토리는 실무 또는 개인 포트폴리오 생성 시 바로 가져다 세팅 할 수 있도록 만들어둔 React 보일러 플레이트 입니다.

### 기본 세팅

-   `vite` 번들러 세팅
-   `Rust`기반 `SWC`컴파일러 세팅
-   `ESlint` + `Prettier` 세팅
-   `@reduxjs/toolkit` 세팅
-   `tailwindcss` 세팅
-   `ModalFrame.jsx`컴포넌트를 기반으로 한 전역 모달 관리 틀 세팅
-   `LoadingSpinner.jsx` 전역 로딩 스피너 세팅
-   `@/api/controller.js`모듈 기반의 `axiosInstance`관리 세팅
-   기본적으로 컴포넌트 및 페이지는 `*.jsx` + `*.module.css` 구조로 세팅

    **( \*.css사용시 스타일 중첩문제가 발생하여 \*.module.css로 작성 )**

-   선택적 `https`옵션 제공
-   절대경로 `@` alias 제공

### `src/` 내부의 폴더요소

1. `api` - api들을 관리하는 폴더

    - `controller.js` - axios모듈들을 하나로 통합하는 파일
    - `axiosInstance.js` - 전체적인 axios의 요청(request) 및 응답(response)을 세팅하는 파일
    - `modules` - axios 모듈들을 관리하는 폴더

2. `assets` - 이미지, 폰트, json파일 등 정적파일들을 관리하는 폴더

    - `index.css` - 프로젝트 전체에 적용할 css 스타일을 명시하는 파일

3. `components` - 최상위 `components`폴더는 프로젝트의 전반적인 라우트에서 빈번히 사용되는 컴포넌트(ex. 헤더, 푸터, 스피너, 모달 등)들을 관리하는 폴더

4. `pages` - route 폴더

    - `index.jsx` - 프로젝트의 route들을 관리하는 파일
    - `(root)` - / 페이지

5. `store` - 전역 상태 관리를 하는 폴더

    - `index.js` - reducer들을 모아놓은 store
    - `reducers` - reducer들을 관리하는 폴더

6. `utils` - 각종 유틸 함수를 관리하는 폴더

현재 세팅된 기능 및 폴더들을 활용해 더 빠르게 React 프로젝트 구축을 하면 됩니다.

(사용된 라이브러리는 package.json 참조)

---

### 실행 방법

`npm i`

`npm run dev`

### 개발자 정보

-   김경범 - `프론트엔드` xops09685@gmail.com – 이메일 주소
