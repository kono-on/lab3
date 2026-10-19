/* Obtaining variables, focused on creation through Javascript
rather than storing in HTML */
const begin = document.getElementById("begin");
const wheel = document.getElementById("wheel");
const scroller = document.getElementById("scroll");
const title = document.getElementById("title");

const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const images = [
    "images/rubble.jpg",
    "images/process.jpg",
    "images/building.jpg"
];

const caption = document.getElementById("caption");
const leftText = "But they can be destroyed in one.";
const rightText = "Buildings are not built in a day...";

/* create image elements */
images.forEach(function (src) {
    const img = document.createElement("img");
    img.src = src;
    scroller.appendChild(img);
});

/* DOM manipulation to change the button's function based on where
it was pressed from */
begin.addEventListener("click", function () {
    /* Changes the text on the button based on its click */
    if (begin.textContent.trim() === "Begin") {
        wheel.classList.add("show");
        title.classList.add("hide")
        leftButton.style.display = "block";
        rightButton.style.display = "block";
        begin.textContent = "Return";
    } else {
        wheel.classList.remove("show");
        title.classList.remove("hide");
        leftButton.style.display = "none";
        rightButton.style.display = "none";
        begin.textContent = "Begin";
    }
});

let currentIndex = 0;

/* Scrolling function for images, captions handled by direction
parameter conditionals */
function scrollWheel(direction) {
    /* Handle image movement */
    scroller.style.transform = `translateX(-${currentIndex * 100}%)`;
    leftButton.classList.toggle("disabled", currentIndex === 0);
    rightButton.classList.toggle(
        "disabled",
        currentIndex === images.length - 1
    );
    /* handle dynamic caption */
    if (direction === "right") {
        caption.textContent = rightText;
    } else if (direction === "left") {
        caption.textContent = leftText;
    }
}
/* Listeners for scrolling buttons, disable if reached either end*/
rightButton.addEventListener("click", function () {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        scrollWheel("right");
    }
});

leftButton.addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex--;
        scrollWheel("left");
    }
});

/* Initialize first image */
scrollWheel("right");