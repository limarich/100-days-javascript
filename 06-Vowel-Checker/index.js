const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", vowel);

function vowel() {
    let count = 0;
    const worlds = document.querySelector(".input-text").value.toUpperCase();
    for(let i = 0; i < worlds.length; i++) {
        if(worlds[i].match(/([a,e,i,o,u])/i)) {
            count++;
        }
    }
    result.innerHTML = `${worlds} has ${count} vowels`; 
}
