/** @format */

const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkboxes);

// Initially while loading the screen we want to run this function
checkboxes();

function checkboxes() {
    console.log(window.innerHeight);
    const triggerBotton = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBotton) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
}
