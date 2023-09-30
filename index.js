const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);

const question = document.getElementById("question");
const formEle = document.getElementById("form");
const useAns = document.getElementById("input");
const score = document.getElementById("score");

question.innerText = `What is ${num1} multiply by ${num2}?`;
const ans = num1 * num2;
let points = JSON.parse(localStorage.getItem("points")); //json.parse is to change the number in the type of string to the original number form
if (!score) {
  score = 0;
}

score.innerText = `score:${points}`;
formEle.addEventListener("submit", () => {
  const userAnswer = Number(useAns.value);

  // the value from the input element is always a string so one should conver it into the number
  if (userAnswer === ans) {
    points++;
    updateLocalStorage();
  } else {
    points--;

    updateLocalStorage();
  }
});
// we should store the points inside the local storgae of the browser

function updateLocalStorage() {
  //we cannot store the type intgers in the local storage of the browser we should change it to the string
  localStorage.setItem("points", JSON.stringify(points));
}
