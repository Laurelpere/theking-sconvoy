const overlay = document.querySelector(".overlay");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const hidden = document.querySelector(".hidden")
const nav = document.querySelector("ul")
const header = document.querySelector("header")


const openFunc = function () {
    // open.classList.add("hidden");
    // close.classList.remove("hidden");
    open.style.display = "none";
    close.style.display = "block";
    overlay.classList.remove("hidden");
    nav.style.visibility = "visible";
}

const closeFunc = function () {

    // open.classList.remove("hidden");
    // close.classList.add("hidden");
    open.style.display = "block";
    close.style.display = "none";
    overlay.classList.add("hidden");
    nav.style.visibility = "hidden";
}

open.addEventListener("click", openFunc);
close.addEventListener("click", closeFunc);