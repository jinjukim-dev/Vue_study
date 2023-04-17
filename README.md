### 3월 13일 교육 1-2시
인텔리제이, 이클립스 설치
jasper, jstl 설치
새로운 과제

#### 과제1
random-data-api.com/api/v2/users?size=100
1. random-data-api.com/api/v2/users?size=100 호출 - fatch 
2. 호출된 데이터로 테이블로 표시
3. Paging 처리. (전체보기, 10개씩 보기, 20개씩, 30개씩) - slice
4. 검색기능
5. 남성/여성 비율 계산
6. 나이대 계산. 10대 이하, 20대 ~ 50대 이상
7. 거주지(State) 별 인원 계산 - reduce
8. 테이블 컬럼별 정렬 기능 - sort

#### 과제2
리엑트 useMemo를 활용해서 만들기

#### 과제3
Component를 세분화하여 만들어보기
계산기
customComponenet 이용
사칙연산 되게 만들기
계산 기록을 남겨서 옆에 볼 수 있게 하기

#### 과제4
Vue 적용해보기

#### 과제5
1. 로그인페이지 : admin.json
2. 관리자 페이지
- 좌측 메뉴 (공통영역으로 추가)
-- 회원관리 : user.json - 상세페이지
-- 상품관리 : product.json - 상세페이지

- 페이지 5개
로그인페이지 6
메뉴 영역 3
회원관리 페이지 1 - 회원관리 상세페이지 2
상품관리 페이지 4 - 상품관리 상세페이지 5


#### react
return 화면 생성
모듈을 불러와 화면 구성
export default Test();
class -> className
label : for -> htmlFor
style = {} 선언부

promise resolve -> then(), reject -> chatch
promise all -> reject는 해당 부분만 reject

useEffect 
생성주기
마지막 부분 배열 []

useState*
값지정
비동기
setText(state => 함수사용을 해야함.)

useRef
값지정
랜더링 속도저하문제로 사용 -> 변경이 둔하다.
input 사용 시 실시간 변경이 필요없을 때 

useMemo*
state가 변경되면 감지해서 계산된 값으로 변경해주는 기능
map, filter, reduce 이 반복 계산의 빈도가 높은 경우 사용
Intl datetime

useCallback - userMemo 함수버전
memo는 변수 지정
callback 함수 지정

useReducer
javascript reduce와 비슷하지만 index가 없음.
state가 기본값.

javascript
axios - fatch와 비슷

moment보다 date-fns 더 많이 쓰는 추세
*반복문 사용 시에 최상위 key값 설정

yarn dev 실행
routing
custom component
onchange 함수
모듈화
context API

#### Vue 2
Nuxt.js 사용
template 태그 사용, 파일당 최대 한개만
computed : 
methods : - function 선언
watch: - 변경된 값을 보여줌, data랑 이름이 같아야함. 실시간 변동감지
내부에서 변수나 함수 호출시 this 사용해야함.
basecomponent
- 공통화면 부분 분리해서 사용가능
이벤트 : @click = "" 사용
확장 : vue language Feature 사용

#### Vuex
mutations
actions

#### Vue3
DOM v-* 용어삭제
vue2 create -> vue3 onBeforeMount?
ref 실시간으로 변동되는 것을 탬플릿에서 확인하기 위함.

#### JSP
자바 서버 페이지
properties 설정
html 내부 자바 소스 <%= %>
webapp/WEB-INF/jsp에서 만들어서 과제

#### JSTL
gradle jstl 선언
jsp 상단 taglib prefix c 선언 시  0jstl core 선언 -> c:out 사용가능

#### jquery
$("#a1").text() / .html() / .append() , eq, children, parent
ramdomapi 패키지 설정
prop (input은 prop사용 권장) - attr

#### 6일차
@CrossOrigin

### yarn 설치
1. Set-ExecutionPolicy RemoteSigned -> y
2. npm i -g yarn 또는 npm install -g yarn
3. Code 터미널에서 yarn -v 했을 때 버전 안뜨면, Code 재실행 후 다시

yarn -v 버전 뜬 후에
2:46
yarn install 
yarn dev 서버 실행

***

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
