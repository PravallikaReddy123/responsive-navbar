let navItemsContainerEl = document.getElementById("navItemsContainer");
let wrongIconEl = document.getElementById("wrongIcon");
let iconEl = document.getElementById("icon");
iconEl.addEventListener("click", function() {
    navItemsContainerEl.classList.toggle("display");
    iconEl.classList.toggle("display");
    wrongIconEl.classList.toggle("display");
});
wrongIconEl.onclick = function() {
    navItemsContainerEl.classList.toggle("display");
    iconEl.classList.toggle("display");
    wrongIconEl.classList.toggle("display");
}