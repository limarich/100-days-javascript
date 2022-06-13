const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    coupon.select();
    coupon.setSelectionRange(0, 9999);
    document.execCommand("copy");
    btn.innerHTML = "Copied";
});