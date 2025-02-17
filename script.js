let main = document.querySelector("#main");
let hide = document.querySelector(".hidden")


const openClass = function() {
    hide.style.opacity = 1;
}
main.addEventListener("load", openClass)