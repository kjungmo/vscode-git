/*const title = document.getElementById("title"); //html에서 가져오는 방법이다

console.log(title);
//Document Object Module 이것을 통해 자바스크립트는 html에 있는 모든 요소를 가져온다. 그리고 이것을 객체로 바꿀 것이다. html태그를 가져다가 객체로 만든다. 자바스크립트로 html을 바꿀 수 있다. 
*/

const title = document.querySelector("#title");
/*title.innerHTML = "Hi! From JS";
title.style.color = "red";
document.title = "I own you now"; */

function handleResize(event){
    console.log(event);
}

window.addEventListener("resize", handleResize); //여기서 function에 ()붙이면 "즉시 실행하라"라는 뜻이므로 붙이지 않는다.
// 이렇게 써서 출력하면 event가 발생할 때마다 이벤트 객체가 호출된다.