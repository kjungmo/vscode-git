const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text){
    const li = document.createElement("li"); //js에서 html 수정 않고도 li라는 것을 생성해주는 작업이다. 괄호안의 li 를 입력하는게 중요 
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌"; // 삭제 버튼 만들고 이모지로 나타내주는 것
    const span = document.createElement("span");
    span.innerText = text
    li.appendChild(span); //appendchild는 무엇인가를 상위(father) element에 넣어준다
    li.appendChild(delBtn);  //여기까지는 빈 li를 생성해서 그 안에 span과 delBtn넣음
    toDoList.appendChild(li); //그리고는 만든 li를 넣고 appendchild todolist 해줌
}

function handleSubmit(event){ // event 넣어줘서 prevent 할거다
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; //이것을 통해 입력한 값을 저장하고 placeholder칸에서 지워주는역할
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