const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = []; //toDo가 여러개 생길 수 있기 때문에 array사용. 시작에 이렇게 해두자. 그리고나서는 toDo가 생성되면 array에 추가되도록 한다.

function deleteToDo(event){   // 삭제 부분의 첫 단계로 html부분의 li를 지우는 작업을 수행, delBtn이 생성된 자리 아래에 addEventlistener를 생성(Click)
    //console.dir(event.target); target사용하면 해당 이벤트가 발생한 것을 특정지을 수 있다.
    //console.log(event.target.parentNode); 위의 console.dir로 콘솔창에서 부모값을 찾아서 찍어보자
    const btn = event.target;
    const li = btn.parentNode; //지워야할 li요소 관련
    toDoList.removeChild(li); //여기까지만 하면 새로고침 시 지워진 toDo가 다시 화면에 표시됨
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id); // li 에 없는 id인 toDos를 체크하고자 한다.(지우고자 하는 toDo이기 때문)
    }); // filter는 array의 모든 아이템을 통해 함수를 실행, 그리고 true인 아이템들만 가지고 새로운 array를 만든다
    toDos = cleanToDos // 지우고 남은 toDo를 바꾸고 그다음에 saveToDos사용하여 저장한다
    saveToDos();
} 

function saveToDos(){  //위의 toDos를 가져와서 저장하는 함수다.
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // JSON.stringify는 자바스크립트 object를 string으로 바꿔준다.
}

function paintToDo(text){
    const li = document.createElement("li"); //js에서 html 수정 않고도 li라는 것을 생성해주는 작업이다. 괄호안의 li 를 입력하는게 중요 
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1; //맨 처음엔 이 toDos array가 비어있으니까 id 값은 1 일것임.
    delBtn.innerText = "❌"; // 삭제 버튼 만들고 이모지로 나타내주는 것
    delBtn.addEventListener("click", deleteToDo);
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
    saveToDos(); // 저장기능 호출 순서는 push이후로. 전에 호출하면 저장 안됨 근데 여기까지만 하고 어플리케이션 가면 저장이 {object Object}라고 이상하게 
                //되어있을 것이다. 자바스크립트는 local storage에 있는 모든 데이터를 string으로 저장하려고 하기 때문.그래서 
                // 우리의 object를 string이 되도록 만들어야 한다. 그 기능이 바로 JSON.stringify이다.
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
        const parsedToDos = JSON.parse(loadedToDos);    // 새로고침해도 localStorage에 저장된 toDos를 불러오고자 한다. JSON을 또 사용함.(맨밑에 JSON 각주)
        parsedToDos.forEach(function(toDo){  //forEach는 기본적으로 함수를 실행하는데 array 에 담겨있는 것들 각각에 한번씩 함수를 실행시켜 준다. forEach 괄호 안에 바로 함수만들어 넣을 수 있다. 
                                            // forEach 괄호 안에 들어가는 함수는 parsedToDos에 있는 것들 각각에 대해 실행해줄것임. function 은 밖에서 생성되어도 호출 가능하다.
            //console.log(toDo.text) //일단은 toDo의 text를 console.log하겠다 . 새로고침 하면 parsedToDos에 들어있는 각각의 text들이 console.log된걸 볼 수 있다(콘솔창)
            paintToDo(toDo.text);    //실제로는 paintToDo를 사용해 toDo의 텍스트를 화면에 띄울 것임
        });   //이 loadToDo는 맨 위의 빈 array 인 toDos를 로딩된 값으로 채워주고자 한다.
        // 최종적으로 toDos를 가져온 뒤, parsed로써 가져온 것을 자바스크립트 object로 변환하고
        // 각각에 대해서 paintToDo function이 실행된다. toDo.text에 대해 실행된다.
        // 이로서 화면에 출력될 뿐더러, html부분에서 id도 각각 1, 2, 3이 매겨져 있다.
    } 
}

function init(){
    loadToDos(); //1) 먼저, 로컬스토리지에서 로드해와야 한다
    toDoForm.addEventListener("submit", handleSubmit)
}

init();

// JSON은 'JavaScript Object Notation'의 준말로 데이터를 전달할 때, 
//              자바스크립트가 그것을 다룰 수 있도록 object로 바꿔주는 기능이다
//              그래서 자바스크립트의 object를 string으로 변환해주기도 하고
//              string을 object로 변환해주기도 한다.