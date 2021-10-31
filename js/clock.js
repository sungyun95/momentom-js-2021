// 내 코드 = nico 코드-----------------------------------------------------------------------------------------------------
const clock = document.querySelector("#clock")

function getTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getTime()
setInterval(getTime, 1000)

// 학습 내용--------------------------------------------------------------------------------------------------------------

// setInterval(fucntion, ms) : ms(밀리초)마다 function 실행
// setTimeout(function, ms) : ms 뒤에 실행

// Date Object
// new Date() : 날짜에 대한 정보 / method : day, hours ~~~

// 시간을 두자리 수로 적는 방법
// padStart(length.string, "0"), padEnd() : str를 뒤쪽에 추가

// toString(), String()의 차이
// toString은 객채, String은 속성을 str로 바꿈

