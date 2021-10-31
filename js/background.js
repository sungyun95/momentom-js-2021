// nico 코드 ----------------------------------
const images = ["0.jpg", "1.jpg", "2.jpg" ]
const todaysImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img") // img 태그 생성

bgImage.src = `img/${todaysImage}`            // img 태그 안에 src 속성(attribute) 추가

document.body.appendChild(bgImage)            // HTML body 안에 마지막에 <img src=""> 추가


// 학습 내용 ---------------------------------

// createElement
// appendChild, prependChild