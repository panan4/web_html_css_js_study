<h1>반응형 웹디자인&웹퍼블리셔 양성 과정 버전 기록</h1>
<p> ex) 날짜 - 제목 - 요약 </p>
<h2> 23.02.13 시작 - html </h2>
<p>H1~H6, p, br, inline, block</p>
<p>H1~H3은 검색키워드로 활용가능하다. H4~H6 꼭 필요한 경우만 이용하거나 권장안함</p>
<p>block과 inline태그는 의미에 맞게 외부/내부 구조로 구성해서 사용해야 한다.(의미 중첩되지 않도록)</p>
<h2> 23.02.14 HTML - 문서태그+네비게이션의 개념 </h2>
<p>코딩중 특수문자를 기입할 경우 “>”해당하는 특수문자는 &gt;인데 &는 시작, gt는 >, ; 끝마침표시이다., strong과em은 강조인데 em이 상위 강조이다, sub 아래첨자, sup 윗첨자, del 중간줄텍스트, blockquote는 q문과 비슷한데 긴 인용글을 사용할때 쓰고 q문과 똑같이 cite를 이용하여 외부참조할 수 있고, address는 제일 하단의 주소나 연락처를 적는것이며, q문의 사용시 cite를 이용하여 외부참조할 수 있다. 그리고 hr문을 이용하여 구분선을 만들수도있다. 또한 웹페이지 코딩 시 읽는 순서는 가로부터 세로가 전체적인 읽는 순서는 맞지만 구성페이지를 위에서부터 아래로 먼저 읽고 그다음 왼쪽으로 가는게 맞는 표현이다. 그리고 TIP이지만 Vscode에서 Alt+Z를 누르면 자동 줄바꿈이 된다.</P>

<p>Gnb 제일 상단의 카테고리, Lnb 서브 카테고리, Snb 사이드카테고리, Fnb제일하단 카테고리, Breadcrumbs 카테고리의 경로를 뜻한다.</p>
<blockquote cite="https://webty.tistory.com/85"> 유나쌤 블로그 참고 - https://webty.tistory.com/85</blockquote>
<h2> 23.02.15 HTML - 목록태그 </h2>
<p>목록 태그를 사용할때 ol과 ul은 부모이기 때문에, 자식으로는 li만 포함될 수 있다. 조심해야하는게 생각없이 내용이라서 p나, 제목 h문을 넣으면 안된다는걸 유의해야한다.</p>
<p>목록 태그를 사용할때 ul은 순서와 관계없는 정렬, ol은 순서와 관련된 정렬이니 이 점을 유의하고 제목과 목록태그 사용에 있어 햇갈리니 조금 더 생각해보고 쓰자</p>
<ul>
  <li>ul,ol,li는 이렇게</li>
  <li>써야한다</li>
</ul>
<p>dl,dt,dd문의 사용은 가장 밖부터 dl로 묶어 dt는 제목 dd는 내용이다.<br>dt의 경우 h1~6문은 사용 못하지만 em,strong등의 인 문항은 가능하고 dt 1개에 dd1개이상의 구조를 가져야만 dt와 dd의 사용이 옳바르게 작동한다.<br>또한 dd안에 ol,ul과 같은 정렬 문도 사용 가능하다. 특히 쇼핑몰에서 많이 사용된다.</p>
<div>
  <h2>23.02.16 - HTML - 시맨틱태그, 그룹태그</h2>
  <dl>
    <dt>시맨틱태그와 그룹태그</dt>
    <dd>
      2개 이상의 블록태그들을 묶는데 사용하는건 div문이다.<br>
      그리고 2개 이상의 인라인태그들을 묶는건 span문이다.<br>
      시맨틱태그에는 로고와 네비를묶는 header<br>
      네비를 묶는 nav<br>
      문서의 제목과내용을 묶는 section<br>
      문서의 주요내용과 간접적인 연관된 부분 즉 사이드바 혹은 콜아웃박스로 표현하는부분을 aside<br>
      사이트내에 독립적으로 구분해 배포하거나 재사용 구획을 묶는 article<br>
      하단부분 adress문을 주로 사용하는 footer<br>
      독립적 컨텐츠 주로 이미지와 그의 설명이 들어가는 figure<br>
      열림상태일 때만 내부 정보를 보여주는 정보 공개 위젯을 생성하는 details<br>
      문서의 Body부분을 담당하는 main<br>
      맥락에 관련이 깊거나 중요표시를 해주는 mark<br>
      시간의 특정 지점이나 구간을 나타내는 time이 있다.
    </dd>
  </dl>
</div>
<h2>23.02.17 - HTML - 하이퍼링크와 이미지, 비디오</h2>
<p>
  a태그는 <a HTML <a>요소(앵커)는 href속성을 통해 다른 페이지나 같은 페이지의 어느 위치,<br>
파일, 이메일 주소와 그 외 다른 URL로 연결할 수 있는 하이퍼링크를 만들어준다.<br>
ex) <a href=”링크주소”><br>
img태그<br>
ex) <img src=”URL” alt=””><br>
a href 태그<br>
<a href=”mailto:메일주소”>메일보내기</a><br>
<a href=”링크” download> **다운로드하기**</a><br>
<a href=”#id”> 바로가기 </a><br>
<video>태그는
autoplay 자동재생, 
muted 음소거(구글정책상 필수로 넣어야한다.), 
loop 반복 재생, 
controls 컨트롤바이있다.
</p>
<h2>23.02.19 - HTML - 해당 주 초반에 배운 내용 복습 1회 진행</h2>
<h2>23.02.20 - HTML - Table</h2>
    <table>
        <thead>
          <tr>
            <th><em>구분</em></th>
            <th><em>태그명</em></th>
            <th><em>의미</em></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="3">block</td>
            <td>&lt;tr&gt;</td>
            <td>가로행 태그</td>
          </tr>
          <tr>
            <td>&lt;td&gt;</td>
            <td>내용(열)태그</td>
          </tr>
           <tr>
            <td>&lt;th&gt;</td>
            <td>제목(열)태그</td>
          </tr>
       </table>
<h2>23.02.22 - HTML - Form</h2>
<!-- <form action="#" method="포스트,겟">
    <fieldset>
        <legend>이름</legend>
        <input type="텍스트,라디오,체크박스,패스워드,이메일 등등" name="태그이름" placeholder="입력값">
        <input type="라디오" name="라디오태그시작성폼" value="태그값">
        <input type="체크박스" name="라디오태그시작성폼" value="태그값">
    </fieldset>
</form> -->
<form action="#" method="get">
<fieldeset>
<legend>퀴즈</legend>
<span>다음 중 label for와 연관된 input 속성은?</span><br>
<label><input type="radio" name="quiz" value=id">1. id</label><br>
<label><input type="radio" name="quiz" value=class">2. class</label><br>
<label><input type="radio" name="quiz" value=name">3. name</label><br>
</fieldeset>
</form>
  
<form action="#" method="get">
<fieldeset>
<legend>퀴즈2</legend>
<span>다음 중 label type에 해당하지 않는 것은?</span><br>
<label><input type="radio" name="quiz" value=id">1. text</label><br>
<label><input type="radio" name="quiz" value=password">2. password</label><br>
<label><input type="radio" name="quiz" value=radio">3. radio</label><br>
<label><input type="radio" name="quiz" value=checkbox">4. checkbox</label><br>
<label><input type="radio" name="quiz" value=name">5. name</label><br>
</fieldeset>  
<h2>23.02.23 - CSS - font, selector</h2>
글꼴 적용 방법은 웹 주소 글꼴을 가져오는 법!

[https://fonts.google.com/](https://fonts.google.com/)

위 페이지에서 글꼴을 가져와 사용한다. 사용 방법은 복사하여
import는 제일위, css태그는 적용태그 {}안에 넣주면 된다.
  
  **오늘의 복습하기**
html,body,h1,h2,h3,h4,h5,h6,/* 제목태그 */<br>
p,ul,ol,li,blockquote,dl,dd,dt,address,video,/* 블록태그 */<br>
q, strong,em,del,sup,sub,s,code,img,a,/* 인라인태그 */<br>
table, tr, th, td, thead, tbody, tfoot,/* 테이블태그 */<br>
form,fieldset,legend,input,button,label,textarea,select,option,/* 폼태그 */<br>
header,main,section,article,footer,aside,nav,figure,figcaption,/* 시멘틱태그 */<br>
div,span/* 그룹태그 */<br>
  
  **VScode Tip!**

ctrl+k → ctrl+\ 누르면 위 아래로 볼 수 있다.(페이지 나누기)

위아래 코드 순서바꾸기는 alt[방향키 위/아래](https://www.notion.so/9ec0a79cd8414d03b23cc4236392463d)
  
  <h2>주말의 복습</h2>
<p>
    가로 크기를 준 대상에게 줄 자동...으로 처리하게끔 하는 CSS에서의 방법이다.
    width: 60%; <br>
    text-overflow:ellipsis;/* 정해진 크기 안에서만 보기이게하기 */ <br>
    white-space:nowrap;/* 한줄처리하기 */
</p>
    <h2> 23.03.07 CSS </h2>
<p>
    글의 앞뒤에 |를 넣는 방법<br>
    width: 1px; height: 15px; background-color: grey;<br>
    content: ''; display: inline-block;<br>
    position: relative; right: -9px; top: 2px;<br>
    <br>
    여러줄의 글을 외부처리 ...으로 하는방법<br>
    color: gray;<br>
    text-overflow:ellipsis;/* 정해진 크기 안에서만 보기이게하기 */<br>
    white-space:wrap;/* 한줄처리하기 */<br>
    overflow: hidden;/* 외부처리 ...으로 말줄임 */<br>
    -webkit-line-clamp: 3; /* 여러줄의 ...으로 말줄임 처리하는 법 작성 줄보다 -1줄을 적어야한다. */<br>
    -webkit-box-orient: vertical; /* 방향표시이며 버티컬은 수직 */<br>
    display:-webkit-box;<br>
<br>
    Flex 사용법<br>
    display: flex;<br>
    flex-flow: row nowrap;<br>
    justify-content: space-between;<br>
</p>
