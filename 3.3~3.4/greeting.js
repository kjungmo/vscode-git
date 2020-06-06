const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser",
    SHOWING_CN = "showing";


function handleSubmit(event){

}

function askForName(){
    form.classList.add(SHOWING_CN);// 여기까지만 치면 what ~name? 에 이름 입력해도 아무 일도 일어나지 않는다
    form.addEventListener("submit", handleSubmit) //그래서 이벤트리스너 만들어서 입력한 것을 제출하게끔 한다. 새로 function만든다
}

function paintGretting(text){
    form.classList.remove(SHOWING_CN); //텍스트를 색칠하려면 form을 숨겨야한다
    greeting.classList.add(SHOWING_CN)
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){  // 유저가 없는 경우
        askForName();
    } else {   // 유저가 있는 경우
        paintGretting(currentUser);
    }
}

function init(){
    loadName();
}

init();