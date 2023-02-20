// loder
const loder = document.querySelector(".loder");
setTimeout(() => {
    loder.classList.add("hidd")
}, 1500)
// food list
const drinksTitle = document.querySelectorAll(".drinks-title");
const drinkContent = document.querySelectorAll(".drinks-content");
drinksTitle.forEach((tit) => {

    tit.addEventListener("click", () => {
        if (tit.nextElementSibling.classList.contains("menu-content")) {
            tit.nextElementSibling.classList.remove("menu-content");
            tit.classList.add("active");
        } else {
            tit.nextElementSibling.classList.add("menu-content")
            tit.classList.remove("active");
        }
    })
})

// nav-bar
const menu = document.querySelector(".hamburger");
const links = document.querySelector(".links");
menu.addEventListener("click", () => {
    if (links.classList.contains("down")) {
        links.classList.remove("down");
    } else {
        links.classList.add("down");
    }
})
function afterAction() {
    links.classList.remove("down")
}


const readMoreBtn = document.querySelector(".redMoreBtn");
const readMoreText = document.querySelector("#redMore");
readMoreBtn.addEventListener('click', () => {
    if (readMoreText.classList.contains("hidd")) {
        readMoreText.classList.remove("hidd");
        readMoreBtn.textContent = "Hidden";
    } else {
        readMoreText.classList.add("hidd");
        readMoreBtn.textContent = "Read more";
    }
})