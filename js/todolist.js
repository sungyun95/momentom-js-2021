// todolist, 삭제버튼, localStorage 저장 + 삭제

const toDoForm = document.querySelector("#todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.querySelector("#todo-list")

let toDos = []; // localStorage에 있는 값이 있을 수 있어 let으로 수정 가능하도록 변경
const TODOS_KEY = "todos";

// 내 코드 ------------------------------------------------------
// toDoForm.addEventListener("submit", toDoFormSubmit);

// function toDoFormSubmit(event) {
//   event.preventDefault();
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   const button = document.createElement("button");
//   li.appendChild(span);
//   li.appendChild(button);
//   button.innerText = "✖"
//   span.innerText = toDoInput.value
//   toDos.push(toDoInput.value)
//   toDoList.appendChild(li)
//   const deleteBtn = document.querySelector("#toDoList li button")
//   deleteBtn.addEventListener("click", deleteList)
// }

// function deleteList(li){
//   toDoList.remove(li)
// }

// nico 코드 -------------------------------------------------------------------------------
toDoForm.addEventListener("submit", handToDoSubmit);

function handToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value; // input의 입력 value 저장
  toDoInput.value = ""; // input칸 다시 빈칸으로 만들기
  const newToDoObj = { // 문제점 : Delete해도 HTML에서는 지워져도 localStorage에서는 지워지지 않고 어떤 item을 지워야 하는지 모름 -> Obj를 만들어 item에 id를 준다, id는 Date.now()로
    text: newToDo,
    id: Date.now()
  }
  toDos.push(newToDoObj); // toDos Array에 newToDo 저장 -> newToDoObj에 id와 함께 저장
  paintToDo(newToDoObj); // paintToDo 함수 실행
  saveToDos();
}

function paintToDo(newToDo) { // Todolist에 li 추가하는 함수
  const li = document.createElement("li");
  li.id = newToDo.id; // li에 id(Date.now() 값)을 줌
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button"); // li, span, button 만들기
  button.innerText = "✅";
  button.addEventListener("click", deleteToDo); // button이 click 된 것 확인하기, deleteToDo 실행
  li.appendChild(span);
  li.appendChild(button); // li 안에 span, button 넣기
  toDoList.appendChild(li);
}

function deleteToDo(event) { // x버튼 누를 때 x버튼의 list 제거 함수
  // 클릭된건 확인 가능. 근데 어떤 li를 제거할지를 모름!!!
  //console.log(event)                      // event로 경로 파악하기!!, click target 파악
  //console.dir(event.target)               // a, b, c 버튼마다 parentNode, parentElement가 각각 있음. 
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //toDo.id(DB), li.id(x를 클릭한 li의 id, string이라서 parseInt)
  saveToDos(); // 새로운 array + DB 저장
}

const savedToDos = localStorage.getItem(TODOS_KEY);

function saveToDos() {
  // 문제점 : 새로고침 시 화면에 사라짐, storage에는 남음, 다시 입력하면 처음부터 시작함
  // 문제점2 : localStorage는 string만 저장가능, array가 안됨 but array처럼 보이게는 할 수 있음 -> JSON.strigify()
  // JSON.parse() -> ()안에 있는 걸 원래 형태로 돌려 놓음(string을 array로)
  localStorage.setItem("todos", JSON.stringify(toDos))
}

if (savedToDos != null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);   // Array.forEach(f) : array 각 item마다 함수 f를 실행함
  // parsedToDos.forEach((item) => console.log("arrow function")); // 화살표 함수, 이름X
  // 문제점 : a, b, c 잘 나옴, d, e, f 추가하고 새로고침 시 a, b, c 사라짐, d, e, f가 덮어 씌어짐 -> 앱이 시작할때 ToDos가 []로 비어있기 때문
}

// 학습 내용 --------------------------------------------------------------------------------

//function sexyFilter(){return trun} / {return false}
//array.filter(f)
//[1,2,3,4,5].filter(sexyFilter) 
//-> true일 경우 [1,2,3,4,5], item을 유지하고 싶으면 true를 return!!
//-> false일 경우 []
// filter는 array를 변경하지 않음, 다시 정의해줘야 함.