// quotes & author -----------------------------------------------------------------------------------------------------
const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "The world is a book and those who do not travel read only one page.",
    author: "Saint Augustine",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "To Travel is to Live",
    author: "Hans Christian Andersen",
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Never go on trips with anyone you do ntot love.",
    author: "Hemmingway",
  },
  {
    quote: "We wander for distraction, but we travel for fulfilment.",
    author: "Hilaire Belloc",
  },
  {
    quote: "Travel expands the mind and fills the gap.",
    author: "Sheda Savage",
  },
];

// 내 코드 -----------------------------------------------------------------------------------------------------
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const i = Math.floor(Math.random() * quotes.length);

quote.innerText = quotes[i].quote;
author.innerText = quotes[i].author;

// nico 코드 --------------------------------------------
// const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]
// quote.innerText = todaysQuote.quote

// 학습 내용--------------------------
// randomness
// Math modules
// random() : 0~1 사이 무작위 수
// round() : 반올림, ceil() : 올림(천장), floor() : 내림(바닥)
// array의 값이 변경될 수 있음 : quotes.length