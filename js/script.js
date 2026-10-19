const begin = document.getElementById("begin");
const wheel = document.getElementById("wheel");
const title = document.getElementById("title");

/* DOM manipulation to change the button's function based on where
it was pressed from */
begin.addEventListener("click", function () {
    if (begin.textContent.trim() === "Begin") {
        wheel.classList.add("show");
        title.classList.add("hide")
        begin.textContent = "Return";
    } else {
        wheel.classList.remove("show");
        title.classList.remove("hide");
        begin.textContent = "Begin";
    }
});