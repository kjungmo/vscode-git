const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text); //입력한 것을 저장하게 해줌
}   //localStorage는 URL을 기초로 동작한다. application(f12)에서 볼 수 있다.

function handleSubmit(event){
    event.preventDefault();//event 의 default 동작을 막기위함(default동작으로 새로고침식이 되어서 사용자가 제출한 값이 다른데로 가기 때문이다. 이걸 만들어서 what~name? 에 값을 입력하면 값이 입력된 채로 화면이 변하지 않는다)
    const currentValue = input.value; //console.log해보면 input하는 value를 console에 나타내준다.
    paintGretting(currentValue); //currentValue의 텍스트를 paintGreeting 값으로 넣어주는것이다.
    saveName(currentValue); // 값을 submit한다면 paintGreeting도 하지만 saveName도 currentValue값으로 해준다
    //이렇게 까지 하고나면 사용자가 값을 입력한 그대로 페이지에 출력되어 남아있게 된다. 
}

function askForName(){
    form.classList.add(SHOWING_CN);// 여기까지만 치면 what ~name? 에 이름 입력해도 아무 일도 일어나지 않는다
    form.addEventListener("submit", handleSubmit) //그래서 이벤트리스너 만들어서 입력한 것을 제출하게끔 한다. 새로 function만든다
}

function paintGretting(text){
    form.classList.remove(SHOWING_CN); //텍스트를 색칠하려면 form(what ~name?)을 숨겨야한다
    greeting.classList.add(SHOWING_CN); //  greeting을 보여주고
    greeting.innerText = `Hello ${text}`;  //내가 친 text를 넣어주는 역할
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

//이런식으로 하면 한 가지 값이 저장될 수 있고
//html이랑 css도 약간 손보고 들어가야 했다.