const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// const loginFormBtn = document.querySelector("#login-form button");

const HIDDEN_CLASSNAME = "hidden" // 반복해서 쓰는 문자열의 경우 변수명에 저장, all 대문자
const USERNAME_KEY = "username"

// greetings.js
// loginFormInput에 이름 입력 하고 login 버튼 클릭하면 loginForm 사라짐(HTML 자체 없애기 or CSS로 숨기기)
// 브라우저에 Hello + username 나타남
// 새로 고침 할 때 유저의 이름 저장(localstorage), 유저의 이름이 없을 경우 loginform, 있는 경우 greeting

// 내 코드-------------------------------------------------------------------------------------------------------------
// loginFormBtn.addEventListener("click", loginBtnClick)

// function loginBtnClick() {
//   const savedUserName = localStorage.getItem('username');
//   if (savedUserName == undefined) {
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const userName = loginFormInput.value;
//     helloUser.innerText = `Hello! ${userName}`;
//     helloUser.classList.remove(HIDDEN_CLASSNAME);
//     localStorage.setItem('username', userName)
//   } else {
//     greeting.innerText = `Hello! ${savedUserName}`;
//   }
// }

// nico 코드-------------------------------------------------------------------------------------------------------------
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);      // local Storage API (MDN)
  paintGreetings(username);                          // paintGreetings 함수로 변경, 같은 코드 반복 시 함수로
  }

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null) { // show loginform
  loginForm.classList.remove(HIDDEN_CLASSNAME); // class hidden을 처음부터 추가함
  loginForm.addEventListener("submit", onLoginSubmit);
  } else { // show greeting
  paintGreetings(savedUsername);
  }

// 학습 내용-------------------------------------------------------------------------------------------------------------
// loginBtn을 클릭했을 때 event 발생, 방금 실행 된 event에 대한 정보 호출(eventlistener가 있을때)------------------------
// loginForm.addEventListener("submit", onLoginSubmit)

// function onLoginSubmit(event) {
//   event.preventDefault(); //event의 기본 행동이 발생되는 것을 막는 것(ex)새로고침)
//   console.log(event);
// }

// link click event 막기--------------------------------------------------------------------------------------------------
// const testLink = document.querySelector('a');

// testLink.addEventListener("click", onlinkclick)

// function onlinkclick(event) {
//   alert("click!") // alert는 모든 브라우저의 기본 동작을 막음
//   event.preventDefault();
//   console.log(event);
// }
