const TODOS_KEY = "todos"

const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector(".todo-input");
let toDos = [];
todoForm.addEventListener("submit", handleToDoSubmit);

// 뭐부터해야할까

// 배열에 입력값 넣어주기
function handleToDoSubmit(event){
	event.preventDefault();
	console.log(todoInput.value);
	const newTodo = todoInput.value;
	todoInput.value = "";
	const newTodoObj = {
		text: newTodo,
		id: Date.now(),
	}
	toDos.push(newTodoObj);
	paintToDo(newTodoObj);
	saveToDos();

}

// 화면에 그려주기
function paintToDo(newTodo){
	const li = document.createElement("li");
	li.id = newTodo.id;
	
	const recordTime = getDateTime(newTodo.id)
	const record = document.createElement("div");
	record.innerText = recordTime;

	const span = document.createElement("span");
	span.innerText = newTodo.text;

	const checkContain = document.createElement("div");
	
	const button = document.createElement("button");
	button.innerText = "❌";

	const checkbutton = document.createElement("input");
	checkbutton.type = "checkbox";

	
	todoList.appendChild(li);
	li.appendChild(record);
	li.appendChild(span);
	li.appendChild(button);
	button.addEventListener("click", deleteToDo)
}

function getDateTime(val)	{
	const date = new Date(val);
	const month = String((date.getMonth() +1)).padStart(2,"0");
	const day = String(date.getDate()).padStart(2,"0");
	const hours = String(date.getHours()).padStart(2,"0");
	const minutes = String(date.getMinutes()).padStart(2,"0");
	const second = String((date.getSeconds())).padStart(2,"0");
	const result = `작성일
	 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${second}초`

	return result;

}
// getDateTime();
function checkdbox(check, text){
	if(check === false){	
		text.style.textDecoration = overline;
	}else{
		text.style.textDecoration = none;
	}

}

// 리스트 삭제
function deleteToDo(event){
	const li= event.target.parentElement;
	li.remove();
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	saveToDos();
}

// 리스트 localstorage 저장
function saveToDos(){
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 리스트 얻어오기
function LoadingToDo(){
	localStorage.getItem("todos", JSON.parse(toDos));
}  

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	parsedToDos.forEach(paintToDo);
}
