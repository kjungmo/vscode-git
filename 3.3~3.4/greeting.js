const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function paintGretting(text){
    form.classList.remove(SHOWING_CN); //텍스트를 색칠하려면 form을 숨겨야한다
    greeting.classList.add(SHOWING_CN)
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){  // 유저가 없는 경우

    } else {   // 유저가 있는 경우
        paintGretting(currentUser);
    }
}

function init(){
    loadName();
}

init();