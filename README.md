# Final Project - Blog 만들기
------------

## Project(블로그) 설명
> 본 프로젝트는 HTML, CSS, JavaScipt를 사용하여 웹 페이지를 구현하였고 Node.js(express), Heroku를 활용하여 서버를 연동하였습니다.

> HTML을 통해 블로그의 전체적인 틀을 구성하였고 CSS를 통해 간격, 글씨 크기, 색상 등을 설정하여 블로그를 디자인 하였습니다. JavaScipt는 사이드메뉴와 시계, 페이지네이션 등을 구성하는 데 활용 하였습니다. 

> Node.js(express)를 통해 서버를 만들고 이를 Heroku에 올려 서버를 사용할 수 있도록 하였습니다.

-------
## 프로젝트 구조 
 - public 디렉터리: css, images, js 디렉터리가 포함되어 있는 디렉터리로 이미지파일, css파일, js파일들이 포함됨
 - routes 디렉터리: page.router.js파일이 포함되어 있고 라우팅과 관련된 디렉터리
 - views 디렉터리: index.html외 7개의 html 파일이 포함되어 있음, layout.html은 블로그 페이지에서 반복되는 주요부분인 큰 틀이 작성되어 있고 이 파일을 기준으로 나머지 html 파일의 내용이 추가됨
 - app.js 파일: 객체 생성, 미들웨어등 express의 주요 설정과 관련된 파일

## 블로그 페이지 구성
 - 기본 페이지: index.html
 - 카테고리 페이지: cafe.html, food.html, daily.html, diary.html, review.html

 ## 블로그 페이지 설명 
  - 본 블로그는 크게 header, main, footer로 구성되어 있습니다.  
  - header에는 로그인과 사이드 메뉴 버튼, 블로그 이름, 상단 
  이미지, 카테고리가 포함되어 있습니다. 
  - main은 좌측 사이드에 프로필, 시계, 활동기록과 우측에 페이지에 따른 내용으로 구성되어 있습니다.
  - footer에는 저작권 정보가 포함되어 있습니다.

-------

## 주요 코드 설명

### - header 태그- 전체적인 구조(html)

   ```html
     <ul class="menu">
          <li> 로그인 </li> ...
     </ul>

     <a href="index.html" id="title">
          <h3> Chae J </h3>  ...
     </a>

     <div class="home-image">
          <div><img src="/img/diary.jpg"></div>  ...
     </div>

     <div class="category">
          <ul>...</ul>
     </div>

     <nav id="hidden-menu" class="hidden">
          <ul>...</ul>
     </nav>
   ```
header 태그는 크게 5개의 태그 ul태그, a태그, div태그, div태그, nav태그로 구성되어 있으며 각각 상단의 버튼, 블로그 이름, 상단 이미지, 카테고리, 숨겨진 사이드 메뉴와 관련된 코드이다


### - main태그- 전체적인 구조(html)

   ```html
    <div class="side">
        <div class="side-profile">...</div>
        <div class="clock">...</div>
        <div class="log">...</div>
        <div class="add-neighbor-container">... </div>
    </div>

    <div class="content">
        <div class="content-line1">
            <div class="line1-coffee">...</div>
            <div class="line1-food">...</div>
        </div>
        <div class="content-line2">
            <div class="daily">...</div>
            <div class="daily">...</div>
        </div>
        <div class="content-line3">
            <div class="line3-diary">...</div>
            <div class="line3-review">...</div>
        </div>
    </div>
   ```
main태그는 크게 2개의 div태그로 사이드 부분과 우측 메인 부분이 구성되어 있으며 사이드 부분은 다시 4개의 div 태그로 프로필, 시계, 활동기록, 숨겨진 친구추가 관련 태그로 구성되어 있다. 우측 메인 부분은 3개의 div 태그를 이용하여 세 부분으로 나누었다. 

### - 상단 사이드메뉴
```html
<li id="menu-button"><img src="/img/3lines.png"></li>
```
```html
<nav id="hidden-menu" class="hidden">
     <ul>
          <li><a href="#">글쓰기</a></li>
          <li><a href="#">쪽지함</a></li>
          <li><a href="#">설정</a></li>
     </ul>
</nav>
```
```css
#hidden-menu {
    position: fixed;
    top: 45px; right:12%;
    z-index:2; ...
}
#hidden-menu.hidden { right: -100%; }
#hidden-menu>ul>li>a:hover { text-decoration: underline; }
```
```js
let hidden = true;

menuButton.addEventListener('click', () => {
    if (hidden) {
        hiddenMenu.classList.remove('hidden');
        hidden = false;
    }
    else {
        hiddenMenu.classList.add('hidden');
        hidden = true;
    }
});
```
id가 menu-button인 요소에 js를 활용해 클릭이벤트를 설정하여 클릭하면 id가 hidden-menu인 숨겨진 메뉴가 나타나고 다시한번 클릭하면 사라지도록 하였다. #hidden-menu 요소의 위치를 고정하고 z-index를 2로 설정하여 앞쪽에 위치하도록 하였으며 right: -100% 를 통해 class가 hidden일 때는 화면에 보이지 않도록 하였다. 


### - 카테고리
```html
<ul>
     <li><a href="/cafe">카페모음</a><p>|</p></li>
     <li><a href="/food">맛집추천</a><p>|</p> </li>
     <li><a href="/daily">일상</a><p>|</p></li>
     <li><a href="/diary">일기</a><p>|</p></li>
     <li><a href="/review">리뷰★</a><p>|</p></li>
</ul>
```
```css
.category>ul {
     display: flex; ...
}
.category>ul>li { display: flex; ... }
.category>ul>li:hover { font-weight: bold; }
```
ul태그와 li태그를 이용하여 카페모음, 맛집추천, 일상, 일기, 리뷰★ 항목을 가진 카테고리를 만들었다. ul태그와 li 태그의 display속성을 flex로 하여 항목들이 가로로 나열되도록 하였고 hover를 통해 마우스를 올릴 시 글씨두께가 두꺼워지도록 설정하였다.


### - 친구추가 버튼(프로필 내)
```html
<p><button onclick="popup();">친구추가▶</button></p>
```
```html
<div class="add-neighbor-container">
     <div class="add-neighbor">
          <h4>친구추가</h4>
          <div>Chae J님을 </div>
          <div><a>친구목록에 추가</a>하시겠습니까?</div>
          <div class="popup-buttons">
               <button>추가</button>
               <button id="cancel" onclick="closePopup()">취소</button>
          </div>
     </div>
</div>
```
```css
.add-neighbor {
    width: 320px;
    display: flex;
    flex-direction: column; ...
}
.popup-buttons button {
    height: 24px; width: 80px;
    border:1px solid rgb(193, 199, 192);
}
```
```js
function popup() {
    document.querySelector('.add-neighbor-container').style.display = "flex";
}
function closePopup() {
    document.querySelector('.add-neighbor-container').style.display = "none";
}
document.querySelector('.add-neighbor-container').addEventListener('click', (e) => {
    if (e.target.tagName === "DIV") {
        document.querySelector('.add-neighbor-container').style.display = "none";
    }
});
```
친구추가 버튼을 클릭 시 popup()함수가 작동하도록 설정하였고 클릭하면 클래스가 add-neighbor-container인 요소가 보이도록 하였으며, 취소버튼을 클릭시 display속성을 다시 none으로 설정하여 사라지도록 하였다. 

클래스가 add-neighbor인 요소의 display속성을 flex로  flex-direction속성을 column으로 설정하여 세로로 나열되도록 하였고 가로 크기를 320px로 설정하였다.

.add-neighbor 요소 내의 두개의 버튼에 대해 가로와 세로 크기를 각각 80px, 24px로 설정하였고 1px 두께의 테두리도 설정하였다.

### - 시계
```html
<div class="clock">
     <h4></h4>
     <h1>00:00:00</h1>
</div>
```
```js
const clockContainer = document.querySelector(".clock");
todayContainer = clockContainer.querySelector("h4");
clock = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date;
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    todayContainer.innerText = 
    `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDay()}일`;

    clock.innerText = 
    `${hours < 10 ? `0${hours}` : hours}:${
     minutes < 10 ? `0${minutes}` : minutes}:${
     seconds < 10 ? `0${seconds}` : seconds}`; 
}
function init(){
     getTime();
     setInterval(getTime,1000);
}
init();
```
getTime() 함수에서 .clock 요소 내의 h4요소에 대해 그 내용을 오늘 날짜로 채우도록 하였고 .clock요소의 내용에는 현재 시간이 작성되도록 하였다. 현재 시간을 가져올 때 시, 분, 초에 대해 두자리로 설정하기 위해 삼항연산자를 사용하여 숫자가 10보다 작을 시 앞에 '0'을 붙이도록 하였다.


### - 더보기 버튼, 페이지 이동
```html
<a href="/" id="title"></a>
<ul>
     <li><a href="/cafe">카페모음</a><p>|</p></li>
     <li><a href="/food">맛집추천</a><p>|</p> </li>
     <li><a href="/daily">일상</a><p>|</p></li>
     <li><a href="/diary">일기</a><p>|</p></li>
     <li><a href="/review">리뷰★</a><p>|</p></li>
</ul>
``` 
a태그를 가진 위 요소들은 상단의 블로그 이름 요소와 카테고리 요소로 이들에 대해 각각 위치를 설정하여 클릭할시 내용에 맞는 페이지로 이동되도록 설정하였다. 

### - 페이지네이션
```html
<div class="main-photo show" id="page-1-content">
     <div class="photo-frame"> ... </div>
</div>
<div class="main-photo" id="page-2-content">
     <div class="photo-frame"> ... </div>
</div>
```

```html
<div class="pagination">
     <a href="#" class="page current-page" id="page-1">1</a>
     <a href="#" class="page" id="page-2">2</a>
</div>
``` 
```css
.main-photo{
    display: none;
    margin-bottom: 10px;
}
.pagination {
    width: 50%;
    justify-content: center; ...
}
.current-page{
    border-bottom: 1px solid rgb(41, 38, 38);
    font-weight: bold;
}
```
```js
const pages = document.querySelectorAll('.page');
const mainPhotos = document.querySelectorAll('.main-photo');

function selectPage(e) {
    removeBorder();
    removeShow();
    this.classList.add('current-page');
    const mainPhoto = document.querySelector(`#${this.id}-content`);
    mainPhoto.classList.add('show');
}
function removeBorder(){
    pages.forEach(item => item.classList.remove('current-page'));
}
function removeShow(){
    mainPhotos.forEach(item => item.classList.remove('show'));
}
pages.forEach(item => item.addEventListener('click',selectPage));
``` 
.main-photo요소의 display속성을 none으로 설정하여 화면에 보이지 않도록 하였고 이에 대해 selectPage(e) 함수를 이용해 현재 페이지에 따라 show 클래스를 설정하여 .show 요소는 화면에 보이도록 설정하였다. 

selecPage(e)함수: 페이지네이션의 페이지를 클릭함에 따라 선택에서 해제된 페이지 항목의 css 설정을 제거, 선택에서 해제된 페이지에 대한 .main-photo요소가 사라지도록 하고 선택된 페이지 항목은 css를 설정하여 글씨를 두껍게, 아래 선이 생기도록 하였으며 페이지의 맞는 .main-photo요소가 화면에 보이도록 설정하였다.

---

## Node.js(express), Heroku 활용
 - 라우터 설정: page.router.js에서 index.html, cafe.html, food.html, daily.html, diary.html, review.html 페이지에 대하여 요청에 따른 경로를 설정하여 주소에 따라 페이지가 잘 이동될 수 있도록 함

 - html파일과 css,js,이미지 파일 연결: app.js에서 미들웨어를 활용하여 요청시 중간에 public디렉터리를 거쳐가도록 설정하였고 puliblic디렉터리 내에 css, js, 이미지 파일을 넣음으로써 html 파일의 css,js,이미지가 깨지지 않고 잘 나오도록 하였다.

 - heroku 서버: app.js에서 const PORT = process.env.PORT와 app.listen(PORT ...)를 작성하여 heroku가 사용할 포트를 알아내어 이 포트를 사용하도록 설정하였다.

-------

## 비고 및 고찰
> 본 프로젝트를 통해 html를 이용한 페이지의 레이아웃 구조를 확실히 알 수 있었으며 다양한 태그들을 사용함으로써 태그의 활용 방법도 알게 되었다.
> JavaScript를 이론적으로 알 뿐 아니라 직접 작성해 보고 어디에 활용할 수 있을지를 고민해보며 javascript 문법과 사용 방법을 확실하게 알게 되었다. 

> node.js와 express에 대해 처음 배웠을 때 잘 이해가 되지 않았고 함수, 객체, 패키지들에 대한 개념과 문법이 익숙하지 않았는데 프로젝트를 통해 직접 작성하고 생성해봄으로써 패키지와 객체를 활용할 수 있게 되었고 express의 미들웨어의 작동원리나 사용 방법에 대해서도 이해하고 적용할 수 있게 되었다.


> 아직 javascript와 서버 관련 부분이 부족한 것 같다. 다른 사람들이 만든 여러 코드나 오픈소스,  관련 사이트들을 통해 어떻게 javascript가 활용되는지, 어떤 패키지들이 있는지 등을 보고 학습하여 활용 범위를 넓힐 필요가 있다.