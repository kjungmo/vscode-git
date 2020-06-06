const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser"

function paintGretting(text){
    greeting.innerText = `tello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){  // 유저가 없는 경우

    } else {   // 유저가 있는 경우

    }
}

function init(){
    loadName();
}

init();