const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");
const generateColor = () => {
    let randomColor = "#" + Math.random().toString(16).substring(2,8);
    document.body.style.background = randomColor;
    hex.innerHTML = randomColor;
}
btn.addEventListener("click", generateColor);
generateColor();