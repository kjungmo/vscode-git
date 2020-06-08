const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text){
    console.log(text);
}

function handleSubmit(event){ // event 넣어줘서 prevent 할거다
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
}

function loadToDos(){   //2) 로컬 스토리지에서 가져오는 함수, TODOS_LS 도 선언해줘야 한다.
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){ // else가 쓰이지 않은 이유는 toDos와 null이 같아도 form은 늘 showing이어야 하기 때문이다

    } 
}

function init(){
    loadToDos(); //1) 먼저, 로컬스토리지에서 로드해와야 한다
    toDoForm.addEventListener("submit", handleSubmit)
}

init();