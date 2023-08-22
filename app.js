let inputOne = document.querySelector(".input-One");
let inputTwo = document.querySelector(".input-Two");

let buttun_1 = document.querySelector(".buttun-1");
let buttun_2 = document.querySelector(".buttun-2");

let playerOneRight = document.querySelector(".playerOneRight");
let playerOneWorng = document.querySelector(".playerOneWorng");
let playerTwoRight = document.querySelector(".playerTwoRight");
let playerTwoWorng = document.querySelector(".playerTwoWorng");

let answer = document.querySelector(".answer");

playerOneRight.value = 0;
playerOneWorng.value = 0;
playerTwoRight.value = 0;
playerTwoWorng.value = 0;

let Oneright = 0;
let Oneworng = 0;
let Tworight = 0;
let Twoworng = 0;


function func_1() {
  let random = 0;
  random = Math.floor(Math.random() * 10) + 1;
  console.log(random);

  answer.innerHTML = random;

    let inputOneValue = document.querySelector(".inputOne").value;
  let inputTwoValue = document.querySelector(".inputTwo").value;

  // שניהם עובדים
  if (Number(inputOneValue) === random && Number(inputTwoValue) === random) {
    playerOneRight.innerHTML = ++Oneright;
    playerTwoRight.innerHTML = ++Tworight;
  }
  // שניהם לא עובדים
  else if (Number(inputOneValue) !== random && Number(inputTwoValue) !== random) {
    playerOneWorng.innerHTML = ++Oneworng;
    playerTwoWorng.innerHTML = ++Twoworng;
  }
  // רק אחד מהם לא עובד
  else if (Number(inputOneValue) !== random && Number(inputTwoValue) === random) {
    playerOneWorng.innerHTML = ++Oneworng;
    playerTwoRight.innerHTML = ++Tworight;
  }
  else if (Number(inputTwoValue) !== random && Number(inputOneValue) === random) {
    playerTwoWorng.innerHTML = ++Twoworng;
    playerOneRight.innerHTML = ++Oneright;
  }
  clearInput();
}

function func_2() {
   answer.innerHTML = 'no number';
  playerOneRight.innerHTML = 0;
  playerOneWorng.innerHTML = 0;
  playerTwoRight.innerHTML = 0;
  playerTwoWorng.innerHTML = 0;
  Oneright = 0;
  Oneworng = 0;
  Tworight = 0;
  Twoworng = 0;
  clearInput();
}

function clearInput() {
  let getInputOne = document.querySelector(".inputOne");
  if (getInputOne.value != "") {
    getInputOne.value = "";
  }
  let getInputTwo = document.querySelector(".inputTwo");
  if (getInputTwo.value != "") {
    getInputTwo.value = "";
  }
}
buttun_1.addEventListener("click", func_1);
buttun_2.addEventListener("click", func_2);
