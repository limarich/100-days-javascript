const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(coupon.value).then(() => {
        btn.innerHTML = "Copied";
        setTimeout(() => {
            btn.innerHTML = "Copy";
        }, 3000);
    })
});