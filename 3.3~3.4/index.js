/*const title = document.getElementById("title"); //html에서 가져오는 방법이다

console.log(title);
//Document Object Module 이것을 통해 자바스크립트는 html에 있는 모든 요소를 가져온다. 그리고 이것을 객체로 바꿀 것이다. html태그를 가져다가 객체로 만든다. 자바스크립트로 html을 바꿀 수 있다. 
*/

/*
const title = document.querySelector("#title");
/*title.innerHTML = "Hi! From JS";
title.style.color = "red";
document.title = "I own you now"; */

/*function handleResize(event){
    console.log(event);
}

window.addEventListener("resize", handleResize); //여기서 function에 ()붙이면 "즉시 실행하라"라는 뜻이므로 붙이지 않는다.
// 이렇게 써서 출력하면 event가 발생할 때마다 이벤트 객체가 호출된다.
*/
/*
function handleClick() {
 title.style.color = "blue";
}
*/
/*
title.addEventListener("click", handleClick);
// 클릭하면 빨간색으로 바뀐다.

*/
/*
if(10>5){  //'==='는 좌우가 같은지 확인하는 뜻
    console.log("hi");
} else {
    console.log("ho");
}

const age = prompt("How old are you?")

if(age >= 18 && age <= 21) {
    console.log('you can drink but you should not')
} else if(age > 21) {
    console.log("go ahead")
} else {
    console.log("you cant")
}
*/

const title = document.querySelector("#title"); //queryselector 많이 사용할 예정이다. id를 찾으렴녀 #를 붙이고 class찾으려면 .을 붙인다
/*
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#bdc3c7";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}
*/
const CLICKED_CLASS = "clicked";
/*
function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    }
}
*/  // 위에가 너무 길어서 toggle 써서 아래와 같이 만든다.

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    //title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();