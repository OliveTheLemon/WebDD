# 풀이 순서

1. 비번호로 폴더 만들기(연습 시에는 문제 유형으로)
2. css, script, images 폴더 만들기
3. html, css, js 파일 생성하기
4. html 기본 틀(!) 만들고 index.html 열기
    1. 또는 live server로 확인
    2. link랑 script 태그 작성
5. css 기본 설정 작성하기
    1. charset, :root(색상 선언), *, html, a, 리스트
6. 기본 레이아웃 만들기
    2. 이미지 사이즈 대략 결정하기
    3. 개발자도구(F12) 들어가서 확인
7. 이미지 작업
    1. 포토샵 단위 pixel인지 확인
8. 슬라이드 레이아웃 & CSS 작업
    1. 실격 방지를 위해 먼저 작업
9. 메뉴 레이아웃 & CSS 작업
10. 제이쿼리 작업

# html, css, js 기본틀

### index.html

```jsx
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>서비스이름</title>
    <link rel="stylesheet" href="css/index.css" />
    <script src="script/jquery-1.12.3.js"></script>
    <script src="script/index.js"></script>
  </head>
  <!-- 메뉴, 슬라이드, 팝업(첫공지) -->
  <!-- 레이아웃 특이사항 작성 -->
  <body>
    <div id="wrap">
    </div>
  </body>
</html>
```

### index.css

```css
@charset "UTF-8";
:root {
  --main-color: #fff;
  --sub-color: #fff;
  --bg-color: #fff;
  --text-color: #333;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  background-color: var(--bg-color);
  color: var(--text-color);
}
a {
  text-decoration: none;
  color: inherit;
  display: inline-block;
}
ul,
ol {
  list-style: none;
}
```

### index.js

```jsx
$(function () {
  // ----- 메뉴
  // ----- 슬라이드
  // ----- 팝업
}
```
