webpackJsonp([86068921076954],{1096:function(e,n){e.exports={data:{contentfulBlogPost:{title:"자바스크립트 호이스팅",id:"c4qnduaJ8oEASSEM0oMWIEM",tags:["general"],categories:["javascript"],publishDate:"2018-05-27T11:05+09:00",heroImage:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAMAAAAFH/x6AAAAV1BMVEXw20/r1k62qEbZx0uaj0HcyUzk0U1rZTl7dDyfk0LOvUnEtEhXVDarnkTDs0inmkNyazqek0K1p0VkYDjey0ybkEHWxEvRwEqaj0HTwkrw20/w20/w20+CTUbrAAAACXBIWXMAABcRAAAXEQHKJvM/AAAAB3RJTUUH4gYGADA7Uz5lggAAADFJREFUCNdjYCAWMMIZIPAbwmaBCbJiE2RgYGaEaYMJ8oG1owmyIQtCaSkIzfgEt5MAI/EDOrf1bmUAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC",aspectRatio:2.3088235294117645,src:"//images.ctfassets.net/hu4faubeotg0/3SGn7CBi9aE62YIekmOyOk/9f7dc4e86d70ede94f2c88b47724dabf/javascript.png?w=1280&q=50",srcSet:"//images.ctfassets.net/hu4faubeotg0/3SGn7CBi9aE62YIekmOyOk/9f7dc4e86d70ede94f2c88b47724dabf/javascript.png?w=320&h=139&q=50 320w,\n//images.ctfassets.net/hu4faubeotg0/3SGn7CBi9aE62YIekmOyOk/9f7dc4e86d70ede94f2c88b47724dabf/javascript.png?w=640&h=277&q=50 640w,\n//images.ctfassets.net/hu4faubeotg0/3SGn7CBi9aE62YIekmOyOk/9f7dc4e86d70ede94f2c88b47724dabf/javascript.png?w=785&h=340&q=50 785w",sizes:"(max-width: 1280px) 100vw, 1280px"}},body:{childMarkdownRemark:{html:"<p>자바스크립트를 공부하는 사람들은 호이스팅이라는 용어를 접해본 경험이 있을 것이다.\n정의를 내려보기 전에, 아래의 예제를 한번 살펴보도록 하자.</p>\n<pre><code>function greeting() {\n  console.log('hello');\n}\n\ngreeting();\n</code></pre>\n<p>greeting 함수를 호출 할 때, 예상대로 hello 문자열이 console에 기록이 될 것이다.</p>\n<p>하지만 함수를 선언하기 전에 실행하면 어떻게 될까?</p>\n<pre><code>greeting();\n\nfunction greeting() {\n  console.log('hello');\n}\n</code></pre>\n<p>위 예시는 신기하게도 처음 예시와 동일하게 hello 문자열을 콘솔창에 기록한다.</p>\n<p>이것이 바로 호이스팅이 동작하는 방식이다.</p>\n<p>대부분 이 호이스팅 동작 방식을 설명할 때, 선언한 변수와 함수를 실행 컨텍스트 최상단으로 끌어올린다고 설명한다. 이 말도 맞는 말이지만, 코드 단계에서는 어떠한 이동도 발견되지 않는다.\n가장 중요한 점은 함수와 변수 선언부는 컴파일 단계에서 메모리에 추가된다는 점이다.</p>\n<p>위 예제들의 함수 선언 구문은 컴파일 단계에서 메모리에 추가됐으므로 실행 컨텍스트 내에서 이 함수 선언 구문에 접근하고 실행할 수 있는 것이다.</p>\n<p>일반적으로 우리는 변수를 선언하고 초기화한 다음 변수를 사용하려고 할 것이다.</p>\n<pre><code>var a = 3;\nconsole.log(a);\n\n// 3\n</code></pre>\n<p>하지만, 아래와 같이 변수를 선언하면 어떻게 될까?</p>\n<pre><code>a = 3;\nconsole.log(a);\nvar a;\n\n// 3\n</code></pre>\n<p>아래의 예시는?</p>\n<pre><code>console.log(a);\nvar a = 3;\n// undefined\n</code></pre>\n<p>3을 예상했겠지만, undefined가 출력됐다.</p>\n<p>왜 이런 현상이 발생했을까..?\n그 이유는 자바스크립트는 오직 선언문만 끌어올린다(호이스팅한다). 초기화는 호이스팅되지 않는다.</p>\n<p>우리가 만약 선언과 초기화를 동시에 한다면, var a = 3;에서 var a;만 상단으로 호이스팅된다.</p>\n<p>자바스크립트에서 변수는 선언만하고 초기화를 하지 않는다면, 자동으로 undefined를 할당한다.</p>\n<p>아래의 예제는 똑같이 undefined를 출력한다. (선언문만 호이스팅하고, 초기화는 호이스팅되지 않는다.)</p>\n<pre><code>console.log(c);\nvar c = 3;\n// undefined\n\nvar d;\nconsole.log(d);\nd = 3;\n// undefined\n</code></pre>\n<h2>Best Practice</h2>\n<p>이러한 자바스크립트의 특성때문에, 변수들은 실행컨텍스트 최상단에 선언하는 것이 바람직한 방법이다. 이러한 방법은 의도치않은 동작을 막을 수 있는 좋은 습관이다.\n(실행컨텍스트 최상단에 변수 선언과 초기화를 같이 해주는 것이 가장 깔끔한 방법이라고 생각한다. 코드가 직관적이고, 의도를 파악하기 쉽기 때문 + 의도치않은 동작까지 막을 수 있음)</p>"}}}},pathContext:{slug:"javascript-hoisting"}}}});
//# sourceMappingURL=path---blog-javascript-hoisting-52cc26157a0459d771e8.js.map