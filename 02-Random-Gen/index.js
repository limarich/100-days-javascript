const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNumber = () => {
    number.innerHTML = Math.floor(Math.random() * 10 + 1);
}
btn.addEventListener("click", generateNumber);

generateNumber();