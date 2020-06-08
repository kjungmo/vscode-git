const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = []; //toDo가 여러개 생길 수 있기 때문에 array사용. 시작에 이렇게 해두자. 그리고나서는 toDo가 생성되면 array에 추가되도록 한다.

function saveToDos(){  //위의 toDos를 가져와서 저장하는 함수다.
    localStorage.setItem(TODOS_LS, toDos);
}

function paintToDo(text){
    const li = document.createElement("li"); //js에서 html 수정 않고도 li라는 것을 생성해주는 작업이다. 괄호안의 li 를 입력하는게 중요 
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1; //맨 처음엔 이 toDos array가 비어있으니까 id 값은 1 일것임.
    delBtn.innerText = "❌"; // 삭제 버튼 만들고 이모지로 나타내주는 것
    span.innerText = text
    li.appendChild(delBtn); //appendchild는 무엇인가를 상위(father) element에 넣어준다
    li.appendChild(span);  //여기까지는 빈 li를 생성해서 그 안에 span과 delBtn넣음
    li.id = newId; // id를 toDos에 줌으로써 나중에 지울때 쓰인다.
    toDoList.appendChild(li); //그리고는 만든 li를 넣고 appendchild todolist 해줌
 //이 결과로 엔터를 눌렀을 때, li를 생성하고, delete버튼과  span을 생성한다
 // span과 delete버튼을 li안에 append하고, 마지막으로 li를 ul에다 append 하게 된다.
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj); //이렇게 push를 써서 array안에 element 하나를 넣어줄 수 있다. 
       // 이 경우에는 toDos array 안에 toDoObj를 넣게 된다. 이런식으로 toDos를 저장하는 이유는 localStorage에도 저장해야 하기 때문.
       //그래서 function saveToDos를 만들게 된다.
}

function handleSubmit(event){ // event 넣어줘서 prevent 할거다
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; //이것을 통해 입력한 값을 저장하고 placeholder칸에서 지워주는역할
}

function loadToDos(){   //2) 로컬 스토리지에서 가져오는 함수, TODOS_LS 도 선언해줘야 한다.
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){ // else가 쓰이지 않은 이유는 toDos와 null이 같아도 form은 늘 showing이어야 하기 때문이다

    } 
}

function init(){
    loadToDos(); //1) 먼저, 로컬스토리지에서 로드해와야 한다
    toDoForm.addEventListener("submit", handleSubmit)
}

init();