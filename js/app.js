"use strict";

// Прокрутка по клику
// Для прокрутки добавить к нужному элементу атрибут data-goto, его значение будет назначением прокрутки

document.addEventListener("click", scrollToElem);

function scrollToElem(e) {
    const targetElem = e.target;
    if (targetElem.dataset.goto && document.querySelector(targetElem.dataset.goto)) {
        const gotoBlock = document.querySelector(targetElem.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth",
        });
        e.preventDefault();
    }
}

// Scroll arrow to top of the page (elem #arrowToTop, add attr hidden)

if (document.querySelector("#arrowToTop")) {
    window.addEventListener("scroll", function () {
        if (scrollY > document.documentElement.clientHeight) {
            arrowToTop.hidden = false;
        } else arrowToTop.hidden = true;
    });

    arrowToTop.addEventListener("click", scrollToTop);

    function scrollToTop(event) {
        let targetElem = event.target.closest("#arrowToTop");

        if (targetElem) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }
}
