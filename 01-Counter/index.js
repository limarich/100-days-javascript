const buttons = document.querySelector(".buttons");
const  count = document.querySelector(".count");
buttons.addEventListener("click", (e) => {
    if(e.target.classList.contains("add")) {
        count.innerHTML++;
    }
    if(e.target.classList.contains("subtract")) {
        count.innerHTML--;
    }
    if(e.target.classList.contains("reset")) {
        count.innerHTML = 0;
    }
    setColor();
})
function setColor() {
    if(count.innerHTML > 0) {
        count.style.color = "yellow";
    } else if(count.innerHTML < 0) {
        count.style.color = "red";
    } else {
        count.style.color = "white";
    }
}